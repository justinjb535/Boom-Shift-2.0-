const popupButton = document.getElementById("popup-bttn");
const popupPage = document.getElementById("popup-page");
const rN = document.getElementById("redNote");
 
 popupButton.addEventListener("click",()=>{
   popupPage.style.display=
   popupPage.style.display=== "block"?
   "none":"block";
 });
 
 document.addEventListener("click",(event)=>{
   if(!
   popupButton.contains(event.target)
   &&!
   popupPage.contains(event.target))
   {
     popupPage.style.display="none";
   }
 });
 const more = document.getElementById("more");
const sL = document.getElementById("secList");

more.addEventListener('click',()=>{
  sL.style.display= "";
  sL.styledisplay=== "block"?                "none":"block";
});
document.addEventListener('click',(event)=>{
  if(!more.contains(event.target)
  &&!
  sL.contains(event.target)){
    sL.style.display="none";
  }
});
 const activateS = document.getElementById("ActivateS");
 const search = document.getElementById("searchInput");
const fi = document.getElementById('filters');
 const Dot = document.getElementById("dot");
 const cancel = document.getElementById("cancel");
 
 activateS.addEventListener('click',()=>{
   search.style.display="block";
   cancel.style.display="block";
   Dot.style.display="none";
  fi.style.display="block";
 });
 
 cancel.addEventListener('click',()=>{
   search.style.display="none";
   Dot.style.display="block";
   cancel.style.display="none";
   suggestionContainer.style.display="none";
   fi.style.display="none";
 });
 
function openLicense(){
  alert('taking you to license page');
  window.location.href="mylicense.html";
}
 
// Data source
const suggestions = ["toyota ", "chevrolet ", "nissan ","porsche ","audi ","VW ","volks wegan ","discovery ","land rover "];

// Get the input field and suggestion container

const suggestionContainer = document.getElementById("suggestions");

// Add event listener to input field
search.addEventListener("input", (e) => {
  const inputValue = e.target.value.toLowerCase();
  if (inputValue.length > 0 ){
  suggestionContainer.style.display="block";
  }else{
    suggestionContainer.style.display="none";

  }
  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(inputValue)
  );

  // Display suggestions
  suggestionContainer.innerHTML = "";
  filteredSuggestions.forEach((suggestion) => {
    const suggestionElement = document.createElement("div");
    suggestionElement.textContent = suggestion;
    suggestionElement.addEventListener("click", () => {
      search.value = suggestion;
      suggestionContainer.innerHTML ="";
      suggestionContainer.style.display="none";
    });
    suggestionContainer.appendChild(suggestionElement);
  });
});
 const today = new 
 Date().toDateString();//e.g wednesday 22 Oct
 const lastVisit = localStorage.getItem("last welcome");
 if (lastVisit!== today){
   alert("Welcome To Boom Shift");
   localStorage.setItem("last welcome",today);
 }
 function shuffleArray(array){
   for (let i = array.length -1;i > 0;i--){
     const j = 
     Math.floor(Math.random() * (i+1));
     [array[i], array[j]] = [array[j],array[i]];
   }
 }
 let posts = JSON.parse(localStorage.getItem("posts")) || [];
   shuffleArray(posts);
   
let productList = document.getElementById('product-list');

