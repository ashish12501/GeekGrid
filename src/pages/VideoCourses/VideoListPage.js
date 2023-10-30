import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

// Import video data from videosList.js
import { VideoList } from '../../assets/videosList';

export const VideoListPage = () => {
    return (
        <div>
            <h1>Video List Page</h1>
            {VideoList.map((video) => (
                <div key={video.id} className="video-card">
                    <img src={video.image} alt={video.name} />
                    <h2>{video.name}</h2>
                    <Link to={`/streamer/${video.id}`}>Watch Video</Link>
                </div>
            ))}
        </div>
    );
};

