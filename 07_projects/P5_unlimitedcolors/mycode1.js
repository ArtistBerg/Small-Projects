// Here We will make unlimited colors
// USING:   
        

// Background // Start // Stop 
const body = document.querySelector('body')  ;
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');



// generate a random color
        const randomColor = function(){
            const hex = "0123456789ABCDEF"
            let color = '#'
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random()*16)];
            }
            return color;
        };



// Random Value
// console.log(Math.floor(Math.random()*16));
 
    // called functions
       let intervalId; 
       let count = 1;

        const startChangingColor = function () {
            if(count == 1){
        intervalId = setInterval(changeColor , 2000);
        count = null;
             } }
        const stopChangingColor = function () {
            clearInterval(intervalId);
        }
        const changeColor = function(){
        document.body.style.backgroundColor = randomColor();
        console.log('color');
        
        }

 

// event listener on buttons    
startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);        
           