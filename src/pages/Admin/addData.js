import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import './addData.css'; // Assuming you have a CSS file named AddData.css

export function AddData() {
    const [title, setTitle] = useState('');
    const [intro, setIntro] = useState('');
    const [content, setContent] = useState('');
    const articlesCollectionRef = collection(db, 'articles');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a new document in Firestore with serverTimestamp
            await addDoc(articlesCollectionRef, {
                title,
                intro,
                content,
                createdAt: serverTimestamp(),
            });

            // Document successfully added to Firestore
            console.log('Document added successfully');

            // Clear the form inputs
            setTitle('');
            setIntro('');
            setContent('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (<div className='addData'>
        <div className="add-data-container">
            <h2>Add Data to Articles Collection</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Intro:</label>
                    <input
                        type="text"
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    </div>
    );
}
