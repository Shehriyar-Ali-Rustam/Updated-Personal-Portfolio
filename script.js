$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Shehriyar Ali";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/logo.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["AI and ML ", "Graphic Design","Frontend Development", "Web Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });

    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.projects .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


// ===== PROJECT MANAGEMENT SYSTEM =====
let editMode = false;
let nextProjectId = 7; // Start from 7 since we have 6 demo projects

// Toggle edit mode
function toggleEditMode() {
    editMode = !editMode;
    const actionButtons = document.querySelectorAll('.project-actions');
    const editModeText = document.getElementById('edit-mode-text');

    actionButtons.forEach(btn => {
        btn.style.display = editMode ? 'flex' : 'none';
    });

    editModeText.textContent = editMode ? 'Exit Edit Mode' : 'Edit Mode';
}

// Open modal for adding new project
function openAddProjectModal() {
    document.getElementById('project-modal').style.display = 'block';
    document.getElementById('modal-title').textContent = 'Add New Project';
    document.getElementById('project-form').reset();
    document.getElementById('project-id').value = '';
}

// Close modal
function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
    document.getElementById('project-form').reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeProjectModal();
    }
}

// Edit existing project
function editProject(projectId) {
    const projectBox = document.querySelector(`[data-project-id="${projectId}"]`);
    if (!projectBox) return;

    const name = projectBox.querySelector('.tag h3').textContent;
    const desc = projectBox.querySelector('.desc p').textContent;
    const image = projectBox.querySelector('img').src;
    const viewLink = projectBox.querySelector('.btns a:first-child').href;
    const codeLink = projectBox.querySelector('.btns a:last-child').href;

    document.getElementById('project-id').value = projectId;
    document.getElementById('project-name').value = name;
    document.getElementById('project-desc').value = desc;
    document.getElementById('project-image').value = image;
    document.getElementById('project-view-link').value = viewLink;
    document.getElementById('project-code-link').value = codeLink;

    document.getElementById('modal-title').textContent = 'Edit Project';
    document.getElementById('project-modal').style.display = 'block';
}

// Save project (add or update)
function saveProject(event) {
    event.preventDefault();

    const projectId = document.getElementById('project-id').value;
    const name = document.getElementById('project-name').value;
    const desc = document.getElementById('project-desc').value;
    const image = document.getElementById('project-image').value;
    const viewLink = document.getElementById('project-view-link').value;
    const codeLink = document.getElementById('project-code-link').value;

    if (projectId) {
        // Update existing project
        updateProjectInDOM(projectId, name, desc, image, viewLink, codeLink);
    } else {
        // Add new project
        addProjectToDOM(name, desc, image, viewLink, codeLink);
    }

    closeProjectModal();
}

// Update project in DOM
function updateProjectInDOM(projectId, name, desc, image, viewLink, codeLink) {
    const projectBox = document.querySelector(`[data-project-id="${projectId}"]`);
    if (!projectBox) return;

    projectBox.querySelector('.tag h3').textContent = name;
    projectBox.querySelector('.desc p').textContent = desc;
    projectBox.querySelector('img').src = image;
    projectBox.querySelector('img').alt = name;
    projectBox.querySelector('.btns a:first-child').href = viewLink;
    projectBox.querySelector('.btns a:last-child').href = codeLink;

    // Re-initialize tilt effect
    VanillaTilt.init(projectBox, { max: 15 });
}

// Add new project to DOM
function addProjectToDOM(name, desc, image, viewLink, codeLink) {
    const container = document.getElementById('projects-container');
    const newProjectId = nextProjectId++;

    const projectHTML = `
    <div class="box tilt" data-project-id="${newProjectId}">
      <div class="project-actions" style="display: ${editMode ? 'flex' : 'none'};">
        <button class="action-btn edit-btn" onclick="editProject(${newProjectId})" title="Edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="action-btn delete-btn" onclick="deleteProject(${newProjectId})" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
      <img draggable="false" src="${image}" alt="${name}" />
      <div class="content">
        <div class="tag">
          <h3>${name}</h3>
        </div>
        <div class="desc">
          <p>${desc}</p>
          <div class="btns">
            <a href="${viewLink}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${codeLink}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', projectHTML);

    // Initialize tilt and scroll reveal for new project
    const newBox = container.lastElementChild;
    VanillaTilt.init(newBox, { max: 15 });
    srtop.reveal(newBox, { interval: 200 });
}

// Delete project
function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        const projectBox = document.querySelector(`[data-project-id="${projectId}"]`);
        if (projectBox) {
            projectBox.style.animation = 'fadeOut 0.3s';
            setTimeout(() => {
                projectBox.remove();
            }, 300);
        }
    }
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.8); }
    }
`;
document.head.appendChild(style);
