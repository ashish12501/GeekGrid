import React from 'react';
import { useParams } from 'react-router-dom'; // For accessing URL parameters

// Import video data from videosList.js
import { VideoList } from '../../assets/videosList';


export const VideoPlayerPage = () => {
    const { id } = useParams(); // Get the video ID from the URL parameter
    const selectedVideo = VideoList.find((video) => video.id === id);

    if (!selectedVideo) {
        return <div>Video not found</div>;
    }

    return (
        <div>
            <h1>Video Player Page</h1>
            <h2>{selectedVideo.name}</h2>
            <h3>{selectedVideo.embedLink}</h3>
            <iframe
                width="560"
                height="315"
                src={selectedVideo.embedLink}
                title={selectedVideo.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    );
};

