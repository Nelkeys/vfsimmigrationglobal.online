// for the first function (USA)
function openPopup() {
    document.getElementById("passwordOverlay").style.display = "flex";
}

function cancelPopup() {
    document.getElementById("passwordOverlay").style.display = "none";
}

function checkPassword() {
    const enteredPassword = document.getElementById("passwordInput").value;
    // Replace with the actual password needed to open the link
    const correctPassword = "abcde12345";

    if (enteredPassword === correctPassword) {
        // Redirect to the link when the correct password is entered
        window.location.href = "MD-Arif.html"; 
    } else {
        alert("Incorrect password. Try again.");
    }
}
// end of the USA function 




// functions for canada work permit
function openPopup2() {
  document.getElementById("passwordOverlay2").style.display = "flex";
}

function cancelPopup2() {
  document.getElementById("passwordOverlay2").style.display = "none";
}

function checkPassword2() {

    const enteredPassword = document.getElementById("passwordInput2").value;

    // Replace with the actual password needed to open the link
    const correctPassword = "abcde12345";

    if (enteredPassword === correctPassword) {
        // Redirect to the link when the correct password is entered
        window.location.href = "canadaVisa-lmia.html"; 
    } else {
        alert("Incorrect password. Try again.");
    }
}



//function to open LMIA page
function openPopup3() {

  document.getElementById("passwordOverlay3").style.display = "flex";

}

function cancelPopup3() {
  document.getElementById("passwordOverlay3").style.display = "none";
}

function checkPassword3() {

    const enteredPassword = document.getElementById("passwordInput3").value;

    // Replace with the actual password needed to open the link
    const correctPassword = "abcde12345";

    if (enteredPassword === correctPassword) {
        // Redirect to the link when the correct password is entered
        window.location.href = "netherlandVisa-wp.html"; 
    } else {
        alert("Incorrect password. Try again.");
    }
}

//sendbtn function
function downloadPdf() {
    alert("PDF is downloading!")
}


function sendBtn() {
    location.reload()
}