posts.forEach((product,index) => {
  let div = document.createElement('div');
  div.className = "post";
  div.innerHTML = `  <h4>${product.message}</h4>
   <div class="carousel"><img src="${product.image}" alt="${product.message}" style="max-width:100%; height:auto; border-radius:15%;" class='carousel-img' onclick='viewImage(this.src)'/></div>
    <p><strong>$ ${product.price}</strong></p>
    <button class="Bbtn" onclick="getMyData('${product.message}')">Book</button>
   <button class="Sbtn" data-index="${index}" >Show More Info</button>
   <div class="more-info" id="info-${index}" style="display:none; margin-top:10px; margin-bottom:20%;z-index:1000;"><p><strong>Description:</strong>${product.Descp|| "No description available."}</p>
   <p><strong>Transmition:</strong>${product.transM}
   <p><strong>Year Model:</strong>${product.yearModel}</p>
   <p><strong>Mileage:</strong>${product.mileage}</p>
   <p><strong>Condition:</strong>${product.cond}</p>
   <p><strong>Location:</strong>${product.location}</p>
   <p><strong>Contacts:</strong>${product.callNumber}</p>
  </div>
  `;
 
  div.addEventListener('dblclick',()=>{
    addToWishlist(product);
  });
  
  productList.appendChild(div);
  
  const myWishlist = document.getElementById('myWishlist');
function addToWishlist(product,index) {
   //console.log(countBe); 
  let wishlistOne = JSON.parse(localStorage.getItem('wishlistOne')) || [];
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2)
  wishlistOne.push({id,...product});
  localStorage.setItem('wishlistOne', JSON.stringify(wishlistOne));
  
  let nT = document.getElementById("numberText");
   nT.innerHTML =`
   <div id="message">Added <em><strong>${product.message}</strong></em> to Wishlist <br> you can go to wishlist and double tap to remove product </div>`;
 console.log("message received ")

let mSS = document.getElementById("message");
   setTimeout(()=>{
       mSS.style.display = "none";
   },4890) 

 // displayWishlist();
}
function updateCounter(elementId,count){
  let counterElement = document.getElementById(elementId);
  counterElement.innerText = count; 
}

function displaymyWishlist() {
  myWishlist.innerHTML = ''; // clear the wishlist container
  let wishlistOne = JSON.parse(localStorage.getItem('wishlistOne')) || [];
  wishlistOne.forEach((product) => {
    let divOne = document.createElement('div');
    divOne.className = "wishlistPost";
    divOne.innerHTML = `
      <div class="carousel1"><img src="${product.image}" alt="${product.message}" style="max-width:100%; height:auto; border-radius:15%;" class='carousel-img' onclick='viewImage(this.src)'/></div>
    <div id="wName">
      <h4>${product.message}</h4>
      <p id="Wprice"><strong>$ ${product.price}</strong></p>
    </div>
    `; 
    
    divOne.addEventListener("dblclick",()=>{
      removeWishlist(product.id);
    });
    myWishlist.appendChild(divOne);
  });
}
 //giving products unique id 
 function removeWishlist(productId){
   let wishlistOne = JSON.parse(localStorage.getItem('wishlistOne'))||[];
      console.log("removing product", productId);
      console.log('wishlist',wishlistOne);
   wishlistOne = wishlistOne.filter(item => item.id !== productId)
   localStorage.setItem('wishlistOne', JSON.stringify(wishlistOne));
   let nT = document.getElementById("numebrText")
  // nT.innerHTML = `<p id="countdis" style="text-align:center"></p>`
 }

// Call displayWishlist on page load to display existing wishlist items
displaymyWishlist();
  

});


  document.querySelectorAll('.Sbtn').forEach(button => {
    button.addEventListener('click', () => {
      let index = button.getAttribute('data-index');
      let infoDiv = document.getElementById(`info-${index}`);
      if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
        button.textContent = "Hide Info";
} else {
        infoDiv.style.display = "none";
        button.textContent = "Show More Info";
}
});
});

function viewImage(src){
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = src ;
  modal.style.display = "flex";
  modal.onclick = ()=>{
    modal.style.display="none";
  };
}


const incompatibleScreenMessage = document.getElementById('incompatible-screen');

function checkScreenSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1024) {
    incompatibleScreenMessage.style.display = 'block';
    alert("Our Site is incompatible with your device. Use a mobile phone");
    const bod = document.querySelector("body");
    bod.style.display="none";
    
  } else {
    incompatibleScreenMessage.style.display = 'none';
  }
}

function directTo(){
  window.location.href="Terms and conditions.html"
}

console.log('hello user if you see this , that means you\'re no supposed to see this ');


function lookForMkt(){
  alert(`There's no market yet ${currentUser.name}`);
  productList.style.display = "none";
  textContent = "there is no market yet!"
}

