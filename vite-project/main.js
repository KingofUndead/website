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
   <form name="contact" method="POST" data-netlify="true">
   <p>
   <label>Name: <input type="text" name="name" class="contactarea"/></label>
   </p>
   <p>
   <label>Email: <input type="email" name="email" class="contactarea"/></label>
   </p>
   <p>
   <label>Message: <textarea name="message" class="contactarea"></textarea></label>
   </p>
   <button type="submit">Submit</button>
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

