// selectare elemente
const buttons = document.querySelectorAll(".btn");
const sizePicker = document.querySelector("#sizePicker");
const fontPicker = document.querySelector("#fontPicker");
const colorPicker = document.querySelector("#colorPicker");
//const editor = document.querySelector("#editor");

// setare dedignMode on la onload

window.onload = () => {
  editor.document.designMode = "on";
};

// definire functii pentru executare comenzi

const execCmd = (cmd, value = null) => {
  editor.document.execCommand(cmd, false, value);
};

//rulare comenzi la click-uri

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // preluare comanda din data-cmd .
    const cmd = btn.dataset["cmd"];
    //console.log(cmd);
    if (cmd === "createLink") {
      const url = prompt("introduceti link");
      execCmd(cmd, url);
    } else {
      execCmd(cmd);
    }
  });
});

fontPicker.onchange = (e) => {
  execCmd("fontName", e.target.value);
};

sizePicker.onchange = (e) => {
  execCmd("fontSize", e.target.value);
};

colorPicker.onchange = (e) => {
  execCmd("foreColor", e.target.value);
};
