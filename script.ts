document.getElementById("resumeForm")?.addEventListener('submit',function(event){

   event.preventDefault()

   const  firstnameElement = document.getElementById('firstname') as HTMLInputElement;
   const  lastnameElement = document.getElementById('lastname') as HTMLInputElement;
   const  emailElement = document.getElementById('email') as HTMLInputElement;
   const  phoneElement = document.getElementById('phone') as HTMLInputElement;
   const  skillsElement = document.getElementById('skills') as HTMLInputElement;
   const  experienceElement = document.getElementById('experience') as HTMLInputElement;
   const  educationElement = document.getElementById('education') as HTMLInputElement;
   
   if (firstnameElement && lastnameElement && emailElement && phoneElement && skillsElement &&  experienceElement && educationElement){
      const firstname = firstnameElement.value;
      const lastname = lastnameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const skills = skillsElement.value;
      const experience = experienceElement.value;
      const education = educationElement.value;

//create resume output by functions
//create resume output
const resumeOutput =`
<h2>Resume</h2>
<p><strong>Firstname:</strong><span id="edit-firstname class="editable"> ${firstname} </span></p>
<p><strong>Lastname:</strong><span id="edit-lastname class="editable"> ${lastname} </span></p>
<p><strong>Email:</strong><span id="edit-email class="editable"> ${email} </span> </p>
<p><strong>Phone:</strong><span id="edit-phone class="editable"> ${phone} </span></p>
<p><strong>Skills:</strong><span id="edit-skills class="editable"> ${skills} </span></p>


<h3>Experience:</h3>
<p id="edit-experience class="editable">${experience}</p>

<h3>Education:</h3>
<p id="edit-education class="editable">${education}</p>

`;
const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement){
   resumeOutputElement.innerHTML = resumeOutput

   makeEditAble()
} 
}else{
   console.error('one or more outputs are missing')
}
});

function makeEditAble(){
   const editableElements = document.querySelectorAll('.editable')
   editableElements.forEach(element =>{

      element.addEventListener('click',function(){
         const currentElement = element as HTMLElement;
         const currentValue = currentElement.textContent || ""

         if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
            const input = document.createElement('input')
            input.type = 'text'
            input.value = currentValue
            input.classList.add('editing input')

            input.addEventListener('blur',function(){
               currentElement.textContent = input.value;
               currentElement.style.display = 'inline';
               input.remove()


            })

            currentElement.style.display = 'none'
            currentElement.parentNode?.insertBefore(input,currentElement)
            input.focus()
         }
      })
   })
}