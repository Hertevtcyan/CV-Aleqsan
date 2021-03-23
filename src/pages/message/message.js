import React from "react"
import "../message/message.css"
import emailjs from "emailjs-com"
import Facebook from  "../../image/contact/facebook.png"

const Message =()=>{

function SendEmail(e){
	e.preventDefault();

    emailjs.sendForm('alik_hertevtcyan99', 'template_1rpw3vd', e.target, 'user_aPNGNek2bR0pF2r895mFp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	  e.target.reset()
}

var i = 0;
var txt = 'Thanks for message, it sended.';
var speed = 50;

function Send_Mess() {
  if (i < txt.length) {
    document.getElementById("send_p").innerHTML += txt.charAt(i);
    i++;
    setTimeout(Send_Mess, speed);
  }
}



    return(
		<div className = {'mother_wrapper'}>
			<p id = {'send_p'}></p>
		<div className="wrapper">
				<form onSubmit = {SendEmail}>
					<div className="field">
					<input type="text" id="name" name="name" placeholder="Who are you?" autofocus/>
					<label for="name">Name</label>
					</div>
					<div className="field">
					<input type="text" id="email" name="email" placeholder="Your e-mail" />
					<label for="email">E-Mail</label>
					</div>
					<div className="field">
					<textarea id="msg" rows="4" name="message" placeholder="You message..."></textarea>
					<label for="msg">Message</label>
					</div>
					<div className = {'send_div'}>
						<input class="button" type="submit" value="Send" onClick = {Send_Mess} />
						
					</div>
 				</form>
        </div>

		
  </div>
    )
}

export default Message