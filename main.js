function viewMore(hiddenID, buttonID) {
  if (document.getElementById(hiddenID).style.display === "none") {
    document.getElementById(hiddenID).style.display = "block";
    document.getElementById(buttonID).innerHTML = "View less";
    document.getElementById(buttonID).style.backgroundColor = "lightgrey";
    document.getElementById(buttonID).style.color = "black";
  } else {
    document.getElementById(hiddenID).style.display = "none";
    document.getElementById(buttonID).innerHTML = "View more";
    document.getElementById(buttonID).style.backgroundColor = "#ff4000";
    document.getElementById(buttonID).style.color = "#ffeccc";
  }
}

// function unfold(hiddenID) {
//   alert("helloww");
//   if (document.getElementById(hiddenID).style.display === "none") {
//     document.getElementById(hiddenID).style.display = "block";
//   } else {
//     document.getElementById(hiddenID).style.display = "hidden";
//   }
// }
