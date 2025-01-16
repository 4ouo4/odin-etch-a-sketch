
//16x16 Div Grid Generation Project
    //Loop
        //Create Div
        //Apply Flexbox
        //Borders & Margins = Zero

    //After Grid Creation
        //Mouse Listener - Hover
            //Change Div's Background Color
                //After Leaving, Color stays with delay
        //EXTRA CREDIT
            //Click = Ripple color
            //Double Click = Change Color (include Rainbow, user inputed photo?)
            //Painting Mode Button: Progressive darkening/Painting w CSS opacity

    //Next Objective: Grid Size Selection Button
        //Grid should be in a space of 960px wide
            //Grid Limit: 100
        //Use prompt & Allow user to enter a number

    //Run Program/Function


//16x16 Div Grid Generation
function createGrid(size) {
    const container = document.querySelector("#grid-container");

    if (container) {
        container.innerHTML = ""; //Clears existing grid
        container.style.display = "flex";
        container.style.flexWrap = "wrap";
        container.style.width = "960px";
        container.style.height = "960px";

        for (let i = 0; i < (size * size); i++) {
            const cell = document.createElement("div");
            cell.style.width = `${100/size}%`;
            cell.style.height = `${100/size}%`; //Adjust as needed
            cell.style.boxSizing = "border-box";
            cell.style.border = "1px solid black";
            cell.style.margin = "0";
            // cell.style.backgroundColor = "black";
            container.appendChild(cell);
        }
    } else {
        console.error("Container element with id 'grid-container' not found!");
    }
}

createGrid(16);


//Color Selections
const colorOptions = document.querySelectorAll(".color-select");

colorOptions.forEach(colorOption => {

    const currentColor = colorOption; // Capture the colorOption
    currentColor.style.backgroundColor = currentColor.dataset.color; // Use currentColor

    currentColor.addEventListener('click', function() {
        const color = currentColor.dataset.color; // Use currentColor
        playSketch(color);
        console.log(`Color ${color} has been selected!`);
    });

    // document.body.addEventListener('wheel', (event) => {
    //     event.preventDefault(); //Prevent page scrolling

    //     const targetElement = event.target; //Get the element that triggered the event

    //     if (targetElement.classList.contains('color-select')) {
    //         const colorIndex = Array.prototype.indexOf.call(colorOptions, currentColor);

    //         if (event.deltaY > 0) {
    //             //Scroll down selects the next color
    //             const nextIndex = (colorIndex + 1) % colorOptions.length;
    //             selectColor(colorOptions[nextIndex]);
    //         } else {
    //             //Scroll up selects the previous color
    //             const prevIndex = (colorIndex - 1 + colorOptions.length) % colorOptions.length;
    //             selectColor(colorOptions[prevIndex]);
    //         }
    //     }

    //     function selectColor(newColorElement) {
    //         const newColor = newColorElement;
    //         const color = newColor.dataset.color;

    //         playSketch(color);
    //         console.log(`Color ${color} has been selected!`);
    //     }
        
    // });
});


//Play Game
const cells = document.querySelectorAll('#grid-container div'); // Select all divs inside #grid-container

function playSketch(color) {
    cells.forEach(cell => {
        let isMouseOver = false; //Track mouseover state

        
        cell.addEventListener('mouseover', () => {
            isMouseOver = true;
            cell.style.backgroundColor = color; // Change to the desired color
        });

        cell.addEventListener('mouseout', () => {
            isMouseOver = false;
            setTimeout(() => {
                if (!isMouseOver) { //Only change color if mouse is still out
                    cell.style.backgroundColor = 'white';
                }
            }, 1000); // 1000 milliseconds = 1 second
        });
    });
}


//Play Rainbow
const colorRainbow = document.querySelector('#color-rainbow');
colorRainbow.addEventListener('click', function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'black'];
    let colorIndex = Math.floor(Math.random() * colors.length);
    let color = colors[colorIndex];

    playSketch(color);
    console.log(`RAINBOW SELECTED. Color played: ${color}`);
});

function playRainbow() {
    
}