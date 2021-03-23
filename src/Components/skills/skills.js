import React from "react"
import "../skills/skills.css"
import Rec from "../../image/react.png"
import Ht5 from "../../image/html5.png"
import Css3 from "../../image/css-3.png"
import Bootstrap from "../../image/bootstrap.png"
import Js from "../../image/js.png"
import Wordpress from "../../image/wordpress.png"
import Vue from "../../image/vue.png"
import Figma from "../../image/figma.jpeg"
import Git from "../../image/github.png"

const Skills =()=>{
    return(
      <div> 

              <div class="Project">
                <img src={Rec} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_html">
                <img src={Ht5} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_css">
                <img src={Css3} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_bt">
                <img src={Bootstrap} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              
              <div class="Project_js">
                <img src={Js} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_wp">
                <img src={Wordpress} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_vue">
                <img src={Vue} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_figma">
                <img src={Figma} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>

              <div class="Project_git">
                <img src={Git} alt="" class="imgMasked" />
                <div class="Project-hail"></div>
                <div class="Project-hail2"></div>
              </div>


        <div class='view'>
             <ul class='circles'>
                  <li class='h1 item'></li>
                  <li class='h2 item'></li>
                  <li class='h3 item'></li>
                  <li class='h4 item'></li>
                  <li class='h5 item'></li>
                  <li class='h6 item'></li>
                  <li class='h7 item'></li>
              </ul>
          </div>
      </div>
    )
}

export default Skills