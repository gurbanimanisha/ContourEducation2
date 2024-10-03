const button = document.getElementById("mybtn");
    button.addEventListener("click", function() { 
        alert("Book a free trial");
      });
// Get all area elements
const areas = document.querySelectorAll('area');

// Get all modal elements
const modals = document.querySelectorAll('.modal');

// Add event listener to each area element
areas.forEach(area => {
  area.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();
    

    // Get the data-location attribute of the area element
    const location = area.getAttribute('data-location');

    // Get the corresponding modal element
    const modal = document.querySelector(`.modal[data-modal="${location}"]`);

    // Show the modal
   modal.style.display='block';
  
  
  
  });
});

// Add event listener to each close button
document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', () => {
    // Get the parent modal element
    const modal = button.parentNode.parentNode;

    // Hide the modal
    modal.style.display = 'none';
  });
});

// Add event listener to the window to close the modal when clicking outside
window.addEventListener('click', event => {
  // Check if the click is outside the modal
  if (event.target.classList.contains('modal')) {
    // Hide the modal
    event.target.style.display = 'none';
  }
});