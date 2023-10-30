import React, { useState } from "react";
import '../css/adminAddCourses.css'

const AdminAddCourses = {
    code: '',
    name: '',
    startDate: '',
    endDate: '',
    image: '',
    description: '',
    term: '',
    program: ''
};

const AddCoursesForm = ({ AddCorses }) => {
    const [courses, setCourses] = useState({ ...AdminAddCourses });

    const handleInputChange = (e) => {
        setCourses({ ...courses, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(courses);

    };

    return (
        <div>
            <h1>Add Courses</h1>
            <form onSubmit={handleSubmit}>
                <label>Code</label>
                <input
                    type="text"
                    name="code"
                    value={courses.code}
                    onChange={handleInputChange}
                />
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={courses.name}
                    onChange={handleInputChange}
                />
                <label>Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    value={courses.startDate}
                    onChange={handleInputChange}
                />
                <label>End Date</label>
                <input
                    type="date"
                    name="endDate"
                    value={courses.endDate}
                    onChange={handleInputChange}
                />
                <label>Image</label>
                <input
                    type="text"
                    name="Image"
                    value={courses.Image}
                    onChange={handleInputChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={courses.description}
                    onChange={handleInputChange}
                />
                <label>Term</label>
                <input
                    type="text"
                    name="term"
                    value={courses.term}
                    onChange={handleInputChange}
                />
                <label>Program</label>
                <input
                    type="text"
                    name="program"
                    value={courses.program}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>

    );
};

export default AddCoursesForm;
