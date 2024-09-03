const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = "Please give valid Height";
    }
    if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = "Please give valid Weight";
    }
    else{
        const Calculation = weight * 10000 /(height * height)
        let roundedNumber = Calculation.toFixed(1);
        result.innerHTML = `<span>${roundedNumber}</span>`;
    }    
});