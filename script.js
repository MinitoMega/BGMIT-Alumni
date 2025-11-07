// =========================
// Modal functionality
// =========================
function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.toggle('modal-open');
    modal.classList.toggle('modal-closed');
}

function toggleRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.classList.toggle('modal-open');
    modal.classList.toggle('modal-closed');
}

function toggleEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.toggle('modal-open');
    modal.classList.toggle('modal-closed');
}

// =========================
// Smooth scrolling
// =========================
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// =========================
// Close modals when clicking outside
// =========================
document.addEventListener('click', function (e) {
    const modals = ['loginModal', 'registerModal', 'eventModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (e.target === modal) {
            modal.classList.add('modal-closed');
            modal.classList.remove('modal-open');
        }
    });
});

// =========================
// Handle Create Account form submission
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#registerModal form");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Collect form data
            const userData = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                graduationYear: document.getElementById("graduationYear").value,
                department: document.getElementById("department").value,
                password: document.getElementById("password").value,
            };

            try {
                const response = await fetch("http://127.0.0.1:5000/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                const data = await response.json();
                alert(data.message || "Account created successfully!");

                if (response.ok) {
                    registerForm.reset();
                    toggleRegisterModal();
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to create account. Please try again later.");
            }
        });
    }
});

// =========================
// Mobile menu toggle
// =========================
document.querySelector('.fa-bars').addEventListener('click', function () {
    alert('Mobile menu functionality would be implemented here');
});
