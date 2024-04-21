import "./Profile.css";
import React from "react";

export default function Profile({ name, picture }) {
    return (
        <div className="profile">
            <img src={picture} />
            <h3>{name}</h3>
        </div>
    );
}
