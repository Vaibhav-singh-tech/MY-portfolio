var tablinks = document.getElementsByClassName("tab-links");
var tabconts = document.getElementsByClassName("tab-cont");

function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(tabcont of tabconts){
    tabcont.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}