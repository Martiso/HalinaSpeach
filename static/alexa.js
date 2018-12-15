window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


const halina = new SpeechRecognition();




window.addEventListener('click', ()=> {
    document.body.innerHTML = "Halina start";
    return halina.start();
})



halina.addEventListener('result', (event)=>{
    console.dir(event)
    console.log(event.results[0][0].transcript)
    document.body.innerHTML = event.results[0][0].transcript;
});


halina.addEventListener('end', ()=>{
    document.body.innerHTML = "Halina stop"
});
