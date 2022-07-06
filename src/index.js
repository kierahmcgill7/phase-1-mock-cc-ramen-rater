// write your code here


const ramenMenu = document.getElementById("ramen-menu");

fetch("http://localhost:3000")
.then(response => response.json())
.then(ramenObject => {
    ramenObject.forEach(addRamen);
})

function addRamen(ramen){
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;



    ramenImage.addEventListener("click", () => {
        displayDetails(ramen);
    })

    ramenMenu.append(ramenImage);
}

function displayDetails(ramen){

    const image = document.querySelector(".detail-image")
    image.src = ramen.image;
    
}