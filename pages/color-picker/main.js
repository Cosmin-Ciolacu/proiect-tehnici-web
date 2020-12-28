const canvas = document.querySelector("#colors");
const ctx = canvas.getContext("2d");

const image = new Image(250, 250);
image.onload = () => ctx.drawImage(image, 0, 0, image.width, image.height);
image.src = "./assets/colors.png";

canvas.onclick = (mouseEvent) => {
  const imgData = ctx.getImageData(
    mouseEvent.offsetX,
    mouseEvent.offsetY,
    1,
    1
  );
  const rgba = imgData.data;
  console.log(rgba);
};
