import React from "react";
import config from "../../firebaseConfig";
import axios from "axios";
import YouTube from "react-youtube";

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.job();
    }

    job = async () => {
        const video = await this.getVideo(this.props.vKey);
        this.setState({ video });
        console.log(video);
        if(video === undefined){
            return;
        }
        const comments = await this.getComments(video.id);
        Promise.all(/* */);
    }

    getVideo = async (id) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                part: "snippet",
                id,
                key: config.apiKey
            }
        });
        console.log(response.data);
        return response.data.items[0];
    }

    getComments = async (id, nextPageToken = undefined) => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/commentThreads", {
            params: {
                part: "snippet",
                videoId: id,
                key: config.apiKey,
                nextPageToken
            }
        });
        console.log(response.data);
        return [response.data.items, response.nextPageToken,];
    }


    render() {
        return (
            <div>
                {this.state.video ? <YouTube videoId={this.state.video?.id} /> : null}
            </div>
        )
    }
}

export default Prompt;
