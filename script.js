
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


//Grid Generation
const button = document.querySelector('#grid-sizing');
const container = document.querySelector("#grid-container");

function gridGeneration(size) {
    for (let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.style.width = `${100/size}%`;
        cell.style.height = `${100/size}%`; //Adjust as needed
        cell.style.boxSizing = "border-box";
        cell.style.border = "1px solid black";
        cell.style.margin = "0";
        container.appendChild(cell);
    }
}

function createGrid(size) {
    if (container.children.length > 0) {
        container.innerHTML = "";
        gridGeneration(size);
    } else {
        gridGeneration(size);
    }


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
    });


    //Enable Paint Trail
    const paintButton = document.querySelector('#paint-button');
    const paintEnabledText = document.querySelector('enable-text');
    function paint() {
        cells.forEach(cell => {
            cell.addEventListener('mouseout', () => {
                isMouseOver = false;
                setTimeout(() => {
                    if (!isMouseOver) { //Only change color if mouse is still out
                        cell.style.backgroundColor = 'white';
                    }
                }, 1000); // 1000 milliseconds = 1 second
            });
        });
    };




    //Play Game
    const cells = document.querySelectorAll('#grid-container div'); // Select all divs inside #grid-container

    function playSketch(color) {
        cells.forEach(cell => {
            let isMouseOver = false; //Track mouseover state

            cell.addEventListener('mouseover', () => {
                isMouseOver = true;
                cell.style.backgroundColor = color; // Change to the desired color
            });

            paint();
        });
    }


    //Play Rainbow
    const colorRainbow = document.querySelector('#color-rainbow');
    colorRainbow.addEventListener('click', function() {
        playRainbow();
    });

    function playRainbow() {
        cells.forEach(cell => {
            const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'gray', 'black'];
            let colorIndex = Math.floor(Math.random() * colors.length);
            let color = colors[colorIndex];

            let isMouseOver = false; //Track mouseover state
            
            cell.addEventListener('mouseover', () => {
                isMouseOver = true;
                cell.style.backgroundColor = color; // Change to the desired color
            });

            paint();

            // paintButton.addEventListener('click', function() {
            //     paint();
            // });

        });
    }

    //Clear Etch-a-Sketch
    const clearButton = document.querySelector('#clear-button');
    clearButton.addEventListener('click', function() {
        cells.forEach(cell => {
            cell.style.backgroundColor = 'white';
        })
    });



};


//Grid Size Input
button.addEventListener('click', function() {
    let input = prompt("Please enter your desired grid size", "Limit is 100");
    if (input <= 100) {
        createGrid(input);
    } else {
        alert("Please enter a number under the limit of 100");
    }
})
      



