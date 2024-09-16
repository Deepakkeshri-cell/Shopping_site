document.getElementById("paymentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let cardName = document.getElementById("cardName").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvv = document.getElementById("cvv").value;
    let billingAddress = document.getElementById("billingAddress").value;
    let zipcode = document.getElementById("zipcode").value;

    if (!validateCardNumber(cardNumber)) {
        alert("Invalid card number. Please enter a valid 16-digit card number.");
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert("Invalid expiry date. Please use the format MM/YY.");
        return;
    }

    if (!validateCVV(cvv)) {
        alert("Invalid CVV. Please enter a 3-digit number.");
        return;
    }

    alert("Payment processed successfully!");
    // Here you can proceed with sending data to your server using fetch or AJAX.
});

function validateCardNumber(number) {
    return /^\d{16}$/.test(number);
}

function validateExpiryDate(date) {
    return /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(date);
}

function validateCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
