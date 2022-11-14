import React from "react";

export default function Header() {
    return (
        <div className="cover-container">
            <video className="video" autoPlay loop muted src={require('../../assets/media/Fiat.mp4')} />
            <h1>FIAT</h1>
        </div>
    )
}
