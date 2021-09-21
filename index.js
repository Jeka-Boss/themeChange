
lightTheme();
r = true;

function lightTheme(){
    document.querySelector("body").classList.replace("dark","light");
    document.querySelector(".sp1").innerHTML = "light"
    document.querySelector(".sp2").innerHTML = "dark"

     for(i = 0; i < document.querySelectorAll(".hello").length; i++){
        document.querySelectorAll(".hello")[i].classList.replace("dark-mode","light-mode");
     }
    document.querySelector(".plain-text").classList.replace("dark-mode-plain","light-mode-plain");
    document.querySelector("button").classList.replace("btn-dark","btn-light");
    r = true;

}



function darkTheme(){
    document.querySelector("body").classList.replace("light","dark");
    document.querySelector(".sp1").innerHTML = "dark"
    document.querySelector(".sp2").innerHTML = "light"
     for(i = 0; i < document.querySelectorAll(".hello").length; i++){
        document.querySelectorAll(".hello")[i].classList.replace("light-mode","dark-mode");
     }
    document.querySelector(".plain-text").classList.replace("light-mode-plain","dark-mode-plain");
    document.querySelector("button").classList.replace("btn-light","btn-dark");
    r = false;

}


 function buttonChangeTheme(){
if(r == true){
    darkTheme();
}else if(r == false){
    lightTheme();
}

}


document.querySelector("button").addEventListener("click", buttonChangeTheme);

