// Select all questions
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question to add a click event listener
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the display of the answer related to the clicked question
        const answer = question.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
