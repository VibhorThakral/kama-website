let colorSelect = document.getElementById("bg-picker");
colorSelect.addEventListener("change", function() {
  let selectedColor = colorSelect.value;
  document.documentElement.style.setProperty("--selected-color", "rgb(" + selectedColor + ")");
});
