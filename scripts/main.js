import { courses } from './data.js';

const coursesContainer = document.querySelector('#courses-container');
const totalCreditsElement = document.querySelector('#total-credits');
const filterButtons = document.querySelectorAll('.filter-button');

// Render courses dynamically
function renderCourses(filteredCourses) {
    // Clear existing courses
    coursesContainer.innerHTML = '';
    filteredCourses.forEach((course) => {
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
        courseCard.textContent = `${course.subject} ${course.number}`;
        coursesContainer.appendChild(courseCard);
    });
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Filter courses based on subject
function filterCourses(subject) {
    if (subject === 'All') {
        renderCourses(courses);
    } else {
        const filteredCourses = courses.filter((course) => course.subject === subject);
        renderCourses(filteredCourses);
    }
}

// Highlight active button
function setActiveButton(activeButton) {
    filterButtons.forEach((button) => {
        button.classList.remove('active'); 
    });
    activeButton.classList.add('active'); 
}
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const subject = button.dataset.subject;
        filterCourses(subject);
        setActiveButton(button); 
    });
});
renderCourses(courses);
setActiveButton(document.querySelector('.filter-button[data-subject="All"]')); 

