let fare =  270;
let source = "BHOPAL JN";
let source_hindi = "भोपाल";
let destination = "DR AMBEDKAR NGR";
let destination_hindi = "डॉ अंबेडकर नगर";
let via = "MKC-DWX";
let adult = 3;
let child = 0;
let train = "Express";
let train_hindi = "एक्सप्रेस";
let date = "09/10/2024";
let time = "04:07";
let number = "6232625599";
let distance = "239";






// show.html
document.querySelector("#fare-1").innerHTML = fare;
document.querySelector("#source-1").innerHTML = source;
document.querySelector("#destination-1").innerHTML = destination;
document.querySelector("#via-1").innerHTML = via;
document.querySelector("#adult-1").innerHTML = adult;
document.querySelector("#child-1").innerHTML = child;
document.querySelector("#date-time-1").innerHTML = date+" "+time;
document.querySelector("#train-1").innerHTML = train;


// ticket.html 
document.querySelector("#date-1").innerHTML = date;
document.querySelector("#contact-no").innerHTML = number;
document.querySelector("#distance").innerHTML = distance;
document.querySelector("#source-hindi").innerHTML = source_hindi;
document.querySelector("#destination-hindi").innerHTML = destination_hindi;
document.querySelector("#train-hindi").innerHTML = train_hindi;
document.querySelector("#destination-2").innerHTML = destination;
