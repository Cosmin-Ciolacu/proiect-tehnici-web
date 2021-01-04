// initializare variabile

const canvas = document.querySelector("#colors");
const ctx = canvas.getContext("2d");
const rgbColorSpan = document.querySelector("#rgbColor");
const hexColorSpan = document.querySelector("#hexColor");

//functie pentru a converti componentele in hex
const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

// functie pentru a converti culoarea rgb in hex
const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

// functie pentru a selecta culoarea si a schimba background-ul cu culoarea selectata
const selectColor = (rgb = null) => {
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
};
// functie pentru a afisa color picker-ul
const initImage = () => {
  const image = new Image(250, 250);
  image.onload = () => ctx.drawImage(image, 0, 0, image.width, image.height);
  image.src = "./assets/colors.png";
  selectColor();
};
window.onload = initImage;

canvas.onclick = (mouseEvent) => {
  // selectare date din imagine
  const imgData = ctx.getImageData(
    mouseEvent.offsetX,
    mouseEvent.offsetY,
    1,
    1
  );

  // selectare codul rgb
  const rgb = imgData.data;

  //actualizare culoare
  selectColor(rgb);
};
