const convert = document.getElementById("convert");
const reset = document.getElementById("reset");

const mapping = {
  "A": "•⁃",
  "B": "⁃•••",
  "C": "⁃•⁃•",
  "D": "⁃••",
  "E": "•",
  "F": "••⁃•",
  "G": "⁃⁃•",
  "H": "••••",
  "I": "••",
  "J": "•⁃⁃⁃",
  "K": "⁃•⁃",
  "L": "•⁃••",
  "M": "⁃⁃",
  "N": "⁃•",
  "O": "⁃⁃⁃",
  "P": "•⁃⁃•",
  "Q": "⁃⁃•⁃",
  "R": "•⁃•",
  "S": "•••",
  "T": "⁃",
  "U": "••⁃",
  "V": "•••⁃",
  "W": "•⁃⁃",
  "X": "⁃••⁃",
  "Y": "⁃•⁃⁃",
  "Z": "⁃⁃••",
  "1": "•⁃⁃⁃⁃",
  "2": "••⁃⁃⁃",
  "3": "•••⁃⁃",
  "4": "••••⁃",
  "5": "•••••",
  "6": "⁃••••",
  "7": "⁃⁃•••",
  "8": "⁃⁃⁃••",
  "9": "⁃⁃⁃⁃•",
  "0": "⁃⁃⁃⁃⁃",
  " ": "/"
};

text.oninput = function() {
  let text = document.getElementById("text").value
  text = text.toUpperCase();
  let array1 = text.split("");
  let array2 = array1.map(x => {
    if (mapping[x]) {
      return mapping[x];
    } else {
      return x;
    }
  });
  let code = array2.join(" ");
  document.getElementById("code").innerText = code;
  localStorage.setItem("text", text);
  localStorage.setItem("code", code);
};

reset.onclick = function() {
  text.value = "";
  code.innerText = "";
  text.focus();
}

window.onload = function() {
  text.value = localStorage.getItem("text");
  code.innerText = localStorage.getItem("code");
  text.focus();
}
