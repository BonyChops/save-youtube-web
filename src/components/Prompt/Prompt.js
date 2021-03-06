import React from "react";
import firebase from "../../firebase";
import config from "../../firebaseConfig";
import axios from "axios";
import YouTube from "react-youtube";
import PromisePool from "@supercharge/promise-pool";
import { Card, Checkbox, Col, Icon, Navbar, NavItem, Preloader, Row } from "react-materialize";
import Cookies from "js-cookie";
//import { getModal } from "../../tools";
import Swal from "sweetalert2";

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spamComments: false
        }
    }

    componentDidMount() {
        this.job();
    }

    job = async () => {
        const video = await this.getVideo(this.props.vKey);
        this.setState({ video });
        if (video === undefined) {
            return;
        }
        console.log(video)
        const [comments] = await this.getCommentThreads(video.id);
        comments.sort((a, b) => b.snippet.totalReplyCount - a.snippet.totalReplyCount);
        const { results, errors } = await PromisePool
            .for(comments.filter((v, k) => k < 20 && v.snippet.totalReplyCount > 0))
            .process(async comment => {
                const [comments] = await this.getComments(comment.id);
                return comments;
            })
        const replies = [].concat.apply([], results);
        const spamComments = [];
        for (const comment of replies) {
            if (this.props.spamLink.some(link => comment.snippet.textOriginal.indexOf(link) !== -1)) {
                comment.reason = {
                    type: "spam_link",
                    matched: this.props.spamLink.find(link => comment.snippet.textOriginal.indexOf(link) !== -1)
                }
                spamComments.push(comment);
                continue;
            }
            if (this.props.spamRegex.some(regex => comment.snippet.textOriginal.match(new RegExp(regex)) !== null)) {
                comment.reason = {
                    type: "spam_regex",
                    matched: this.props.spamRegex.find(regex => comment.snippet.textOriginal.match(new RegExp(regex)) !== null)
                }
                spamComments.push(comment);
                continue;
            }
            const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if (comment.snippet.textOriginal.match(urlPattern) !== null) {
                console.log(comment.snippet.textOriginal.match(urlPattern))
                console.log(comment.snippet.textOriginal.match(urlPattern)[0].trim())
                const videoId = this.props.returnId(comment.snippet.textOriginal.match(urlPattern)[0].trim());
                if (videoId) {
                    const video = await this.getVideo(videoId);
                    if (video && video.snippet.channelId !== this.state.video.snippet.channelId) {
                        console.log(video.snippet.channelId);
                        console.log(this.state.video.snippet.channelId);
                        comment.reason = {
                            type: "unrelated_video",
                            matched: `${video.snippet.channelTitle}: ${video.snippet.title}`
                        }
                        spamComments.push(comment);
                        continue;
                    }
                } else {
                    comment.reason = {
                        type: "includes_link",
                        matched: comment.snippet.textOriginal.match(urlPattern)[0].trim()
                    }
                    spamComments.push(comment);
                    continue;
                }
            }
            if (comment.snippet.textOriginal.length >= 100 && comment.snippet.likeCount < 10) {
                comment.reason = {
                    type: "long_but_no_likes",
                    matched: `?????????: ${comment.snippet.likeCount} ??????:${comment.snippet.textOriginal.length}`
                }
                spamComments.push(comment);
                continue;
            }
        }

        console.log(spamComments);
        this.setState({ spamComments: spamComments.map(comment => ((comment.selected = this.highSpam.includes(comment.reason.type)), comment)) });
    }

    lowSpam = ["long_but_no_likes", "unrelated_video"];
    highSpam = ["spam_link", "span_regex"];

    render() {
        return (
            <div>
                {this.state.video ? <div>
                    <div className="center">
                        <YouTube videoId={this.state.video?.id} opts={{
                            //
                        }} />
                    </div>
                    <br /><br />
                    <div>
                        {this.state.spamComments ? <div>
                            <Navbar
                                alignLinks="right"
                                brand={<span><Checkbox
                                    filledIn
                                    checked={
                                        this.state.spamComments
                                            .filter(comment => this.lowSpam.includes(comment.reason.type))
                                            .every(comment => comment.selected)
                                    }
                                    onChange={(e) => this.checkAll(e, this.lowSpam)}
                                />????????????????????? ({this.state.spamComments
                                    .filter(comment => this.lowSpam.includes(comment.reason.type) && comment.selected).length}/{this.state.spamComments
                                        .filter(comment => this.lowSpam.includes(comment.reason.type)).length})</span>}
                                className="yellow darken-3"
                                centerChildren
                            >
                            </Navbar>
                            <br /><br />
                            <Row>
                                {this.commentsToCards(this.state.spamComments.filter(comment => this.lowSpam.includes(comment.reason.type)))}
                            </Row>
                            <Navbar
                                alignLinks="right"
                                brand={<span><Checkbox
                                    filledIn
                                    checked={
                                        this.state.spamComments
                                            .filter(comment => this.highSpam.includes(comment.reason.type))
                                            .every(comment => comment.selected)
                                    }
                                    onChange={(e) => this.checkAll(e, this.highSpam)}
                                /> ?????????????????????({this.state.spamComments
                                    .filter(comment => this.highSpam.includes(comment.reason.type) && comment.selected).length}/{this.state.spamComments
                                        .filter(comment => this.highSpam.includes(comment.reason.type)).length})</span>}
                                centerChildren
                            >
                            </Navbar>
                            <br /><br />
                            <Row>
                                {this.commentsToCards(this.state.spamComments.filter(comment => this.highSpam.includes(comment.reason.type)))}
                            </Row>
                            <div class="center">
                                <button onClick={this.flagJob} id="flag-button" className="btn-large waves-effect waves-light red"><Icon left={true}>flag</Icon> ????????????</button>
                            </div>
                            <br /><br />
                        </div> : <div s={4} className="center">
                            ???????????????????????????????????????...<br /><br />
                            <Preloader
                                active
                                color="blue"
                                flashing={false}
                                size="big"
                            />
                        </div>}
                    </div>
                </div> : <Col s={4} className="center">
                    ?????????????????????????????????...<br /><br />
                    <Preloader
                        active
                        color="blue"
                        flashing={false}
                        size="big"
                    />
                </Col>}
            </div>
        );
    }

    flagJob = async () => {
        const token = Cookies.get().YT_TOKEN;
        if (token === undefined) {
            window.alert("??????????????????YouTube???????????????????????????????????????????????????(??????Google??????????????????????????????????????????????????????????????????????????????)");
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
            firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    console.log("Logged in!");
                    /** @type {firebase.auth.OAuthCredential} */
                    const credential = result.credential;

                    const token = credential.accessToken;
                    const user = result.user;
                    Cookies.set('YT_TOKEN', token, { secure: true });
                    this.flagJob();
                }).catch((error) => {
                    window.alert("??????????????????????????????...");
                    console.error(error);
                });
            return;
        }
        console.log("Checking access token...");
        let user;
        try {
            user = await this.getOwnChannel(token);
        } catch (e) {
            Cookies.remove("YT_TOKEN");
            this.flagJob();
            return;
        }
        console.log(user);
        this.props.setChannel(user);
        Swal.fire({
            title: "?????????????????????",
            icon: "warning",
            html: `<p><img class="circle" src="${user.snippet.thumbnails.default.url}" width="30px" /> ${user.snippet.title}?????????${this.state.spamComments.filter(comment => comment.selected).length}???????????????????????????????????????????????????????????????</p>`,
            showCancelButton: true,
            preConfirm: () => this.markAsSpam(this.state.spamComments.filter(comment => comment.selected).map(comment => comment.id), Cookies.get("YT_TOKEN"))
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `??????????????????`,
                    html: "<p>??????????????????????????????????????????????????????????????????????????????????????????...?????????????????????????????????</p>",
                    icon: "success"
                });
                this.props.setVideoId(false);
                this.props.setTmpVideoLink("");
            }
        }).catch(e => {
            Swal.fire({
                title: `?????????`,
                html: "<p>?????????????????????????????????????????????</p>",
                icon: "error"
            });
        })
    }

    markAsSpam = async (ids, token) => {
        const response = await axios.post("https://www.googleapis.com/youtube/v3/comments/markAsSpam", {
            id: ids.join(",")
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return;
    }

    getOwnChannel = async (token) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
            params: {
                part: "snippet",
                mine: true
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.items[0];
    }

    getVideo = async (id) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                part: "snippet",
                id,
                key: config.apiKey
            }
        });
        return response.data.items[0];
    }

    getCommentThreads = async (id, maxResults = 100, nextPageToken = undefined) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
            params: {
                part: "snippet",
                videoId: id,
                key: config.apiKey,
                nextPageToken,
                order: "relevance",
                maxResults
            }
        });
        return [response.data.items, response.nextPageToken];
    }
    getComments = async (parentId, maxResults = 100, nextPageToken = undefined) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/comments", {
            params: {
                part: "snippet",
                parentId,
                key: config.apiKey,
                nextPageToken,
                maxResults
            }
        });
        return [response.data.items, response.nextPageToken];
    }

    toggleTargetComment = (e, id) => {
        const spamComments = this.state.spamComments;
        console.log(this.state.spamComments.find(commentFromList => commentFromList.id === id).selected)
        spamComments.find(commentFromList => commentFromList.id === id).selected = e.currentTarget.checked;
        this.setState({ spamComments });
    }

    checkAll = (e, array) => {
        const spamComments = this.state.spamComments;
        const checked = e.currentTarget.checked;
        console.log(checked);
        array.forEach(target => { spamComments.filter(comment => comment.reason.type === target).forEach(comment => { comment.selected = checked }) });
        this.setState({ spamComments });
    }

    commentsToCards = (commentArray) => {
        return commentArray.map(comment => <Col m={6}>
            <Col s={2}>
                <Checkbox checked={this.state.spamComments.find(commentFromList => commentFromList.id === comment.id).selected} onChange={(e) => this.toggleTargetComment(e, comment.id)} filledIn />
            </Col>
            <Col s={10}>
                <Card
                    actions={[
                        <button key="1" className="activator orange-text btn-flat">??????????????????????????????</button>,
                        <a key="2" target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${this.props.vKey}&lc=${comment.id}`}>????????????????????????</a>
                    ]}
                    className="blue-grey darken-1 truncate"
                    reveal={<p>{comment.snippet.textOriginal}</p>}
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title={comment.snippet.authorDisplayName}
                >
                    {{
                        spam_link: "??????????????????????????????????????????",
                        spam_regex: "?????????????????????????????????????????????",
                        long_but_no_likes: "????????????????????????????????????????????????????????????",
                        unrelated_video: "???????????????????????????????????????????????????????????????????????????????????????",
                        includes_link: "????????????????????????????????????????????????"
                    }[comment.reason.type]
                    }:<br /> {comment.reason.matched}
                </Card>
            </Col>
        </Col>)
    }
}

export default Prompt;
