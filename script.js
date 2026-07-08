const zoomSlider = document.getElementById("zoomSlider");
const downloadBtn = document.getElementById("downloadBtn");
const avatarContainer = document.querySelector(".avatar-container");
const upload = document.getElementById("upload");
const userImage = document.getElementById("userImage");
const resetBtn = document.getElementById("resetBtn");
let scale = 1;

let posX = 0;
let posY = 0;

let dragging = false;

let startX;
let startY;

upload.addEventListener("change", function(){

    const file = this.files[0];

    if(file){ 

    userImage.src = URL.createObjectURL(file);

    scale = 1;
    posX = 0;
    posY = 0;

    updateImage();
zoomSlider.value = 100;
}

        

    }

});

userImage.addEventListener("mousedown", function(e){

    dragging = true;

    startX = e.clientX - posX;

    startY = e.clientY - posY;

    userImage.style.cursor="grabbing";

});

document.addEventListener("mousemove", function(e){

    if(!dragging) return;

    posX = e.clientX - startX;

    posY = e.clientY - startY;

    updateImage();

});

document.addEventListener("mouseup", function(){

    dragging=false;

    userImage.style.cursor="grab";

});

 function updateImage(){
userImage.style.transform =
`translate(${posX}px, ${posY}px) scale(${scale})`;
    const maxX = 180;
    const maxY = 180;

    if(posX > maxX) posX = maxX;
    if(posX < -maxX) posX = -maxX;

    if(posY > maxY) posY = maxY;
    if(posY < -maxY) posY = -maxY;

    userImage.style.transform =
    `translate(${posX}px, ${posY}px) scale(${scale})`;

}
 

avatarContainer.addEventListener("wheel", function(e){

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.1;

    }else{

        scale -= 0.1;

    }

    if(scale < 0.2){

        scale = 0.2;

    }

    if(scale > 5){

        scale = 5;

    }

    updateImage();
zoomSlider.value = scale * 100;
});
resetBtn.addEventListener("click", function(){

    scale = 1;

    posX = 0;

    posY = 0;

    updateImage();
 }
});
downloadBtn.addEventListener("click", function () {

    html2canvas(avatarContainer, {
        backgroundColor: null,
        useCORS: true,
        scale: 2
    }).then(canvas => {

        const link = document.createElement("a");

        link.download = "avatar-noi-khong-voi-ma-tuy.png";

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

 zoomSlider.addEventListener("input", function(){

    alert("Zoom đang chạy");

    scale = 1,5.value

    updateImage();

});