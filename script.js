setInterval(setClock,1000);
const fetchHours = document.querySelector('[data-hours]');
const fetchMin = document.querySelector('[data-min]');
const fetchSec= document.querySelector('[data-sec]');
function setClock(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds+date.getMinutes())/60;
    const hour = (minutes+date.getHours())/12;
    console.log("This is second"+seconds+"This is min"+minutes+"This is hours"+hour)
    setRotation(fetchSec,seconds);
    setRotation(fetchMin,minutes);
    setRotation(fetchHours,hour);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();