//ripple animation for the book button
document.querySelectorAll('.Bbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    ripple.style.left = `${e.clientX - rect.left - size / 1.5}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 1.5}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 800);

  });
});
const promptMessage = document.getElementById("promptM");
const pMessage = document.getElementById("alert");
const customeAlert = document.getElementById("cPMAlert");

function showAlert(pmessage){
  pMessage.innerHTML = pmessage;
  setTimeout(()=>{
  promptMessage.style.display = 'block';
  },801);
}
//for the cancel button (alertMessage popup)
function getMyData(productMessage){
  showAlert(`Are you sure you want to book this ${productMessage}`)
  console.log('it\'s now showing  ')
}
const cNl = document.getElementById('cnl');
cnl.addEventListener('click',()=>{
  promptMessage.style.display = "none";
});

// Tool-Tip code 
if(!localStorage.getItem('tooltip2Shown')){
  document.getElementById('toolTip').style.display="block";
  localStorage.setItem('tooltip2Shown',true);
}

// My shake to refresh code 
window.addEventListener('devicemotion', (event) => {
  const acceleration = event.acceleration;
  const x = acceleration.x;
  const y = acceleration.y;
  const z = acceleration.z;

  // Process motion data
  if (Math.abs(x) > 50 || Math.abs(y) > 50 || Math.abs(z) > 50) {
    // Motion detected
    console.log('Motion detected!');
    setTimeout(()=>{
   window.location.href ="index.html";
   document.getElementById('toolTip').style.display="none";
   countdis.style.display = "none";
    },500);
  }
});
const myGp = document.getElementById('my_garageP');
const myG = document.getElementById('myGarage');
const pb1 = document.getElementById('profile1');
const pageHim = document.getElementById('proPage');
const abSb = document.getElementById('abS');
const absP = document.getElementById('absContent');

myG.addEventListener('click',()=>{
  console.log('pressed')
  window.location.hash = "myGp";
  myGp.style.display = "block";
  productList.style.display = "none";
  console.log(myGp.style.display);
  pageHim.style.display = "none";
  absP.style.display = "none";
});
pb1.addEventListener('click',()=>{
  console.log('pressed');
  pageHim.style.display = "block";
  productList.style.display = "none";
  myGp.style.display = "none";
  absP.style.display = "none";
});
abSb.addEventListener('click',()=>{
  absP.style.display = "block";
  productList.style.display = "none";
  myGp.style.display = "none";
  pageHim.style.display = "none";
})
 //deleting all wishlist items
//const Mydelete = document.getElementById('delete');

/*Mydelete.addEventListener('click',()=>{
  localStorage.removeItem("wishlistOne");
  alert('removing all items , and will not be brought back');
  myWishlist.textContent = "products will be gone after you refrsh the app "

}); */

// profile code here 
let Users = JSON.parse(localStorage.getItem('bsUsers')) || [];
let currentUser = Users[Users.length - 1];

document.getElementById('name').innerText = currentUser.name;
document.getElementById('number').innerText = currentUser.pNumber;
document.getElementById('email').innerText = currentUser.email;
document.getElementById('editProfile').addEventListener('click',()=>{
  let newName = prompt('Enter your new name');
  if(newName){
    currentUser.name = newName;
    users[users.length -1 ] = currentUser = currentUser;
    localStorage.setItem('users',JSON.stringify(users));
    document.getElementById('name').innerText = newName;
  }
}) 

const profileInput = document.getElementById('profileInput');
const profilePic = document.getElementById('profilePic');

// Load saved image from localStorage on load
window.addEventListener('DOMContentLoaded', () => {
  const savedImage = localStorage.getItem('userProfilePic');
  if (savedImage) {
    profilePic.src = savedImage;
  }
});

// When user selects a new image
profileInput.addEventListener('change', () => {
  const file = profileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePic.src = e.target.result;
      localStorage.setItem('userProfilePic', e.target.result); // Save base64 to localStorage
    };
    reader.readAsDataURL(file);
  }
});
