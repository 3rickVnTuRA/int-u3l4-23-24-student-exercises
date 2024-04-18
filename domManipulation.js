// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {

myName.innerHTML="My name is Erick";
myHobby.innerHTML= "I like to draw";
myLocation.innerHTML= "I live in New York";
})



// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.
image1Button.addEventListener("click", function(){
image.src= "https://www.syfy.com/sites/syfy/files/styles/scale_1280/public/2023/01/dk.jpg";
})
image2Button.addEventListener("click", function(){
  image.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdy0PghYp8V3NRX6y4Srz6fW-J6t46pXQZTuT-dOL4g&s";
})

// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.
contentButton.addEventListener("mouseover", function(){
  contentButton.style.backgroundColor="red"
})
  contentButton.addEventListener("mouseout", function(){
    contentButton.style.backgroundColor="green"
})