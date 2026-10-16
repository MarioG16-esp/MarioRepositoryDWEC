// Reset the form.
function resetForm() {
    petForm.reset();
    editingId = null;

    formTitle.textContent = "Add a New Pet";
    submitButton.textContent = "Add Pet";
    cancelButton.classList.add("hidden");

    birthdateInput.max = new Date().toISOString().split("T")[0];
}

// Cancel editing.
cancelButton.addEventListener("click", () => {
    resetForm();
    showMessage("Editing cancelled.", "success");
});

// Initial render.
renderPets();