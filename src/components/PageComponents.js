import '../css/style.css'
import '../css/footer.css'
import facebook from '../img/Facebook.png'
import instagram from '../img/Instagram.png'
import twitter from '../img/Twitter.png'
import linkedin from '../img/Linkedin.png'
import { useState, useEffect } from 'react'
import { Logout, IsAdmin } from './DataManagement.js'


export function NavBar() {

    useEffect(() => {
        IsAdmin().then(a => setAdmin(a));
        //console.log(admin);
    }, [])



    const [admin, setAdmin] = useState();

    return (
        <div className="NavBar">
            <nav>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        {sessionStorage.id == null ? <li><a href="/SignUp">SignUp</a></li> : ''}
                        {sessionStorage.id == null ? <li><a href="/Login">Login</a></li> : ''}
                        {(sessionStorage.id != null) && !admin ? <li><a href="/Enroll">Enroll</a></li> : ''}
                        {(sessionStorage.id != null) && !admin ? <li><a href="/MyCourses">My Courses</a></li> : ''}
                        {admin ? <li><a href="/AdminCheckCourses">Admin Check courses</a></li> : ''}
                        {admin ? <li><a href="/AdminAddCourses">Admin Add courses</a></li> : ''}
                        {admin ? <li><a href="/Messages">Messages</a></li> : ''}
                        {!admin ? <li><a href="/Contact">Contact Us</a></li> : ''}
                        {sessionStorage.id != null ? <li><button onClick={Logout}>Logout</button></li> : ''}
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export function Footer() {
    return (
        <div className="footer">
            {/* social media */}
            < div >
                {/* facebook */}
                < a href="https://www.facebook.com/bowvalleycollege" > <img className="socialMedia" src={facebook} alt="Facebook Icon"></img></a >

                {/* instagram */}

                < a href="https://www.instagram.com/bowvalley/" > <img className="socialMedia" src={instagram} alt="Instagram Icon"></img> </a >

                {/* twitter */}

                < a href="https://twitter.com/BowValley" > <img className="socialMedia" src={twitter} alt="Twitter Icon"></img> </a >

                {/* linkedin */}

                < a href="https://www.linkedin.com/school/bow-valley-college/" > <img className="socialMedia" src={linkedin} alt="Linkedin Icon"></img> </a >

            </div >

            <div>
                Copyright 2023. Bow Valley College.All rights reserved.
            </div >
        </div>
    )
}