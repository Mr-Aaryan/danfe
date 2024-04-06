// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  // { name: "Products", url: "/products" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Services", url: "#" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/danfesolutions/" },
      { name: "Whatsapp", url: "https://wa.me/message/Q4SH6APVW7GCG1" },
      { name: "+977-9824452633", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};