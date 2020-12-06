//ext
import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
//int - components
import PlaylistsContainer from "./playlists/playlists_index_container";
//int - actions
import { logout } from "../../actions/session_actions";
//int - util
import * as icons from "../../utils/icons";

const Nav = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <React.Fragment>
            <div className="nav-section-container">
                <div className="nav-section">
                    <h2>Library</h2>
                    <ul className="nav-section-list">
                        <NavLink to="/library">
                            <li className="nav-section-list-item">
                                {icons.recent}
                                <span>Recently Added</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <PlaylistsContainer />
            </div>
            <div className="current-user">
                <ul className="nav-section-list">
                    <li className="nav-section-list-item">
                        <img
                            src={"/assets/icons/signout.svg"}
                            className="icon"
                            onClick={logout}
                        />
                        <span>Hello, {currentUser.username}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className="nav-section-container">
                <div className="nav-section">
                    <ul className="nav-section-list">
                        <NavLink to="/signin">
                            <li className="nav-section-list-item">
                                {icons.login}
                                <span>Sign In</span>
                            </li>
                        </NavLink>
                        <NavLink to="/browse">
                            <li className="nav-section-list-item">
                                {icons.browse}
                                <span>Browse</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="trial-container">
                <h2>All the music you love.</h2>
                <span>Sign up today and get 3 months on us.</span>
                <Link to="/signup">
                    <div className="btn wide">Try It Free</div>
                </Link>
            </div>
        </React.Fragment>
    );

    return (
        <div className="nav">
            <h1 className="logo">Appo Music</h1>
            <div className="input-container search">
                <img src={"/assets/icons/search.svg"} className="icon" />
                <input type="text" placeholder="Search"></input>
            </div>
            {display}
        </div>
    );
};

const mapSTP = (state) => ({
    currentUser: state.session.currentUser,
});

const mapDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapSTP, mapDTP)(Nav);
