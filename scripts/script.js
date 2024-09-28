const toggleNavButtons = document.querySelectorAll(".close");
const navigation = document.querySelector(".side-nav.mobile");

let isClose = true;
toggleNavButtons.forEach((e) => {
  e.addEventListener("click", () => {
    if (isClose) {
      isClose = false;
      navigation.classList.remove("closed");
      console.log(isClose);
    } else {
      isClose = true;
      navigation.classList.add("closed");
      console.log(isClose);
    }
  });
});

// console.log(location.protocol);

const link_home = document.querySelector(".link_home");
const link_about = document.querySelector(".link_about");
const what_i_do = document.querySelector(".what_i_do");
const link_my_projects = document.querySelector(".link_my_projects");
const link_contact = document.querySelector(".link_contact");

link_home.addEventListener("click", () => {
  link_home.classList.add("active");
  link_about.classList.remove("active");
  what_i_do.classList.remove("active");
  link_my_projects.classList.remove("active");
  link_contact.classList.remove("active");
});
// Intersection Observer setup
const observerSectionHome = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        link_home.classList.add("active");
        link_about.classList.remove("active");
        what_i_do.classList.remove("active");
        link_my_projects.classList.remove("active");
        link_contact.classList.remove("active");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);

observerSectionHome.observe(document.querySelector("#home"));

link_about.addEventListener("click", () => {
  link_home.classList.remove("active");
  link_about.classList.add("active");
  what_i_do.classList.remove("active");
  link_my_projects.classList.remove("active");
  link_contact.classList.remove("active");
});
// Intersection Observer setup
const observerSectionAbout = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        link_home.classList.remove("active");
        link_about.classList.add("active");
        what_i_do.classList.remove("active");
        link_my_projects.classList.remove("active");
        link_contact.classList.remove("active");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);
observerSectionAbout.observe(document.querySelector("#about"));

what_i_do.addEventListener("click", () => {
  link_home.classList.remove("active");
  link_about.classList.remove("active");
  what_i_do.classList.add("active");
  link_my_projects.classList.remove("active");
  link_contact.classList.remove("active");
});
// Intersection Observer setup
const observerSectionWhatIdo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        link_home.classList.remove("active");
        link_about.classList.remove("active");
        what_i_do.classList.add("active");
        link_my_projects.classList.remove("active");
        link_contact.classList.remove("active");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);

observerSectionWhatIdo.observe(document.querySelector("#what_i_do"));

link_my_projects.addEventListener("click", () => {
  link_home.classList.remove("active");
  link_about.classList.remove("active");
  what_i_do.classList.remove("active");
  link_my_projects.classList.add("active");
  link_contact.classList.remove("active");
});
// Intersection Observer setup
const observerSectionProjects = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        link_home.classList.remove("active");
        link_about.classList.remove("active");
        what_i_do.classList.remove("active");
        link_my_projects.classList.add("active");
        link_contact.classList.remove("active");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);
observerSectionProjects.observe(document.querySelector("#my_projects"));

link_contact.addEventListener("click", () => {
  link_home.classList.remove("active");
  link_about.classList.remove("active");
  what_i_do.classList.remove("active");
  link_my_projects.classList.remove("active");
  link_contact.classList.add("active");
});

// Intersection Observer setup
const observerSectionContact = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        link_home.classList.remove("active");
        link_about.classList.remove("active");
        what_i_do.classList.remove("active");
        link_my_projects.classList.remove("active");
        link_contact.classList.add("active");
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);
observerSectionContact.observe(document.querySelector("#contact"));

const mobile_link = document.querySelectorAll(".mobile_link");

mobile_link.forEach((e) => {
  e.addEventListener("click", () => {
    isClose = true;
    navigation.classList.add("closed");
    console.log(isClose);
  });
});

const full_vid = document.querySelector(".full_vid");
const full_vid_close = document.querySelector(".full_vid_close");
const video_playing = document.querySelector("#video_playing");
const to_open_vid = document.querySelectorAll(".to_open_vid");
var video = document.getElementById("video_playing");

let videoIsFull = false;

full_vid_close.addEventListener("click", () => {
  if (!videoIsFull) {
    videoIsFull = true;
    full_vid.classList.add("isFull");
  } else {
    videoIsFull = false;
    full_vid.classList.remove("isFull");
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset video to the beginning (optional)
  }
});
// to_open_vid.forEach((to_open_vif) => {
//   to_open_vif.addEventListener("click", () => {
//     videoIsFull = true;
//     full_vid.classList.add("isFull");
//   });
// });

function OpenVIdeo(video_link) {
  videoIsFull = true;
  full_vid.classList.add("isFull");
  video_playing.src = video_link;
}

// Intersection Observer setup
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
        // Stop observing once animation is triggered
      }
    });
  },
  {
    rootMargin: "0px", // Adjust as needed
    threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
  }
);

// Find all elements with class 'animateIn' and observe them
const elements = document.querySelectorAll(".animateIn");
elements.forEach((element) => {
  observer.observe(element);
});

let isLoadingfetchProfile = true;
let isLoadingfetchProjects = true;
let isLoadingfetchWhatIdo = true;

function loadPage() {
  if (
    !isLoadingfetchProfile &&
    !isLoadingfetchProjects &&
    !isLoadingfetchWhatIdo
  ) {
    setTimeout(() => {
      document.body.classList.remove("isLoading");
      console.log("Done.....");
      console.log(
        isLoadingfetchProfile,
        isLoadingfetchProjects,
        isLoadingfetchWhatIdo
      );
    }, 2000);
  }
  console.log(
    isLoadingfetchProfile,
    isLoadingfetchProjects,
    isLoadingfetchWhatIdo
  );
}
window.addEventListener("load", () => {
  loadPage();
});

