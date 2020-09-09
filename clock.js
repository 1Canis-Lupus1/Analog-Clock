// console.log("JS Linked ");

setInterval(()=>{
    d=new Date();
    hr=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();

    // Formulae for rotation of Hour, Minute and Second hand: 
    hRotation= 30*hr+ min/2;
    mRotation= 6*min;
    sRotation= 6*sec;

    //Transforming the hands according to formulae:
    hour.style.transform= `rotate(${hRotation}deg)`;
    minute.style.transform= `rotate(${mRotation}deg)`;
    second.style.transform= `rotate(${sRotation}deg)`;
}, 1000)