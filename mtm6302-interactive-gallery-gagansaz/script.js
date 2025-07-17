const images = [
    { src: "https://picsum.photos/id/1015/600/400", alt: "Mountain", info: "A beautiful mountain." },
    { src: "https://picsum.photos/id/1025/600/400", alt: "Dog", info: "A cute dog." },
    { src: "https://picsum.photos/id/1041/600/400", alt: "Beach", info: "Sunny beach day." },
    { src: "https://picsum.photos/id/1056/600/400", alt: "City", info: "Busy city view." },
];

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupInfo = document.getElementById("popup-info");
const closeBtn = document.getElementById("close");

images.forEach(image => {
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.addEventListener("click", () => {
        popupImg.src = image.src;
        popupInfo.textContent = image.info;
        popup.classList.remove("hidden");
    });
    gallery.appendChild(img);
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});
