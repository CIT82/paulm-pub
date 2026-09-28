document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return;

  // Full path split
  const fullParts = window.location.pathname.split("/").filter(Boolean);

  // Detect repo root: everything up to and including "p0"
  const p0Index = fullParts.indexOf("p0");
  if (p0Index === -1) {
    breadcrumbContainer.style.display = "none";
    return;
  }

  // Repo root path (works locally AND hosted)
  const repoRoot = "/" + fullParts.slice(0, p0Index + 1).join("/");

  // Path inside repo
  let pathParts = fullParts.slice(p0Index + 1);

  // Remove duplicate folder/page names
  if (pathParts.length >= 2) {
    const folder = pathParts[pathParts.length - 2];
    const file = pathParts[pathParts.length - 1].replace(".html", "");
    if (folder === file) {
      pathParts.pop();
    }
  }

  // Hide breadcrumb on home page
  if (pathParts.length === 0 || pathParts[0] === "index.html") {
    breadcrumbContainer.style.display = "none";
    return;
  }

  // Home link ALWAYS points to your real hosted root
  let breadcrumbHTML = `<a href="${repoRoot}/index.html">Home</a>`;

  // Build links inside repo
  let currentPath = repoRoot;

  pathParts.forEach(part => {
    const isFile = part.endsWith(".html");

    if (!isFile) {
      currentPath += `/${part}`;
      const folderPage = `${currentPath}/${part}.html`;

      const label = part.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
      breadcrumbHTML += ` / <a href="${folderPage}">${label}</a>`;
    } else {
      const label = part
        .replace(".html", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, c => c.toUpperCase());

      breadcrumbHTML += ` / ${label}`;
    }
  });

  breadcrumbContainer.innerHTML = breadcrumbHTML;
});
