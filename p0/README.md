# Project 0: Template Analysis (Part 1)

**Template Name:** Business Casual
**Bootstrap Version:** 5.2.3 (JS bundle loaded via CDN; CSS bundled inside theme stylesheet)

---

## Section 1: The &lt;head&gt;

**External CSS:**
- Google Fonts: Raleway
  - `<link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />`
- Google Fonts: Lora
  - `<link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />`

**Custom CSS:**
- `css/styles.css`
  - `<link href="css/styles.css" rel="stylesheet" />`
  - Contains theme-specific styles  
  - Includes Bootstrap’s compiled CSS (no separate CDN CSS link). I did not realize this and may want to change this. I think it would be wise to keep my personal CSS overrides separate from the Bootstrap source file.
