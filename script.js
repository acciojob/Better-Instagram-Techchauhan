//your code here
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image");
  let draggedElement = null;

  images.forEach((image) => {
    // Handle drag start
    image.addEventListener("dragstart", (event) => {
      draggedElement = event.target;
      event.target.classList.add("selected"); // Add a visual cue for the selected element
    });

    // Handle drag end
    image.addEventListener("dragend", (event) => {
      event.target.classList.remove("selected"); // Remove the visual cue
      draggedElement = null; // Reset dragged element
    });

    // Allow dropping
    image.addEventListener("dragover", (event) => {
      event.preventDefault(); // Necessary to allow dropping
    });

    // Handle drop
    image.addEventListener("drop", (event) => {
      event.preventDefault();
      if (draggedElement && draggedElement !== event.target) {
        // Swap the content (images)
        const tempContent = draggedElement.innerHTML;
        draggedElement.innerHTML = event.target.innerHTML;
        event.target.innerHTML = tempContent;
      }
    });
  });
});

