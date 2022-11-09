let getStyle = document.getElementById("style");

const changeModeButton = document.getElementById("change_mode_button");
const bntCheck = document.getElementById("change_btn_check");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

bntCheck.addEventListener('mouseover', (event) =>{
    if(getStyle.getAttribute("href") == "third_lab_light.css"){
        sun.classList.add("sun");
    }
    else{
        moon.classList.add("moon");
    }
})

bntCheck.addEventListener('mouseleave', (event) =>{
    if(bntCheck.className =="move_to_left" || bntCheck.className !="move_to_right"){
        sun.classList.remove("sun");
    }
    if(bntCheck.className != "move_to_left"){
        moon.classList.remove("moon");
    }
})



changeModeButton.onclick = function(){
    if(getStyle.getAttribute("href") == "third_lab_light.css"){
        getStyle.href = "third_lab_dark.css";
        
        bntCheck.classList.add("move_to_right");
        bntCheck.classList.remove("move_to_left");
        
    }
    else{
        getStyle.href = "third_lab_light.css";

        bntCheck.classList.add("move_to_left");
        bntCheck.classList.remove("move_to_right");
    }
}


const inputSearch = document.getElementById("search_input");
const searchIcon = document.getElementById("search");
const preheader = document.getElementById("pre_header_nav");

searchIcon.onclick = function(){
    if(inputSearch.className == "search_input"){
        preheader.classList.remove("pre_header_navigation");
        preheader.classList.add("pre_header_nav_search");
        inputSearch.classList.remove("search_input");
        inputSearch.classList.add("search_input_active");
    }
    else{
        preheader.classList.remove("pre_header_nav_search");//pre_header_navigation
        preheader.classList.add("pre_header_navigation");
        inputSearch.classList.remove("search_input_active");
        inputSearch.classList.add("search_input");
    }
}



const logInLink = document.getElementById("logIn_link");
const logInForm = document.getElementById("log_in_pop_up");
const cansel = document.getElementById("cancel");

const registerLink = document.getElementById("register_link");
const registerForm = document.getElementById("register");
const cansel1 = document.getElementById("cancel1");


logInLink.onclick = function(){
    if(logInForm.className == "logIn"){
        logInForm.classList.add("log_in_visible");
        logInForm.classList.remove("logIn");
    }
}



cansel.onclick = function(){
    logInForm.classList.remove("log_in_visible");
    logInForm.classList.add('logIn');
}

registerLink.onclick = function(){
    if(registerForm.className == "logIn"){
        registerForm.classList.add("log_in_visible");
        registerForm.classList.remove("logIn");
    }
}

cansel1.onclick = function(){
    registerForm.classList.remove("log_in_visible");
    registerForm.classList.add('logIn');
}

const showPass = document.getElementById("show_pass");
const passwordInput = document.getElementById("pass");



showPass.onclick = function(){
    if(showPass.classList.contains("uil-unlock")){
        showPass.classList.remove("uil-unlock");
        showPass.classList.add("uil-lock");
        passwordInput.setAttribute("type", "text");
    }
    else{
        showPass.classList.remove("uil-lock");
        showPass.classList.add("uil-unlock");
        passwordInput.setAttribute("type", "password");
    }
}