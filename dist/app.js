// @ts-ignore
const openLinksSectionBtn = document.getElementById("openLinksSectionBtn");
const closeLinksSectionBtn = document.getElementById("closeLinksSectionBtn");
const linksSection = document.getElementById("linksSection");
//Close & Open Links Menu Logic
openLinksSectionBtn === null || openLinksSectionBtn === void 0 ? void 0 : openLinksSectionBtn.addEventListener("click", () => {
    if (linksSection) {
        linksSection.classList.remove("-left-[640px]");
        linksSection.classList.add("left-0");
    }
});
closeLinksSectionBtn === null || closeLinksSectionBtn === void 0 ? void 0 : closeLinksSectionBtn.addEventListener("click", () => {
    if (linksSection) {
        linksSection.classList.remove("left-0");
        linksSection.classList.add("-left-[640px]");
    }
});
export {};
//# sourceMappingURL=app.js.map