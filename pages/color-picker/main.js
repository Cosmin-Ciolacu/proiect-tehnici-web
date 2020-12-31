const canvas = document.querySelector("#colors");
const ctx = canvas.getContext("2d");
const rgbColorSpan = document.querySelector("#rgbColor");
const hexColorSpan = document.querySelector("#hexColor");
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function selectColor(rgb = null) {
  if (rgb !== null) {
    const rgbColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    const hexColor = rgbToHex(rgb[0], rgb[1], rgb[2]);
    document.body.style.backgroundColor = hexColor;
    rgbColorSpan.innerHTML = rgbColor;
    hexColorSpan.innerHTML = hexColor;
  } else {
    rgbColorSpan.innerHTML = "rgb(255, 255, 255)";
    hexColorSpan.innerHTML = "#ffffff";
  }
}

function initImage() {
  const image = new Image(250, 250);
  image.onload = () => ctx.drawImage(image, 0, 0, image.width, image.height);
  image.src = "./assets/colors.png";
  selectColor();
}
window.onload = initImage;

canvas.onclick = (mouseEvent) => {
  const imgData = ctx.getImageData(
    mouseEvent.offsetX,
    mouseEvent.offsetY,
    1,
    1
  );
  const rgb = imgData.data;
  selectColor(rgb);
};
