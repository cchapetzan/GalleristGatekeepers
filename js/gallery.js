
function openNav() {
  document.getElementById("mySideBar").style.width = "250px"; 
}

function closeNav() {
  document.getElementById("mySideBar").style.width = "0"; 
} 

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImage");
  var imgText = document.getElementById("imageandtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}









