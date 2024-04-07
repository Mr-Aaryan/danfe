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
      { name: "Blog", url: "/blog" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Contact",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/danfesolutions/" },
      { name: "Whatsapp", url: "https://wa.me/message/Q4SH6APVW7GCG1" },
      { name: "Email", url: "mailto:danfesolutions0@gmail.com" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/danfesolutions/",
  x: "#",
  github: "#",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};