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

  filterOptions[0].classList.add("active");
  projects.forEach((project) => (project.style.display = "block"));
});

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");
  const modal = document.getElementById("noticeBoardModal");
  const closeNotice = document.getElementById("closeNotice");
  const noticeText = document.getElementById("noticeText");

  if (!modal || !closeNotice || !noticeText) {
      console.error("Modal structure is missing or not properly linked in the DOM.");
      return;
  }

  projects.forEach((project) => {
      project.addEventListener("click", () => {
          const projectName = project.querySelector("p")?.textContent.trim() || "Unknown Project";
          console.log(`Project clicked: ${projectName}`);


          noticeText.textContent = `You clicked on ${projectName}. This is a showcase of our custom design solutions.`;

    
          modal.style.display = "block";
      });
  });


  closeNotice.addEventListener("click", () => {
      console.log("Modal closed.");
      modal.style.display = "none";
  });


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


  loadMoreButton.addEventListener("click", () => {
      hiddenProjects.style.display = "grid"; 
      loadMoreButton.style.display = "none"; 
      hideExamplesButton.style.display = "block"; 
  });

  hideExamplesButton.addEventListener("click", () => {
      hiddenProjects.style.display = "none"; 
      loadMoreButton.style.display = "block"; 
      hideExamplesButton.style.display = "none"; 
  });
});


// Case Studies Data
const caseStudies = {
    hp: {
      title: "HP Case Study",
      description: "HP needed to implement a global rewards program. In 6 months, we achieved:",
      metric1: "40K",
      metricDesc1: "active members inside the program",
      metric2: "56%",
      metricDesc2: "of customers are repeat customers",
    },
    xerox: {
      title: "Xerox Case Study",
      description: "Xerox needed a new strategy and website to capture B2B leads. In 6 months, we achieved:",
      metric1: "20%",
      metricDesc1: "sales increase for Xerox VersaLink",
      metric2: "43%",
      metricDesc2: "conversion rate for nurtured leads",
    },
    doforms: {
      title: "DoForms Case Study",
      description: "DoForms needed an SEO-optimized website. In 2 months, we achieved:",
      metric1: "22%",
      metricDesc1: "increase in new traffic",
      metric2: "1.5K",
      metricDesc2: "new organic keywords",
    },
    fieldedge: {
      title: "FieldEdge Case Study",
      description: "FieldEdge improved performance and engagement. Shortly after launch, we achieved:",
      metric1: "19%",
      metricDesc1: "increase in traffic",
      metric2: "50%",
      metricDesc2: "faster loading speed",
    },
    miami: {
      title: "Miami Country Day School Case Study",
      description: "Miami wanted to grow online visibility. Shortly after launch, we achieved:",
      metric1: "32%",
      metricDesc1: "decrease in bounce rates",
      metric2: "15%",
      metricDesc2: "increase in organic traffic",
    },
  };
  
  document.querySelectorAll(".case-studies-list li").forEach((logo) => {
    logo.addEventListener("click", () => {
      document.querySelectorAll(".case-studies-list li").forEach((el) => el.classList.remove("active"));
      logo.classList.add("active");
  
      const caseKey = logo.id.replace("logo-", "");
      const details = caseStudies[caseKey];
  
      document.getElementById("case-title").innerText = details.title;
      document.getElementById("case-description").innerText = details.description;
      document.getElementById("metric-1").innerText = details.metric1;
      document.getElementById("metric-desc-1").innerText = details.metricDesc1;
      document.getElementById("metric-2").innerText = details.metric2;
      document.getElementById("metric-desc-2").innerText = details.metricDesc2;
    });
  });
  
window.addEventListener("resize", () => {
    const caseStudiesList = document.querySelector(".case-studies-list");
    if (window.innerWidth <= 768) {
      caseStudiesList.style.overflowX = "auto";
      caseStudiesList.style.display = "flex";
      caseStudiesList.style.justifyContent = "flex-start";
    } else {
      caseStudiesList.style.overflowX = "visible";
    }
  });

  


  const testimonials = {
    tray: {
      text: "The Digital Silk team was the clear winner of our selection process and they’ve been an absolute dream to work with throughout the entire process.",
      author: "Brian Whitney, CRO at Tray",
    },
    amida: {
      text: "The team provided exceptional service and truly understood our goals. The results speak for themselves.",
      author: "Director of Marketing at Amida Technology Solutions",
    },
    growpath: {
      text: "Working with Digital Silk was transformative. Our online presence has never been stronger.",
      author: "Connie Wong, Marketing Director at GrowPath",
    },
  };
  

  let currentClient = "tray";
  
  // Update Testimonial Content
  function updateTestimonial(client) {
    const testimonialText = document.getElementById("testimonial-text");
    testimonialText.innerHTML = `
      <p>${testimonials[client].text}</p>
      <footer>— ${testimonials[client].author}</footer>
    `;
  
    // Update active client logo
    document.querySelectorAll(".client-logo").forEach((logo) => {
      logo.classList.remove("active");
    });
    document.querySelector(`[data-client="${client}"]`).classList.add("active");
  
    currentClient = client;
  }
  
  // Navigation Handlers
  document.getElementById("testimonial-prev").addEventListener("click", () => {
    const clients = Object.keys(testimonials);
    const currentIndex = clients.indexOf(currentClient);
    const prevIndex = (currentIndex - 1 + clients.length) % clients.length;
    updateTestimonial(clients[prevIndex]);
  });
  
  document.getElementById("testimonial-next").addEventListener("click", () => {
    const clients = Object.keys(testimonials);
    const currentIndex = clients.indexOf(currentClient);
    const nextIndex = (currentIndex + 1) % clients.length;
    updateTestimonial(clients[nextIndex]);
  });
  
