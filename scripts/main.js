import { courses } from './data.js';

const coursesContainer = document.querySelector('#courses-container');
const totalCreditsElement = document.querySelector('#total-credits');
const filterButtons = document.querySelectorAll('.filter-button');

// Function to create a dialog for a course
function createCourseDialog(course) {
    const dialog = document.createElement('dialog');
    dialog.id = `certificateDialog${course.number}`; // Unique ID for each dialog
    dialog.innerHTML = `
        <h2>Certificate: ${course.subject} ${course.number}</h2>
        <p>
            This certificate confirms that you have ${course.completed ? 'successfully completed' : 'not yet completed'}
            the course <strong>${course.subject} ${course.number}</strong>.
            ${course.completed ? 'You have demonstrated skills in this area.' : 'Keep working to complete this course!'}
        </p>
        <button class="closeDialog">Close</button>
    `;
    document.body.appendChild(dialog); // Add the dialog to the body
    return dialog;
}

// Function to render courses and their dialogs
function renderCourses(filteredCourses) {
    // Clear existing courses
    coursesContainer.innerHTML = '';

    filteredCourses.forEach((course) => {
        // Create the course card
        const courseCard = document.createElement('div');
        courseCard.className = `course-card ${course.completed ? 'completed' : 'not-completed'}`;
        courseCard.textContent = `${course.subject} ${course.number}`;

        // Create the dialog for this course
        const dialog = createCourseDialog(course);

        // Add click event to open the dialog
        courseCard.addEventListener('click', () => {
            dialog.showModal();
        });

        // Append the course card to the container
        coursesContainer.appendChild(courseCard);
    });

    // Calculate and display total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElement.textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter courses based on subject
function filterCourses(subject) {
    const filteredCourses = subject === 'All' ? courses : courses.filter((course) => course.subject === subject);
    renderCourses(filteredCourses);
}

// Highlight active button
function setActiveButton(activeButton) {
    filterButtons.forEach((button) => button.classList.remove('active'));
    activeButton.classList.add('active');
}

// Add event listeners to filter buttons
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const subject = button.dataset.subject;
        filterCourses(subject);
        setActiveButton(button);
    });
});

// Initial render
renderCourses(courses);
setActiveButton(document.querySelector('.filter-button[data-subject="All"]'));

// Close dialog functionality
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeDialog')) {
        const dialog = event.target.closest('dialog');
        dialog.close();
    }
}); 

