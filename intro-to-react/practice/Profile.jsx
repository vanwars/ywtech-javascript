import "./Profile.css";
import React, { useState } from "react";

export default function Profile({ name, picture, bio }) {
    // New concept this week: state variables:
    const [fullscreen, setFullscreen] = useState(false);

    function toggle() {
        if (fullscreen) {
            setFullscreen(false);
        } else {
            setFullscreen(true);
        }
        // setFullscreen(!fullscreen);
    }

    if (fullscreen) {
        return (
            <section className="profile full-screen">
                <img src={picture} />
                <h3>{name}</h3>
                <div>{bio}</div>
                <button onClick={toggle}>Back</button>
            </section>
        );
    } else {
        return (
            <section className="profile">
                <img src={picture} />
                <h3>{name}</h3>
                <div>{bio}</div>
                <button onClick={toggle}>Fullscreen</button>
            </section>
        );
    }
}
