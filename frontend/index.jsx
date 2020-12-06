//ext
import React from "react";
import ReactDOM from "react-dom";
//int
import createStore from "./store/store";
import Root from "./components/root";

import { postUser } from "./utils/session_api_utils";
import { updatePlaylist, deletePlaylist } from "./actions/playlist_actions";

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser,
            },
        };
        delete window.currentUser;
    }

    const store = createStore(preloadedState);
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));

    //testing!!!
    window.store = store;
    window.postUser = postUser;
    window.updatePlaylist = updatePlaylist;
    window.deletePlaylist = deletePlaylist;
});