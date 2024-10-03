
// RANDOM color;
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
console.log(randomColor());


let intervalId;
const changeColorEverySec = function(){
    intervalId = setInterval(changeColor, 1000);
}
const stopColor = function(){
    clearInterval(intervalId);
}

const changeColor = function(){document.body.style.backgroundColor = randomColor()}
document.querySelector('#start').addEventListener('click', changeColorEverySec)
document.querySelector('#stop').addEventListener('click', stopColor)

