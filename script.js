// Creating the grid

let Size=4;

//Initializing with 16 elements

draw(4);

// Changing grid SIZE

const gridSize=document.querySelector("#gridSize");
gridSize.addEventListener("click",function(){
    Size=prompt("Enter the grid Size between 2 and 100 : ");
    if(Size > 100){
        Size=100;
    }else if(Size < 2){
        Size=2;
    }
    draw(Size);
})

// Function to draw the grid

function draw(Size){

    const container=document.querySelector(".container");
    
    container.style.gridTemplateColumns = `repeat(${Size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${Size}, 1fr)`;
    

    for (let i = 0;i<Size*Size;i++){
        let div= document.createElement("div");

        div.addEventListener("mouseover",function(){
            div.style.backgroundColor = "black";
        });

        container.appendChild(div);
    }
}


// GOMME ( ERASER )

const Eraser=document.querySelector(".Eraser");

Eraser.addEventListener("click",function (){
    const divs = container.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "white";
        });
    })
});


// color picker

const container = document.querySelector(".container");
const colorInput = document.querySelector("input[type='color']");

colorInput.addEventListener("input", function() {
    const color = this.value;

    const divs = container.querySelectorAll("div");
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = color;
        });
    });
});

// Randomize PICTURE

const Randomize = document.querySelector(".RandomColor");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Randomize.addEventListener("click", function() {
  const divs = document.querySelectorAll(".container div");
  divs.forEach(div => {
    div.style.backgroundColor = getRandomColor();
  });
});

// Reset

const Reset = document.querySelector(".Reset");

Reset.addEventListener("click", function() {
  const divs = document.querySelectorAll(".container div");
  divs.forEach(div => {
    div.style.backgroundColor = "white";
  });
});

// Randomizer
const Random = document.querySelector(".Randomizer");
Random.addEventListener("click", function() {
    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = getRandomColor();
        });
    });
});
  





