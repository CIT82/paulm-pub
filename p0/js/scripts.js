/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return;

  // Get path segments
  const path = window.location.pathname.split("/").filter(Boolean);

  // Filter out folder names (keep only .html files)
  const pages = path.filter(segment => segment.endsWith(".html"));

  // If user is on home page → hide breadcrumbs
  if (pages.length === 0 || pages[0] === "index.html") {
    breadcrumbContainer.style.display = "none";
    return;
  }

  // Start breadcrumb with Home
  let breadcrumbHTML = `<a href="index.html">Home</a>`;

  // Build deeper breadcrumbs
  pages.forEach((segment, index) => {
    const label = segment
      .replace(".html", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize each word

    breadcrumbHTML += ` / <a href="${segment}">${label}</a>`;
  });

  breadcrumbContainer.innerHTML = breadcrumbHTML;
});

