// Navbar Scroll Effect
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

// Off-Canvas Menu
const menuButton = document.getElementById("menuButton");
const offCanvasMenu = document.getElementById("offCanvasMenu");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
  offCanvasMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  offCanvasMenu.classList.remove("active");
});

// Video Modal
document.addEventListener("DOMContentLoaded", function () {
  const videoThumbnail = document.querySelector(".video-thumbnail");
  const videoOverlay = document.querySelector(".video-overlay");
  const playButton = document.querySelector("#play-video");
  const videoModal = document.querySelector("#video-modal");
  const closeVideo = document.querySelector(".close-video");

  playButton.addEventListener("click", () => {
      videoModal.style.display = "flex";
  });

  closeVideo.addEventListener("click", () => {
      videoModal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", (event) => {
      if (event.target === videoModal) {
          videoModal.style.display = "none";
      }
  });
});

// Project Filtering Logic
document.addEventListener("DOMContentLoaded", () => {
  const filterOptions = document.querySelectorAll(".feature-option");
  const projects = document.querySelectorAll(".project");

  filterOptions.forEach((option) => {
      option.addEventListener("click", () => {
          filterOptions.forEach((opt) => opt.classList.remove("active"));
          option.classList.add("active");

          const selectedCategory = option.textContent.trim().toLowerCase();
          projects.forEach((project) => {
              const categories = project.dataset.category.split(" ");
              if (categories.includes(selectedCategory) || selectedCategory === "featured") {
                  project.style.display = "block";
              } else {
                  project.style.display = "none";
              }
          });
      });
  });

  // Set default state
  filterOptions[0].classList.add("active");
  projects.forEach((project) => (project.style.display = "block"));
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all projects and modal elements
  const projects = document.querySelectorAll(".project");
  const modal = document.getElementById("noticeBoardModal");
  const closeNotice = document.getElementById("closeNotice");
  const noticeText = document.getElementById("noticeText");

  // Ensure all modal elements are available
  if (!modal || !closeNotice || !noticeText) {
      console.error("Modal structure is missing or not properly linked in the DOM.");
      return;
  }

  // Add click event listener to each project
  projects.forEach((project) => {
      project.addEventListener("click", () => {
          // Retrieve project title or fallback to 'Unknown Project'
          const projectName = project.querySelector("p")?.textContent.trim() || "Unknown Project";
          console.log(`Project clicked: ${projectName}`);

          // Update the modal text dynamically
          noticeText.textContent = `You clicked on ${projectName}. This is a showcase of our custom design solutions.`;

          // Display the modal
          modal.style.display = "block";
      });
  });

  // Close modal on close button click
  closeNotice.addEventListener("click", () => {
      console.log("Modal closed.");
      modal.style.display = "none";
  });

  // Close modal on clicking outside of it
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          console.log("Modal closed by clicking outside.");
          modal.style.display = "none";
      }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("load-more");
  const hideExamplesButton = document.getElementById("hide-examples");
  const hiddenProjects = document.getElementById("hidden-projects");

  // Show hidden projects and update buttons
  loadMoreButton.addEventListener("click", () => {
      hiddenProjects.style.display = "grid"; // Show hidden projects
      loadMoreButton.style.display = "none"; // Hide "Load More" button
      hideExamplesButton.style.display = "block"; // Show "Hide Examples" button
  });

  // Hide hidden projects and update buttons
  hideExamplesButton.addEventListener("click", () => {
      hiddenProjects.style.display = "none"; // Hide hidden projects
      loadMoreButton.style.display = "block"; // Show "Load More" button
      hideExamplesButton.style.display = "none"; // Hide "Hide Examples" button
  });
});




