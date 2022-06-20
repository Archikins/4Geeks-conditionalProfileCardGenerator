import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let name = "";
  let lastname = "";
  let role = "";
  let city = "";
  let country = "";
  let twitter = "";
  let github = "";
  let linkedin = "";
  let instagram = "";
  let position = "";
  variables.name ? (name = variables.name) : (name = "Lucy");
  variables.lastname ? (lastname = variables.lastname) : (lastname = "Boillet");
  variables.role ? (role = variables.role) : (role = "Web Developer");
  variables.city ? (city = variables.city) : (city = "Miami");
  variables.country ? (country = variables.country) : (country = "USA");
  variables.twitter
    ? (twitter = variables.twitter)
    : (twitter = "https://twitter.com/4GeeksAcademy");
  variables.github
    ? (github = variables.github)
    : (github = "https://github.com/alesanchezr");
  variables.linkedin
    ? (linkedin = variables.linkedin)
    : (linkedin = "https://linkedin.com/4GeeksAcademy");
  variables.instagram
    ? (instagram = variables.instagram)
    : (instagram = "https://twitter.com/4GeeksAcademy");
  variables.socialMediaPosition == "position-right"
    ? (position = "position-right")
    : (position = variables.socialMediaPosition);

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${name} ${lastname}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${position}">
            <li><a href="${twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${github}" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
