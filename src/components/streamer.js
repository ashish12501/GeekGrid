import { useState } from "react";
import React from 'react'

const videoList = [
    {
        title: 'Video 1',
        embedCode:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ez8F0nW6S-w?si=1gqmAvLul59Eavw9&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
        title: 'Video 2',
        embedCode:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    // Add more video objects as needed
];
export function Streamer() {
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    const handleVideoSelect = (index) => {
        setSelectedVideoIndex(index);
    };

    return (
        <div className="youtube-player">
            <div className="video-list">
                <h3>Video List</h3>
                <ul>
                    {videoList.map((video, index) => (
                        <li key={index}>
                            <button onClick={() => handleVideoSelect(index)}>
                                {video.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="video-player">
                <h3>{videoList[selectedVideoIndex].title}</h3>
                <div
                    dangerouslySetInnerHTML={{
                        __html: videoList[selectedVideoIndex].embedCode,
                    }}
                />
            </div>
        </div>
    );
}
