const navbar = document.querySelector('.desktop-header ul');

function unhideBackground() {
    // Check if the window is NOT scrolled to the top
    if (window.scrollY !== 0) {
        navbar.style.backgroundColor = '#373941ef';
    } else {
        navbar.style.backgroundColor = '#1C1D21'; // OG background color
    }
}

window.addEventListener('scroll', unhideBackground);
// Initial check in case the page is loaded at the top
unhideBackground();

// --------------------------------------------------

const projects = document.querySelectorAll('.project');

function moveProject() {
    this.style.top = '5px';
}

function resetProject() {
    this.style.top = '0';
}

// Loop through each .project elem and adds event listener
projects.forEach(project => {
    project.addEventListener('mouseover', moveProject);
    project.addEventListener('mouseout', resetProject);
});