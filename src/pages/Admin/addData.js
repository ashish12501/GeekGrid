import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import './addData.css'; // Assuming you have a CSS file named AddData.css
import Select from 'react-select';

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




    const [jobData, setJobData] = useState({
        title: '',
        location: '',
        salary: '',
        link: '',
        lastDate: '',
        skills: [],
    });

    const skillOptions = ["reactjs", "javascript", "python", "nodejs", "figma", "php", "c++", "django"]; // Add more skills as needed


    const addJobToFirestore = () => {

    }


    const handleSubmit2 = (e) => {
        e.preventDefault();

        // Call your Firestore helper function to add job data
        addJobToFirestore(jobData);

        // Reset the form after submission
        setJobData({
            title: '',
            location: '',
            salary: '',
            link: '',
            lastDate: '',
            skills: [],
        });
    };

    const handleSkillsChange = (selectedSkills) => {
        setJobData({ ...jobData, skills: selectedSkills });
    };

    return (
        <div className='addData'>
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

            {/* <div className=''> */}
            <div className="add-data-container">
                <h2>Add Job Opening</h2>
                <form onSubmit={handleSubmit2}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            value={jobData.title}
                            onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input
                            type="text"
                            value={jobData.location}
                            onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Salary (lpa):</label>
                        <input
                            type="number"
                            value={jobData.salary}
                            onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Link:</label>
                        <input
                            type="text"
                            value={jobData.link}
                            onChange={(e) => setJobData({ ...jobData, link: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Date:</label>
                        <input
                            type="date"
                            value={jobData.lastDate}
                            onChange={(e) => setJobData({ ...jobData, lastDate: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Skills:</label>
                        <Select
                            isMulti
                            options={skillOptions.map(skill => ({ value: skill, label: skill }))}
                            value={jobData.skills}
                            onChange={handleSkillsChange}
                            className="form-control, react-select__option"
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            {/* </div> */}
        </div>
    );
}
