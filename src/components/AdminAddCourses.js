import React, { useState, useEffect } from "react";
import { AddCourse, GetDepartments } from "./DataManagement";
import '../css/adminAddCourses.css';
import "../css/contactUsForm.css";
import "../css/signUpForm.css";
const AdminAddCourses = {
    code: '',
    name: '',
    start_date: '',
    end_date: '',
    img: '',
    description: '',
    term: '',
    program_id: ''
};

const AddCoursesForm = () => {

    useEffect(() => {
        GetDepartments().then(x =>
            setDPL(x))
    }, []);

    const [DPL, setDPL] = useState([]);

    const [course, setCourse] = useState({ ...AdminAddCourses });

    const handleInputChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSelectChange = (e) => {
        setCourse({ ...course, program_id: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(course);
        AddCourse(course);
        //check if all fields are filled
        if (course.code === '' || course.name === '' || course.start_date === '' || course.end_date === '' || course.img === '' || course.description === '' || course.term === '' || course.program_id === '') {
            alert("Please fill all the fields");
            return;
        }
        alert("Course Added Successfully");
        window.location.reload();
    };

    return (
        <div className="question-form-container">
            <h1>Add Courses</h1>
            <form onSubmit={handleSubmit}>
                <label>Code</label>
                <input
                    type="text"
                    name="code"
                    value={course.code}
                    onChange={handleInputChange}
                />
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={course.name}
                    onChange={handleInputChange}
                />
                <label>Start Date</label>
                <input
                    type="date"
                    name="start_date"
                    value={course.start_date}
                    onChange={handleInputChange}
                />
                <label>End Date</label>
                <input
                    type="date"
                    name="end_date"
                    value={course.end_date}
                    onChange={handleInputChange}
                />
                <label>Image</label>
                <select
                    type="text"
                    name="img"
                    value={course.img}
                    onChange={handleInputChange}
                >
                    <option value="algorithms-and-data-structures.png">Algorithms</option>
                    <option value="enterprise-computing.png">Enterprise</option>
                    <option value="introduction-to-game-and-simulation-programming.png">Game</option>
                    <option value="introduction-to-project-teams-and-technical-communications-for-software-development.png">Project Teams</option>
                    <option value="introduction-to-relational-databases.png">Database</option>
                    <option value="introduction-to-web-programming.png">Web programming</option>
                    <option value="math-for-the-computer-industry.png">Math</option>
                    <option value="mobile-application-development.png">App</option>
                </select>

                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={course.description}
                    onChange={handleInputChange}
                />
                <label>Term</label>
                <input
                    type="text"
                    name="term"
                    value={course.term}
                    onChange={handleInputChange}
                />
                <label>Program</label>
                <select
                    id="program_id"
                    onChange={handleSelectChange}
                >
                    <option disabled hidden selected>Choose Department : Program</option>
                    {DPL.map((p) => <option value={p.program_id}>{p.program + " : " + p.program_type_name}</option>)}
                </select>

                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>

    );
};

export default AddCoursesForm;
