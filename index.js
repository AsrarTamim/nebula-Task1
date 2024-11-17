document.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// Get elements
const menuButton = document.getElementById('menuButton')
const offCanvasMenu = document.getElementById('offCanvasMenu')
const closeMenu = document.getElementById('closeMenu')

// Open menu when "Menu" button is clicked
menuButton.addEventListener('click', () => {
  offCanvasMenu.classList.add('active')
})

// Close menu when close button is clicked
closeMenu.addEventListener('click', () => {
  offCanvasMenu.classList.remove('active')
})

// video
document.addEventListener("DOMContentLoaded", function () {
  const videoThumbnail = document.querySelector(".video-thumbnail");
  const videoOverlay = document.querySelector(".video-overlay");
  const playButton = document.querySelector("#play-video");
  const videoModal = document.querySelector("#video-modal");
  const closeButton = document.querySelector(".close-video");

  // Show overlay on hover
  videoThumbnail.addEventListener("mouseenter", () => {
      videoOverlay.style.opacity = "1";
  });

  videoThumbnail.addEventListener("mouseleave", () => {
      videoOverlay.style.opacity = "0";
  });

  // Play video on button click
  playButton.addEventListener("click", () => {
      videoModal.style.display = "flex";
      const videoElement = videoModal.querySelector("video");
      videoElement.play();
  });

  // Close video modal
  closeButton.addEventListener("click", () => {
      videoModal.style.display = "none";
      const videoElement = videoModal.querySelector("video");
      videoElement.pause();
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.getElementById("load-more");
  const projectsContainer = document.getElementById("projects-container");
  const featureOptions = document.querySelectorAll(".feature-option");

  // Data for new projects
  const newProjects = [
    { image: "image/example5.png", title: "New Project 1" },
    { image: "image/example6.png", title: "New Project 2" },
    { image: "image/example7.png", title: "New Project 3" },
    { image: "image/example8.png", title: "New Project 4" },
  ];

  let isExpanded = false; // Tracks whether examples are expanded

  // Load More / Hide Examples functionality
  loadMoreButton.addEventListener("click", () => {
    if (!isExpanded) {
      // Add new projects
      newProjects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.classList.add("new-project"); // Add a class for identifying added projects
        projectDiv.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <p>${project.title}</p>
        `;
        projectsContainer.appendChild(projectDiv);
      });
      loadMoreButton.textContent = "HIDE EXAMPLES"; // Change button text
      isExpanded = true;
    } else {
      // Remove added projects
      const addedProjects = document.querySelectorAll(".new-project");
      addedProjects.forEach((project) => project.remove());
      loadMoreButton.textContent = "LOAD MORE EXAMPLES"; // Revert button text
      isExpanded = false;
    }
  });

  // Feature filter functionality
  featureOptions.forEach((option) => {
    option.addEventListener("click", () => {
      // Remove active class from all options
      featureOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Logic to filter projects (if needed)
      if (option.textContent !== "FEATURED") {
        // Example: Filter based on the category
        projectsContainer.innerHTML = `<p style="color:white;">Filtered projects for ${option.textContent} will go here.</p>`;
      } else {
        // Reset to show all projects
        projectsContainer.innerHTML = `
          <div class="project">
            <img src="image/example1.png" alt="Project 1">
            <p>Northwestern University</p>
          </div>
          <div class="project">
            <img src="image/example2.png" alt="Project 2">
            <p>EV Universe</p>
          </div>
          <div class="project">
            <img src="image/example3.png" alt="Project 3">
            <p>SNP Therapeutics</p>
          </div>
          <div class="project">
            <img src="image/example4.png" alt="Project 4">
            <p>Sony</p>
          </div>
        `;
        isExpanded = false;
        loadMoreButton.textContent = "LOAD MORE EXAMPLES"; // Reset button text
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project');
  const modal = document.createElement('div');
  modal.id = 'project-modal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = 'white';
  modal.style.padding = '20px';
  modal.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  modal.style.borderRadius = '8px';
  modal.style.zIndex = '1000';

  document.body.appendChild(modal);

  projects.forEach((project) => {
      project.addEventListener('click', () => {
          const projectDetails = `
              <h2>${project.querySelector('p').innerText}</h2>
              <img src="${project.querySelector('img').src}" style="width:100%; height:auto;" />
              <button id="close-modal" style="margin-top: 10px;">Close</button>
          `;
          modal.innerHTML = projectDetails;
          modal.style.display = 'block';

          document.getElementById('close-modal').addEventListener('click', () => {
              modal.style.display = 'none';
          });
      });
  });
});
const featureOptions = document.querySelectorAll('.feature-option');
const projectsContainer = document.getElementById('projects-container');

featureOptions.forEach((option) => {
    option.addEventListener('click', () => {
        // Remove active class from all options
        featureOptions.forEach((opt) => opt.classList.remove('active'));
        option.classList.add('active');

        // Get selected category
        const category = option.textContent.toLowerCase();

        // Show/Hide projects based on category
        const allProjects = projectsContainer.querySelectorAll('.project');
        allProjects.forEach((project) => {
            if (category === 'featured' || project.textContent.toLowerCase().includes(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

document.getElementById('load-more').addEventListener('click', () => {
  const hiddenProjects = document.querySelectorAll('.project.hidden');
  hiddenProjects.forEach((project) => {
      project.classList.remove('hidden');
  });

  document.getElementById('load-more').style.display = 'none';
  document.getElementById('reset').style.display = 'inline-block';
});

document.getElementById('reset').addEventListener('click', () => {
  const allProjects = document.querySelectorAll('.project');
  allProjects.forEach((project, index) => {
      if (index >= 4) {
          project.classList.add('hidden');
      }
  });

  document.getElementById('load-more').style.display = 'inline-block';
  document.getElementById('reset').style.display = 'none';
});





