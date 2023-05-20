import './style.css'
import projects from "./projects"

document.querySelector('#app').innerHTML = `
<p class="name">Valerie Hayden</p>  
<div>
   <div id="Projects">
   <h1 class="title">Projects</h1>
   </div>

   <div class="contact">
   <h1 class="title">Contact</h1>
   <form method="POST">
    <input type="text" name="name" placeholder="Name" class="contactarea">
    <input type="email" name="email" placeholder="Email" class="contactarea">
    <input type="text" name="message" placeholder="Message" class="contactarea message">
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <button type="submit" class="submitButton">Send</button>
</form>
   </div>
   <div class="aboutme">
   <h1 class="title">About Me</h1>
   <div id="about">
   </div>
   </div>
  </div>
`

projects.forEach(function(p) {
  document.getElementById("Projects").innerHTML += `<a href=${p.Link}><h2 class="projectname">${p.Name}</h2> <p class="projectdesc">${p.desc}</p> </a>`
})

// const form = document.getElementById("form");
// form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target);

  fetch("https://getform.io/f/b24a1fe4-a606-4f8c-8c60-da4d66813543", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  }).then(response => console.log(response))
  .catch(error => console.log(error));
}

document.querySelector("form").addEventListener("submit", formSubmit)

const textcontainer = document.getElementById("about")

fetch('./aboutme.txt').then(response => response.text()).then(data => {
  textcontainer.textContent = data
})