// -- The backend connectivity --,

// about information
const about_text = document.querySelectorAll(".about_text");
const about_profile_image = document.querySelector(".about_profile_image");
const headerMain_profile_image = document.querySelector(
  ".headerMain_profile_image"
);
const headerMobile_profile_image = document.querySelector(
  ".headerMobile_profile_image"
);
const about_name = document.querySelector(".about_name");
const about_education = document.querySelector(".about_education");
const about_contact_message = document.querySelector(".about_contact_message");
const about_email = document.querySelector(".about_email");
const about_phone_number = document.querySelector(".about_phone_number");
const about_work_status = document.querySelector(".about_work_status");
const about_location = document.querySelector(".about_location");
const about_location1 = document.querySelector(".about_location1");
const about_lang = document.querySelector(".about_lang");

// links for social
const link_facebook = document.querySelector(".link_facebook");
const link_skype = document.querySelector(".link_skype");
const link_twitter = document.querySelector(".link_twitter");
const link_telegram = document.querySelector(".link_telegram");

const userid = 2;
const backend_url =
  "https://kenneth-portifolio-backend.up.railway.app/api/user/2/";

function fetchProfile() {
  fetch(`${backend_url}profile/`)
    .then((res) => res.json())
    .then((data) => {
      about_text.forEach((e) => (e.innerText = data.about));
      about_profile_image.src = data.profile_image;
      headerMain_profile_image.src = data.profile_image;
      headerMobile_profile_image.src = data.profile_image;
      // about_profile_image.forEach((e) => (e.src = data.profile_image));
      about_name.innerText = data.name;
      about_contact_message.innerText = data.contact_message;
      about_education.innerText = data.education;
      about_email.innerText = data.email;
      about_phone_number.innerText = data.phone_number;
      about_work_status.innerText = data.work_status;
      about_location.innerText = data.location;
      about_location1.innerText = data.location;
      about_lang.innerText = data.language;
      // social links
      link_facebook.href = data.facebook;
      link_skype.href = data.skype;
      link_twitter.href = data.twitter;
      link_telegram.href = data.telegram;

      // changeFavicon(data.image);

      isLoadingfetchProfile = false;
      loadPage();
      console.log(data);
    })
    .catch((r) => {
      console.log(r);
    });
}
fetchProfile();

// projects

function fetchProjects() {
  fetch(`${backend_url}projects/`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((e) => {
        const projects_container = document.querySelector(".projects");

        const projt = document.createElement("div");
        const bg = document.createElement("div");
        const img = document.createElement("img");
        const overlay = document.createElement("div");
        const info = document.createElement("div");
        const titleP = document.createElement("p");
        const btns = document.createElement("div");
        const btn1 = document.createElement("a");
        const btn2 = document.createElement("a");

        btns.classList.add("btns");
        btn1.classList.add("btn");
        btn2.classList.add("btn");
        btn2.classList.add("to_open_vid");
        btn2.innerText = " Live Demo ";
        btn1.innerText = " Git Hub ";
        overlay.classList.add("overlay");
        info.classList.add("info");
        projt.classList.add("projt");
        bg.classList.add("bg");

        projects_container.appendChild(projt);
        projt.appendChild(bg);
        projt.appendChild(overlay);
        overlay.appendChild(info);
        info.appendChild(btns);
        btns.appendChild(btn1);
        btns.appendChild(btn2);
        info.appendChild(titleP);
        bg.appendChild(img);

        img.src = e.image;
        titleP.innerText = e.title;
        btn1.href = e.url;
        btn1.target = "_blank";

        btn2.addEventListener("click", () => {
          OpenVIdeo(e.video);
        });

        // Intersection Observer setup
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
                // Stop observing once animation is triggered
              } else {
                entry.target.classList.remove("active");
              }
            });
          },
          {
            rootMargin: "0px", // Adjust as needed
            threshold: 0.5, // Adjust as needed (0 = fully hidden, 1 = fully visible)
          }
        );

        // Find all elements with class 'animateIn' and observe them

        observer.observe(projt);

        isLoadingfetchProjects = false;
        loadPage();

        console.log(data);
      });
    })
    .catch((r) => {
      console.log(r);
    });
}
fetchProjects();

function SendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sktechug@gmail.com",
    Password: "A67A4559469F07DDD107547A6F577F5BD457",
    From: "sktechug@gmail.com",
    To: "masabaian332@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

function changeFavicon(newIconURL) {
  // Find the existing favicon element
  let favicon = document.getElementById("favicon");

  // If no favicon element exists, create one
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.id = "favicon";
    favicon.rel = "icon";
    document.head.appendChild(favicon);
  }

  // Update the href attribute to the new icon URL
  favicon.href = newIconURL;
}

// calling i dos

function fetchWhatIdo() {
  fetch(`${backend_url}what-i-do/`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((e) => {
        const wht_container = document.querySelector(".wht_i");

        const each_do = document.createElement("div");
        const icon = document.createElement("div");
        const info = document.createElement("div");
        const i = document.createElement("i");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");

        icon.classList.add("icon");
        info.classList.add("info");
        i.classList.add("fa-solid");
        i.classList.add("fa-bolt");

        each_do.classList.add("each_do");
        // each_do.classList.add("animateIn");

        wht_container.appendChild(each_do);
        each_do.appendChild(icon);
        each_do.appendChild(info);
        icon.appendChild(i);
        info.appendChild(h4);
        info.appendChild(p);

        h4.innerText = e.title;
        p.innerText = e.description;

        isLoadingfetchWhatIdo = false;
        loadPage();

        console.log(data);
      });
    })
    .catch((r) => {
      console.log(r);
    });
}
fetchWhatIdo();
