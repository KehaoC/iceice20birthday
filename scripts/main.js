// If you want to do something, select it first.
// const myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world!"

// let myVariable = "IceIce";

// When clicking ice ice
// With a anoymous function being used
// document.querySelector("#two-people").addEventListener(
//     "click",
//     function () {
//         alert("Don't poke my bb!");
//     }
// )
// document.querySelector("#cake").addEventListener(
//     "click",
//     () => {
//         alert("cake is ok, but don't eat it~");
//     }
// )

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/cake.png") {
        myImage.setAttribute("src", "images/image.png");
    } else {
        myImage.setAttribute("src", "images/cake.png");
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hi ${myName}!, let us happy birthday to icecie!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi ${storedName}!, let us happy birthday to icecie!`;
}

myButton.onclick = () => {
    setUserName();
}