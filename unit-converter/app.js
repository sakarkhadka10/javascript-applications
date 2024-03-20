const homeIndex = document.getElementById('home-index');

homeIndex.addEventListener('click', (e)=>{
    e.preventDefault();

    window.location.href = '/index.html'
})


const unitNumber = document.getElementById('unit-number');
const cmConverter = document.getElementById('cm-converter');
const mConverter = document.getElementById('m-converter');
const errorMessage = document.getElementById('error-message');
const resultMessage = document.getElementById('result-message');


cmConverter.addEventListener('click', ()=>{
    const unitValue = unitNumber.value;
    if(!unitValue){
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';

        const cm = unitValue * 100;
        resultMessage.innerText = `${unitValue}M = ${cm}CM`;
    }
});

mConverter.addEventListener('click', ()=>{
    const unitValue = unitNumber.value;
    if(!unitValue){
        errorMessage.style.display = 'block';
    }else{
        errorMessage.style.display = 'none';

        const m = unitValue / 100;
        resultMessage.innerText = `${unitValue}CM = ${m}M`;
    }
});

