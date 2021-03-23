import React from 'react'
import "../Components/hello.css"
import About from "../Components/about/about"
import Contact from "../Components/contact/contact"
import Skills from "../Components/skills/skills"
import One from "../pages/one"
import Face from "../pages/face_contact/face_contact"

const Hello =()=>{
    return(
        <div class="container">
          
        <label class="btn btn-open" for="nav">WELCOME TO MY WEBSITE</label>
        <input type="checkbox" id="nav" class="nav-opener" />
        <div class="nav">
          <div class="nav-header">
            <div class="nav-title">MENU</div>
            <label class="btn btn-nav" for="nav">
              <svg style={{width: "36px", height: "36px"}} viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
              </svg>
            </label>
          </div>
          <input type="radio" name="image" id="image1" class="nav-link-opener" checked="checked" />
          <input type="radio" name="image" id="image2" class="nav-link-opener" />
          <input type="radio" name="image" id="image3" class="nav-link-opener" />
          <input type="radio" name="image" id="image4" class="nav-link-opener" />
          <ul class="nav-links">
            <li class="nav-link"><label for="image1">Home</label></li>
            <li class="nav-link"><label for="image2">About Me</label></li>
            <li class="nav-link"><label for="image3">My Skills</label></li>
            <li class="nav-link"><label for="image4">Contact</label></li>
            <Face />
          </ul>
          <div class="nav-images">
            <div class="nav-image image-1">
              <One />
            </div>

            <div class="nav-image image-2">
            <About />
            </div>

            <div class="nav-image image-3">
            <Skills />
            </div>

            <div class="nav-image image-4">
           <Contact />
            </div>
            </div>
        </div>
      </div>
    )
}

export default Hello