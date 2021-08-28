import firebase from "../../firebase";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const signOut = (setChannel) => {
    firebase.auth().signOut();
    Cookies.remove("YT_TOKEN");
    Swal.fire("ログアウトしました");
    setChannel(false);
}

const Header = (props) => {
    return (
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">save-youtube</a>
                <ul className="right hide-on-med-and-down">
                    {props.user ? <li><a href="#" onClick={() => signOut(props.setChannel)}>ログアウト</a></li> : null}
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    {props.user ? <li><a href="#" onClick={() => signOut(props.setChannel)}>ログアウト</a></li> : null}
                </ul>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    )
}
export default Header