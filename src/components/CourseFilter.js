import React from "react";
import '../css/courseFilter.css'

function CourseFilter(props) {

  return (
    <div className="filter-container">
      <h2>Course Filter</h2>
      <form onSubmit={props.handleSearch}>
        <label htmlFor="course-name">Course Name:</label>
        <input type="text" id="course-name" />
        <br />
        <label htmlFor="course-code">Course Code:</label>
        <input type="text" id="course-code" />
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default CourseFilter;