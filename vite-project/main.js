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
   <form action="https://getform.io/f/b24a1fe4-a606-4f8c-8c60-da4d66813543" method="POST" data-netlify="true">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <input type="text" name="message" placeholder="Message">
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <button type="submit">Send</button>
</form>
   </div>
   <div class="aboutme">
   <h1 class="title">About Me</h1>
   </div>
  </div>
`

projects.forEach(function(p) {
  document.getElementById("Projects").innerHTML += `<a href=${p.Link}><h2 class="projectname">${p.Name}</h2> <p class="projectdesc">${p.desc}</p> </a>`
})

const handleSubmit = (event) => {
  event.preventDefault();
  const myForm = event.target;
  const formdata = new FormData(myForm);
  document.getElementById("form").innerText += " "
  fetch("/", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: new URLSearchParams(formdata).toString(),
  }).then(() => alert("Thank you for contacting me"))
  .catch((err) => alert(err))
}

document.querySelector("form").addEventListener("submit", handleSubmit)