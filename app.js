let valuesRounded = [];
let copyCodeButton, copyTextButton;

function getValuesRounded() {
  const topLeft = document.getElementById("top-left").value;
  const topRight = document.getElementById("top-right").value;
  const bottomLeft = document.getElementById("bottom-left").value;
  const bottomRight = document.getElementById("bottom-right").value;

  document.getElementById("box").style.borderRadius = `${topLeft}% ${
    100 - topLeft
  }% ${bottomRight}% ${100 - bottomRight}% / ${bottomLeft}% ${topRight}% ${
    100 - topRight
  }% ${100 - bottomLeft}%`;

  valuesRounded = [topLeft, topRight, bottomLeft, bottomRight];
}

getValuesRounded();

function getCopyValue() {
  copyCodeButton = document.querySelector(".css-code-snippet");
  copyTextButton = document.querySelector(".snippet-text");

  handleClickCopy();
}

getCopyValue();

function copyCode() {
  const copyCode = `border-radius: " ${valuesRounded[0]}% ${
    100 - valuesRounded[0]
  }% ${valuesRounded[3]}% ${100 - valuesRounded[3]}% / ${valuesRounded[2]}% ${
    valuesRounded[1]
  }% ${100 - valuesRounded[1]}% ${100 - valuesRounded[2]}%"`;

  navigator.clipboard.writeText(copyCode);
  alert("Texto copiado: " + copyCode);
}

function copyText() {
  const copyText = `${valuesRounded[0]}% ${100 - valuesRounded[0]}% ${
    valuesRounded[3]
  }% ${100 - valuesRounded[3]}% / ${valuesRounded[2]}% ${valuesRounded[1]}% ${
    100 - valuesRounded[1]
  }% ${100 - valuesRounded[2]}%`;

  navigator.clipboard.writeText(copyText);
  alert("copied text: " + copyText);
}

function handleClickCopy() {
  copyCodeButton.addEventListener("click", () => copyCode());
  copyTextButton.addEventListener("click", () => copyText());
}
