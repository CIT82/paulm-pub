document.addEventListener("DOMContentLoaded", () => {
  const breadcrumbContainer = document.getElementById("breadcrumb");
  if (!breadcrumbContainer) return;

  let pathParts = window.location.pathname.split("/").filter(Boolean);
  const rootIndex = pathParts.indexOf("p0");

  if (rootIndex !== -1) {
    pathParts = pathParts.slice(rootIndex + 1);
  }

  if (pathParts.length >= 2) {
    const folder = pathParts[pathParts.length - 2];
    const file = pathParts[pathParts.length - 1].replace(".html", "");
    if (folder === file) {
      pathParts.pop();
    }
  }

  if (pathParts.length === 1 && pathParts[0] === "index.html") {
    breadcrumbContainer.style.display = "none";
    return;
  }

  let breadcrumbHTML = `<a href="/p0/index.html">Home</a>`;
  let currentPath = "/p0";

  pathParts.forEach((part, index) => {
    const isFolder = !part.endsWith(".html");

    const label = part
      .replace(".html", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase());

    if (isFolder) {
      const folderPage = `${part}/${part}.html`;
      breadcrumbHTML += ` / <a href="${currentPath}/${folderPage}">${label}</a>`;
      currentPath += `/${part}`;
    } else {
      breadcrumbHTML += ` / ${label}`;
    }
  });

  breadcrumbContainer.innerHTML = breadcrumbHTML;
});

// -----------------------------
// Contact Page Logic
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const sentMsg = document.getElementById("sentMsg");

  if (!sendBtn) return; // Only run on contact page

  sendBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const teamMember = document.getElementById("teamMember").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!email || !teamMember || !message) {
      alert("Please complete all required fields.");
      return;
    }

    sendBtn.style.display = "none";
    sentMsg.style.display = "block";

    document.getElementById("teamMember").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
      sentMsg.style.display = "none";
      sendBtn.style.display = "inline-block";
    }, 5000);
  });
});
