# Calico Center

Calico Center is a mock static cat adoption center website built with HTML, CSS, and JavaScript. It presents adoptable cats, explains the adoption process, and provides ways for visitors to contact or support the organization.

## Features

- Home page with organization information, adoption steps, location, and hours
- Adoptable cat gallery with filters for age, sex, and size
- Adoption requirements, fees, and frequently asked questions
- Donation and volunteer information
- Contact and adoption inquiry form
- Responsive styling for desktop and mobile layouts

## Pages

- `index.html` - Home page
- `adopt.html` - Adoptable cats and gallery filters
- `adoption_info.html` - Adoption process, requirements, fees, and FAQ
- `get_involved.html` - Donation and volunteer information
- `contact.html` - Location, hours, contact details, and inquiry form
- `thankyou.html` - Form submission confirmation page

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- jQuery 1.12.4, loaded from Google Hosted Libraries
- Filterizr, included locally in `js/jquery.filterizr.min.js`
- Google Fonts: Open Sans, Quicksand, and Raleway

## Running locally

No build tools or package installation are required. From this folder, start a local HTTP server:

```bash
python -m http.server 8000
```

Open [http://localhost:8000/](http://localhost:8000/) in a browser.

Alternatively, open `index.html` directly, though a local server provides more reliable behavior for relative assets and browser features.

## Project structure

```text
calico-center-website/
├── index.html
├── adopt.html
├── adoption_info.html
├── get_involved.html
├── contact.html
├── thankyou.html
├── script.js
├── style.css
├── images/
└── js/
    └── jquery.filterizr.min.js
```

## Development notes

- Shared layout and styles are maintained in the HTML files and `style.css`.
- Cat gallery filtering is powered by Filterizr and the filter controls in `adopt.html`.
- The contact form navigates to `thankyou.html`; it does not currently send data to a server.
- Verify page changes in a browser at both desktop and mobile widths.
