const signInBtn = document.getElementById("signInBtn");
    const backBtn = document.getElementById("backBtn");
    const loginView = document.getElementById("loginView");
    const dashboardView = document.getElementById("dashboardView");

    const bookAppointmentBtn = document.getElementById("bookAppointmentBtn");
    const appointmentModal = document.getElementById("appointmentModal");
    const closeModal = document.getElementById("closeModal");
    const confirmAppointment = document.getElementById("confirmAppointment");
    const welcomeMessage = document.getElementById("welcomeMessage");

    signInBtn.addEventListener("click", function(e) {
        e.preventDefault();
        // Hide login view and show dashboard view
        loginView.style.display = "none";
        dashboardView.classList.add("active");

        // Display the welcome message
        welcomeMessage.style.display = "block";
    });

    backBtn.addEventListener("click", function() {
        dashboardView.classList.remove("active");
        loginView.style.display = "flex";
        welcomeMessage.style.display = "none"; // Hide welcome message on logout
    });

    // Open Appointment Modal
    bookAppointmentBtn.addEventListener("click", function() {
        appointmentModal.style.display = "flex";
    });

    // Close the Appointment Modal
    closeModal.addEventListener("click", function() {
        appointmentModal.style.display = "none";
    });

    // Confirm the Appointment and close modal
    confirmAppointment.addEventListener("click", function() {
        const date = document.getElementById("appointmentDate").value;
        const time = document.getElementById("appointmentTime").value;
        const note = document.getElementById("appointmentNote").value;

        if (date && time && note) {
            alert("Appointment confirmed for " + date + " at " + time + "\nNote: " + note);
            appointmentModal.style.display = "none";
        } else {
            alert("Please fill in all the fields.");
        }
    });
