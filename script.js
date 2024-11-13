var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstnameElement = document.getElementById('firstname');
    var lastnameElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var educationElement = document.getElementById('education');
    if (firstnameElement && lastnameElement && emailElement && phoneElement && skillsElement && experienceElement && educationElement) {
        var firstname = firstnameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        //create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Firstname:</strong><span id=\"edit-firstname class=\"editable\"> ".concat(firstname, " </span></p>\n<p><strong>Lastname:</strong><span id=\"edit-lastname class=\"editable\"> ").concat(lastname, " </span></p>\n<p><strong>Email:</strong><span id=\"edit-email class=\"editable\"> ").concat(email, " </span> </p>\n<p><strong>Phone:</strong><span id=\"edit-phone class=\"editable\"> ").concat(phone, " </span></p>\n<p><strong>Skills:</strong><span id=\"edit-skills class=\"editable\"> ").concat(skills, " </span></p>\n\n\n<h3>Experience:</h3>\n<p id=\"edit-experience class=\"editable\">").concat(experience, "</p>\n\n<h3>Education:</h3>\n<p id=\"edit-education class=\"editable\">").concat(education, "</p>\n\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditAble();
        }
    }
    else {
        console.error('one or more outputs are missing');
    }
});
function makeEditAble() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
