import React from 'react'
import "../face_contact/face_contact.css"
import Facebook from  "../../image/contact/facebook.png"
import Instagram from "../../image/contact/instagram.png"
import Google from '../../image/contact/google-drive.png'
import GitHub from "../../image/contact/github-logo.png"
import Here from '../../image/contact/pin.png'
import Call from '../../image/contact/call.png'
import Message from '../../image/contact/envelope.png'

const Face =()=>{

    

    return(
        <div>
                            <div className = {'body_contact'}>
                                <div>
                                    <img src = {Here} />
                                    <span>Erevan, Arabkir 51st Street, 9A</span>
                                </div>

                                <div>
                                    <img src = {Call} />
                                    <span>+374-77-23-06-31</span>
                                </div>

                                <div>
                                    <img src = {Message} />
                                    <span>aleqsan.hertevtcyan.99@mail.ru</span>
                                </div>
                            </div>

                            <div class="face_contact">
                                <div>
                                    <img src = {Facebook} />
                                    <span><a className = {'face_a'} href = 'https://www.facebook.com/profile.php?id=100007863768769'>Facebook.com</a></span>
                                </div>
                                
                                <div>
                                    <img src = {Instagram} />
                                    <span><a className = {'face_a'} href = 'https://www.instagram.com/alik.hertevtcyan/'>Instagram.com</a></span>
                                </div>
                                
                                <div>
                                    <img src = {GitHub} />
                                    <span><a className = {'face_a'} href = 'https://github.com/Hertevtcyan'>GitHub.com</a></span>
                                </div>
                                
                                <div>
                                    <img src = {Google} />
                                    <span><a className = {'face_a'} href = 'https://drive.google.com/drive/u/0/my-drive'>Drive.google.com</a></span>
                                </div>
                            </div>
        </div>
        
                
        
    )
}

export default Face