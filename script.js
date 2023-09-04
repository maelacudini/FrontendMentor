// Get the current year
const currentYear = new Date().getFullYear();

// Set the min attribute of the year input
document.getElementById("year").max = currentYear;

// Add event listeners for input validation (day, month, and year)
document.getElementById("day").addEventListener("input", validateDay);
document.getElementById("month").addEventListener("input", validateMonth);
document.getElementById("year").addEventListener("input", validateYear);

function validateDay() {
    const dayInput = document.getElementById("day");
    const invalidFeedback = dayInput.nextElementSibling;

    if (!dayInput.checkValidity()) {
        dayInput.classList.add("is-invalid");
        invalidFeedback.style.display = "block";
    } else {
        dayInput.classList.remove("is-invalid");
        invalidFeedback.style.display = "none";
    }
}

function validateMonth() {
    const monthInput = document.getElementById("month");
    const invalidFeedback = monthInput.nextElementSibling;

    if (!monthInput.checkValidity()) {
        monthInput.classList.add("is-invalid");
        invalidFeedback.style.display = "block";
    } else {
        monthInput.classList.remove("is-invalid");
        invalidFeedback.style.display = "none";
    }
}

function validateYear() {
    const yearInput = document.getElementById("year");
    const invalidFeedback = yearInput.nextElementSibling;

    if (!yearInput.checkValidity()) {
        yearInput.classList.add("is-invalid");
        invalidFeedback.style.display = "block";
    } else {
        yearInput.classList.remove("is-invalid");
        invalidFeedback.style.display = "none";
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get the input values
    const day = parseInt(document.getElementById("day").value, 10);
    const month = parseInt(document.getElementById("month").value, 10);
    const year = parseInt(document.getElementById("year").value, 10);

    // Validate the inputs (you can add more detailed validation)
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Please enter valid date values.");
        return;
    }

    // Create a Date object with the input values
    const selectedDate = new Date(year, month - 1, day); // Note: Months are 0-based (January is 0, February is 1, etc.)

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference
    const timeDifference = currentDate - selectedDate;

    // Calculate years, months, and days
    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)); // Approximation of months
    const days = Math.floor((timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Update the spans in the HTML
    document.getElementById("yearsSpan").textContent = years;
    document.getElementById("monthsSpan").textContent = months;
    document.getElementById("daysSpan").textContent = days;
}
