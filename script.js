(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.getElementById("navToggle");
  var rail = document.getElementById("siteNav");

  if (toggle && rail) {
    toggle.addEventListener("click", function () {
      var isOpen = rail.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    rail.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        rail.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Headshot fallback: show monogram if the real photo hasn't been added yet */
  var headshot = document.getElementById("headshot");
  var headshotImg = document.getElementById("headshotImg");

  if (headshot && headshotImg) {
    headshotImg.addEventListener("error", function () {
      headshot.classList.add("no-photo");
    });
    // If the image is cached and already failed before this script ran
    if (headshotImg.complete && headshotImg.naturalWidth === 0) {
      headshot.classList.add("no-photo");
    }
  }

  /* Scrollspy: highlight the current section in the rail */
  var sections = Array.prototype.slice.call(document.querySelectorAll(".section, .hero"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".rail a[data-section]"));

  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("data-section") === id);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      if (section.id) observer.observe(section);
    });
  }
})();
