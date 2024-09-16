// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('alertButton').addEventListener('click', function() {
//         alert('Button Clicked!');
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});