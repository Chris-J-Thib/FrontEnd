import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import Login from "./pages/Login";
import CourseRegistration from "./pages/CourseRegistration.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminCheckCoursesPage from "./pages/AdminCheckCoursesPage";
import AdminAddCourses from "./pages/AdminAddCoursePage";
import ContactUsPage from "./pages/ContactUsPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import MessagesPage from "./pages/MessagesPage.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Enroll" element={<CourseRegistration />} />
          <Route path="/AdminCheckCourses" element={<AdminCheckCoursesPage />} />
          <Route path="/AdminAddCourses" element={<AdminAddCourses />} />
          <Route path="/Contact" element={<ContactUsPage />} />
          <Route path="/MyCourses" element={<MyCoursesPage />} />
          <Route path="/Messages" element={<MessagesPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;