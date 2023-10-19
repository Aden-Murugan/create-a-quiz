document.getElementById("btn").addEventListener("click", btnClicked);
//function
function btnClicked() {
  //let
  let q1 = document.getElementById("q1-in").value.toLowerCase();
  let q2 = document.getElementById("q2-in").value.toLowerCase();
  let q3 = document.getElementById("q3-in").value.toLowerCase();
  let q4 = document.getElementById("q4-in").value.toLowerCase();
  let num = 0;
  //if
  if (q1 === "acheron") {
    document.getElementById("q1-out").innerHTML = `Correct`;
    num++;
    document.getElementById("q1-out").style.color = "green";
  } else {
    document.getElementById("q1-out").innerHTML = `Incorrect`;
    document.getElementById("q1-out").style.color = "red";
  }
  if (q2 === "castling" || q2 === "castle") {
    document.getElementById("q2-out").innerHTML = `Correct`;
    num++;
    document.getElementById("q2-out").style.color = "green";
  } else {
    document.getElementById("q2-out").innerHTML = `Incorrect`;
    document.getElementById("q2-out").style.color = "red";
  }
  if (q3 === "murder" || q3 === "a murder") {
    document.getElementById("q3-out").innerHTML = `Correct`;
    num++;
    document.getElementById("q3-out").style.color = "green";
  } else {
    document.getElementById("q3-out").innerHTML = `Incorrect`;
    document.getElementById("q3-out").style.color = "red";
  }
  if (q4 === "729") {
    document.getElementById("q4-out").innerHTML = `Correct`;
    num++;
    document.getElementById("q4-out").style.color = "green";
  } else {
    document.getElementById("q4-out").innerHTML = `Incorrect`;
    document.getElementById("q4-out").style.color = "red";
  }
  //num
  document.getElementById("qscore-out").innerHTML = num;
  //back to if
  if (num === 0 || num === 1) {
    document.getElementById("congrats").innerHTML = `Try Again`;
  } else if (num === 2) {
    document.getElementById("congrats").innerHTML = `Decent`;
  } else if (num === 3) {
    document.getElementById("congrats").innerHTML = `Pretty Good!`;
  } else {
    document.getElementById("congrats").innerHTML = `Amazing!`;
  }
  //more num lol
  document.getElementById("pctg").innerHTML = (num / 4) * 100;
}
