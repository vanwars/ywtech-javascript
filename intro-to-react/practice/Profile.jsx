import "./Profile.css";
import React, { useState } from "react";

export default function Profile({ name, picture, bio }) {
    // New concept this week: state variables:
    const [activeClass, setActiveClass] = useState("profile");

    function showFullscreen() {
        // will redraw the screen in "full screen" mode
        setActiveClass("profile full-screen");
    }

    function showRegular(event) {
        // will redraw the screen in "regular" mode
        event.stopPropagation();
        setActiveClass("profile");
    }

    return (
        <section className={activeClass} onClick={showFullscreen}>
            <img src={picture} />
            <h3>{name}</h3>
            <div>{bio}</div>
            <button id="regular" onClick={showRegular}>
                Back
            </button>
        </section>
    );
}
