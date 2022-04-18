let box1 = document.getElementById("b1");
let box2 = document.getElementById("b2");
let box3 = document.getElementById("b3");
let box4 = document.getElementById("b4");
let box5 = document.getElementById("b5");
let box6 = document.getElementById("b6");
let box7 = document.getElementById("b7");
let box8 = document.getElementById("b8");
let box9 = document.getElementById("b9");

let name1 = prompt("Enter player 1 name").toUpperCase();
let name2 = prompt("Enter player 2 name").toUpperCase();

let player1 = document.querySelector(".p1");
let player2 = document.querySelector(".p2");

player1.innerHTML = "Player_1 => " + name1 + " :- X";
player2.innerHTML = "Player_2 => " + name2 + " :- O";

// disable all input once winner found
function disabled() {
  box1.disabled = true;
  box2.disabled = true;
  box3.disabled = true;
  box4.disabled = true;
  box5.disabled = true;
  box6.disabled = true;
  box7.disabled = true;
  box8.disabled = true;
  box9.disabled = true;
}

function valueCheck() {
  let b1Value = box1.value.toUpperCase();
  let b2Value = box2.value.toUpperCase();
  let b3Value = box3.value.toUpperCase();
  let b4Value = box4.value.toUpperCase();
  let b5Value = box5.value.toUpperCase();
  let b6Value = box6.value.toUpperCase();
  let b7Value = box7.value.toUpperCase();
  let b8Value = box8.value.toUpperCase();
  let b9Value = box9.value.toUpperCase();
  let print = document.querySelector(".print");

  disable1();
  disable2();
  disable3();
  disable4();
  disable5();
  disable6();
  disable7();
  disable8();
  disable9();

  // winners checking
  if (b1Value == "X" && b2Value == "X" && b3Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box1.classList.add("WIN");
    box2.classList.add("WIN");
    box3.classList.add("WIN");
    disabled();
  } else if (b4Value == "X" && b5Value == "X" && b6Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box4.classList.add("WIN");
    box5.classList.add("WIN");
    box6.classList.add("WIN");
    disabled();
  } else if (b7Value == "X" && b8Value == "X" && b9Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box7.classList.add("WIN");
    box8.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  } else if (b1Value == "X" && b5Value == "X" && b9Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box1.classList.add("WIN");
    box5.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  } else if (b3Value == "X" && b5Value == "X" && b7Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box3.classList.add("WIN");
    box5.classList.add("WIN");
    box7.classList.add("WIN");
    disabled();
  } else if (b1Value == "X" && b4Value == "X" && b7Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box1.classList.add("WIN");
    box4.classList.add("WIN");
    box7.classList.add("WIN");
    disabled();
  } else if (b2Value == "X" && b5Value == "X" && b8Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box2.classList.add("WIN");
    box5.classList.add("WIN");
    box8.classList.add("WIN");
    disabled();
  } else if (b3Value == "X" && b6Value == "X" && b9Value == "X") {
    print.innerHTML = "<h4> " + name1 + " WIN </h4>";
    box3.classList.add("WIN");
    box6.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  } else if (b1Value == "O" && b2Value == "O" && b3Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box1.classList.add("WIN");
    box2.classList.add("WIN");
    box3.classList.add("WIN");
    disabled();
  } else if (b4Value == "O" && b5Value == "O" && b6Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box4.classList.add("WIN");
    box5.classList.add("WIN");
    box6.classList.add("WIN");
    disabled();
  } else if (b7Value == "O" && b8Value == "O" && b9Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box7.classList.add("WIN");
    box8.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  } else if (b1Value == "O" && b5Value == "O" && b9Value == "O") {
    print.innerHTML = "<h4>" + name2 + " WIN </h4>";
    box1.classList.add("WIN");
    box5.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  } else if (b3Value == "O" && b5Value == "O" && b7Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box3.classList.add("WIN");
    box5.classList.add("WIN");
    box7.classList.add("WIN");
    disabled();
  } else if (b1Value == "O" && b4Value == "O" && b7Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box1.classList.add("WIN");
    box4.classList.add("WIN");
    box7.classList.add("WIN");
    disabled();
  } else if (b2Value == "O" && b5Value == "O" && b8Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box2.classList.add("WIN");
    box5.classList.add("WIN");
    box8.classList.add("WIN");
    disabled();
  } else if (b3Value == "O" && b6Value == "O" && b9Value == "O") {
    print.innerHTML = "<h4> " + name2 + " WIN </h4>";
    box3.classList.add("WIN");
    box6.classList.add("WIN");
    box9.classList.add("WIN");
    disabled();
  }
  // Checking of Player 0 finish
  // Here, Checking about Tie
  else if (
    (b1Value == "X" || b1Value == "O") &&
    (b2Value == "X" || b2Value == "O") &&
    (b3Value == "X" || b3Value == "O") &&
    (b4Value == "X" || b4Value == "O") &&
    (b5Value == "X" || b5Value == "O") &&
    (b6Value == "X" || b6Value == "O") &&
    (b7Value == "X" || b7Value == "O") &&
    (b8Value == "X" || b8Value == "O") &&
    (b9Value == "X" || b9Value == "O")
  ) {
    print.innerHTML = "<h4>Match Tie</h4>";
    disabled();
  }
}

// reset game function
function reset() {
  location.reload();
  b1Value = "";
  b2Value = "";
  b3Value = "";
  b4Value = "";
  b5Value = "";
  b6Value = "";
  b7Value = "";
  b8Value = "";
  b9Value = "";
}


/// functions to disable input once value is entered to them
function disable1() {
  if (box1.value.toUpperCase() == "X" || box1.value.toUpperCase() == "O") {
    box1.disabled = true;

    ;
  } else {
    box1.disabled = false;

  }
}

function disable2() {
  if (box2.value.toUpperCase() == "X" || box2.value.toUpperCase() == "O") {
    box2.disabled = true;

    ;
  } else {
    box2.disabled = false;

  }
}
function disable3() {
  if (box3.value.toUpperCase() == "X" || box3.value.toUpperCase() == "O") {
    box3.disabled = true;


  } else {
    box3.disabled = false;

  }
}
function disable4() {
  if (box4.value.toUpperCase() == "X" || box4.value.toUpperCase() == "O") {
    box4.disabled = true;


  } else {
    box4.disabled = false;

  }
}
function disable5() {
  if (box5.value.toUpperCase() == "X" || box5.value.toUpperCase() == "O") {
    box5.disabled = true;


  } else {
    box5.disabled = false;

  }
}
function disable6() {
  if (box6.value.toUpperCase() == "X" || box6.value.toUpperCase() == "O") {
    box6.disabled = true;


  } else {
    box6.disabled = false;

  }
}
function disable7() {
  if (box7.value.toUpperCase() == "X" || box7.value.toUpperCase() == "O") {
    box7.disabled = true;


  } else {
    box7.disabled = false;

  }
}
function disable8() {
  if (box8.value.toUpperCase() == "X" || box8.value.toUpperCase() == "O") {
    box8.disabled = true;


  } else {
    box8.disabled = false;

  }
}
function disable9() {
  if (box9.value.toUpperCase() == "X" || box9.value.toUpperCase() == "O") {
    box9.disabled = true;


  } else {
    box9.disabled = false;

  }
}

