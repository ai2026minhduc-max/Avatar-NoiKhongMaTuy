 // ==========================
// Avatar V2.4 - Bài 3
// Chọn ảnh + Kéo ảnh
// ==========================

// Lấy các phần tử HTML
const upload = document.getElementById("upload");
const userImage = document.getElementById("userImage");

// Vị trí ảnh
let posX = 0;
let posY = 0;

// Biến dùng để kéo ảnh
let dragging = false;
let startX = 0;
let startY = 0;

// ==========================
// Chọn ảnh
// ==========================
upload.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    userImage.src = URL.createObjectURL(file);

    // Đưa ảnh về giữa
    posX = 0;
    posY = 0;

    updateImage();

});

// ==========================
// Cập nhật vị trí ảnh
// ==========================
function updateImage() {

    userImage.style.transform =
        `translate(${posX}px, ${posY}px)`;

}

// ==========================
// Bắt đầu kéo
// ==========================
userImage.addEventListener("mousedown", function (e) {

    dragging = true;

    startX = e.clientX - posX;
    startY = e.clientY - posY;

    userImage.style.cursor = "grabbing";

});

// ==========================
// Đang kéo
// ==========================
document.addEventListener("mousemove", function (e) {

    if (!dragging) return;

    posX = e.clientX - startX;
    posY = e.clientY - startY;

    updateImage();

});

// ==========================
// Thả chuột
// ==========================
document.addEventListener("mouseup", function () {

    dragging = false;

    userImage.style.cursor = "grab";

});