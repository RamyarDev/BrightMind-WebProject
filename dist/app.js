// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { coursesData } from "./data.js";
import { accordionBoxesData } from "./data.js";
const logosSlider = new Swiper(".logos-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
});
const coursesSlider = new Swiper(".courses-slider", {
    slidesPerView: 2,
    spaceBetween: 1,
    loop: true,
    navigation: {
        nextEl: ".custom-next-courses-slider",
        prevEl: ".custom-prev-courses-slider",
    },
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
const usersOpinionSlider = new Swiper(".opinions-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".custom-next-opinion-slider",
        prevEl: ".custom-prev-opinion-slider",
    },
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    },
});
const openLinksSectionBtn = document.getElementById("openLinksSectionBtn");
const closeLinksSectionBtn = document.getElementById("closeLinksSectionBtn");
const linksSection = document.getElementById("linksSection");
const courseContainer = document.getElementById("course-container");
const accordionParent = document.getElementById("AccordionParent");
//Close & Open Links Menu Logic
openLinksSectionBtn?.addEventListener("click", () => {
    if (linksSection) {
        linksSection.classList.remove("-left-[640px]");
        linksSection.classList.add("left-0");
    }
});
closeLinksSectionBtn?.addEventListener("click", () => {
    if (linksSection) {
        linksSection.classList.remove("left-0");
        linksSection.classList.add("-left-[640px]");
    }
});
// Create Courses Box
coursesData.forEach((course, index) => {
    const box = document.createElement("div");
    box.classList.add("bg-white", "rounded-2xl", "p-4", "hover:scale-[101%]", "transition", "cursor-pointer");
    box.innerHTML = `
          <div>
            <div class="bg-white m-4 p-1 px-3 absolute rounded-full flex items-center gap-2">
              <img src="assets/Home/67b17d80b3babeab623b848a_Star Vector.svg" alt="star-1" />
              <p class="font-[Grotesk-medium]">${course.rating}</p>
            </div>
            <div class="w-full h-60 sm:h-80 lg:h-60">
              <img class="w-full h-full object-cover rounded-[15px]" src="assets/Home/CourseThumbnail-${index + 1}.webp" alt="image-1" />
            </div>
          </div>
          <!-- Course Details -->
          <div>
            <h1 class="text-[18px] font-[Grotesk-bold] py-5">${course.title}</h1>
            <div class="flex items-center gap-2">
              <div class="py-2 px-3 flex items-center gap-2 rounded-full border-1 border-gray-400">
                <img src="assets/Home/67b0af7b52e9c6a7cf59aebe_Course Tag.svg" alt="book-icon" />
                <p class="text-[14px] font-[Grotesk-medium]">${course.students} lesson</p>
              </div>
              <div class="py-2 px-3 flex items-center gap-2 rounded-full border-1 border-gray-400">
                <img src="assets/Home/67b17a2ac56540b2db6a9afc_Timer Tag.svg" alt="clock-icon" />
                <p class="text-[14px] font-[Grotesk-medium]">${course.duration}</p>
              </div>
              <div class="py-2 px-3 flex items-center gap-2 rounded-full border-1 border-gray-400">
                <img src="assets/Home/67b17a2a056bd817f13ca158_Education Tag.svg" alt="teach-icon" />
                <p class="text-[14px] font-[Grotesk-medium]">${course.students}students</p>
              </div>
            </div>
            <div class="flex items-center justify-between py-5">
              <div class="flex items-center gap-3">
                <img class="rounded-full" src="assets/Home/mentor-${index + 1}.png" alt="Mentor1" />
                <p class="text-[18px] font-[Grotesk-bold]">${course.instructor}</p>
              </div>
              <h1 class="text-2xl font-[Grotesk-bold]">$${course.price.toFixed(2)}</h1>
            </div>
          </div>`;
    courseContainer?.appendChild(box);
});
accordionBoxesData.forEach((boxData) => {
    const box = document.createElement("div");
    box.className = " h-20 overflow-hidden bg-gray-50 rounded-2xl p-5 mx-5 cursor-pointer shadow-lg transition-all boxElm";
    box.innerHTML = `<div>
  <div class="flex  items-center justify-between pb-5 pt-1">
  <h1 class="text-3xl font-[Grotesk-Bold]">${boxData.title}</h1>
  <i class="fa-solid fa-plus text-black text-2xl iconElm transition-transform"></i>
  </div>
  <div>
  <p class="font-[Grotesk-Medium] text-center">
  ${boxData.description}
  </p>
  </div>
  </div>`;
    accordionParent?.appendChild(box);
});
let boxes = document.querySelectorAll(".boxElm");
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let icon = box.querySelector(".iconElm");
        boxes.forEach((b) => {
            if (b !== box) {
                b.classList.remove("h-50");
                b.classList.remove("bg-pale-primary");
                b.classList.remove("text-white");
                b.classList.add("h-20");
                const otherIcon = b.querySelector(".iconElm");
                otherIcon.classList.remove("rotate-45");
                otherIcon.classList.remove("text-white");
            }
        });
        box.classList.toggle("h-50");
        box.classList.toggle("bg-pale-primary");
        box.classList.toggle("text-white");
        icon.classList.toggle("rotate-45");
        icon.classList.toggle("text-white");
    });
});
//# sourceMappingURL=app.js.map