const rewardsContainers = document.querySelectorAll('.rewards-container');

function animateMeter(squares) {
    squares.forEach((square, index) => {
        setTimeout(() => {
            square.classList.add('green');
        }, index * 1000);
    });

    setTimeout(() => {
        squares.forEach(square => {
            square.classList.remove('green');
        });
        animateMeter(squares);
    }, 5000);
}

rewardsContainers.forEach(container => {
    const squares = container.querySelectorAll('.square');
    animateMeter(squares);
});