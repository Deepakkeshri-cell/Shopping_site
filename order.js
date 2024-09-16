document.addEventListener('DOMContentLoaded', function () {
    const orderStatus = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];
    let currentStatus = 2; // Simulate the current status of the order (0: Placed, 1: Processing, 2: Shipped, 3: Delivered)
    const estimatedDelivery = "September 20, 2024"; // Example estimated delivery date

    // Update the progress bar and steps
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index < currentStatus) {
            step.classList.add('completed');
        }
        if (index === currentStatus) {
            step.classList.add('active');
        }
    });

    // Update the estimated delivery date based on status
    const deliveryElement = document.getElementById('estimatedDelivery');
    if (currentStatus >= 2) {
        deliveryElement.textContent = estimatedDelivery;
    } else {
        deliveryElement.textContent = "Awaiting Shipment";
    }

    // Handle order cancellation
    const cancelOrderBtn = document.getElementById('cancelOrderBtn');
    const orderMessage = document.getElementById('orderMessage');

    if (currentStatus < 2) { // Allow cancellation if the order is not shipped yet
        cancelOrderBtn.classList.remove('hidden');
        cancelOrderBtn.addEventListener('click', function () {
            orderMessage.textContent = "Your order has been cancelled.";
            cancelOrderBtn.disabled = true;
            cancelOrderBtn.style.backgroundColor = "#6c757d"; // Disable button after cancellation
        });
    } else {
        orderMessage.textContent = "Your order is no longer cancellable.";
    }

    // Display order delivered message
    if (currentStatus === 3) {
        orderMessage.textContent = "Your order has been delivered!";
    }
});
