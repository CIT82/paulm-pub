# Project 0: Template Analysis (Part 1)

**Template Name:** Business Casual
**Bootstrap Version:** 5.2.3 (JS bundle loaded via CDN; CSS bundled inside theme stylesheet)

---

## Section 1: The &lt;head&gt;

* **External CSS:**
  - Google Fonts: Raleway
    - ```html
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
  - Google Fonts: Lora
    - ```html
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />

* **Custom CSS:**
  - `css/styles.css`
    - `<link href="css/styles.css" rel="stylesheet" />`
    - Contains theme-specific styles  
    - Includes Bootstrap’s compiled CSS (no separate CDN CSS link). I did not realize this and may want to change this. I think it would be wise to keep my personal CSS overrides separate from the Bootstrap source file.

## Section 2: Site Inventory (Top Half)

### 1. Navigation / Menu
* **Line Numbers:** 24–37
* **Top-Level Classes:** `navbar`, `navbar-expand-lg`, `navbar-dark`, `py-lg-4`

* **Research:**
  - `navbar` defines the Bootstrap navigation element
  - `navbar-expand-lg` enables collapse below the `lg` breakpoint (992px). This changes the navbar into a "hamburger" style dropdown.
  - `navbar-dark` applies dark-themed nav styling.
  - `py-lg-4` applies padding when the screen width is `lg` or bigger

### 2. Logo / Branding
* **Line Numbers:** 17–22
* **Top-Level Classes:** `site-heading`, `text-center`, `text-faded `, `d-none`, `d-lg-block ` 

* **Research:**  
  - `site-heading` — A theme-specific class that applies rules for the large header title.  
  - `text-center` — A Bootstrap class that horizontally centers all text within the element.  
  - `text-faded` — A theme-specific class that applies a muted, washed-out color effect to the text.  

  - `d-none d-lg-block` — These two classes work together to control visibility across breakpoints, they hide the large logo on mobile/tablet and show it only on large screens.:  
    - `d-none` — Hides the element on all screen sizes by default.  
    - `d-lg-block` — Overrides `d-none` at the `lg` breakpoint and above, displaying the element as a block.

### 3. Hero Section (Intro / Welcome)
* **Line Numbers:** 38–52  
* **Top-Level Classes:** `page-section`, `clearfix`  

* **Research:**  
  - `page-section` this class sets the top and bottom margins to 5rem.  
  - `clearfix` this class allows the element to wrap around floated child elements.

### 4. Promise Section (CTA)
* **Line Numbers:** 53–67  
* **Top-Level Classes:** `page-section`, `cta`

* **Research:**  
  - `page-section` this class sets the top and bottom margins to 5rem.   
  - `cta` this class sets the top/bottom padding and background color.

## Section 5: Footer
* **Line Numbers:** 68–70  
* **Top-Level Classes:** `footer`, `text-faded`, `text-center`, `py-5`  

* **Research:**  
  - `footer` this class assigns the Bootstrap element `footer` to this item.
  - `text-faded` this class applies theme-specific muted color to the text.
  - `text-center` this class centers the text content.
  - `py-5` this class adds top and bottom padding of 3rem


## Section 6: JavaScript Dependencies

* **Line Number:** 72 and 74
* **Actual Script Tag:**
  - ```html
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
       <script src="js/scripts.js"></script>
    ```
  -These tags load Bootstrap and the custom JavaScript after the page loads
