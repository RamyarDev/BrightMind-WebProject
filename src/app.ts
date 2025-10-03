// @ts-ignore
const openLinksSectionBtn = document.getElementById("openLinksSectionBtn");
const closeLinksSectionBtn = document.getElementById("closeLinksSectionBtn");
const linksSection = document.getElementById("linksSection");

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
