import React from 'react';
import videoSource from '../assets/background.mp4';
import '../assets/App.css';

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay loop muted>
                <source src={videoSource} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
