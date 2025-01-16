const button = document.querySelector('#test-button');


function changeColors() {
    const colors = ['red', 'blue', 'green', 'pink'];
    const colorIndex = Math.floor(Math.random() * colors.length);
    let color = colors[colorIndex];

    document.body.style.backgroundColor = color;
};

button.addEventListener('click', function() {
    changeColors();
});
