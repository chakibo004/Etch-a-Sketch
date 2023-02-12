// Creating the grid

let Size=10;

const gridSize=document.querySelector("#gridSize");
gridSize.addEventListener("click",function(){
    Size=prompt("Enter the grid Size between 2 and 100 : ");
    if(Size > 100){
        Size=100;
    }else if(Size < 2){
        Size=2;
    }
    draw(Size)
})


function draw(Size){

    const container=document.querySelector(".container");
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${Size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${Size}, 1fr)`;


    for (let i = 0;i<Size*Size;i++){
        let div= document.createElement("div");
        div.addEventListener("mouseover",function(){
        div.classList.add("black");
        });
        container.appendChild(div);
    }
}



/*

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}*/



