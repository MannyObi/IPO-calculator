//Program title
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let x1 = +document.getElementById("x1-in").value;
  let x2 = +document.getElementById("x2-in").value;
  let y1 = +document.getElementById("y1-in").value;
  let y2 = +document.getElementById("y2-in").value;

  // PROCESS
  let slope = (y2 - y1) / (x2 - x1);

  // OUTPUT
  document.getElementById("output").innerHTML = Math.round(slope);
}
