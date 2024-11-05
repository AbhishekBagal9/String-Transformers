let inputValue =document.querySelector("#input");
let uppercase =document.querySelector("#upperCase span");
let camelcase =document.querySelector("#camelCase span");
let lowercase =document.querySelector("#lowercase span");
let pascelcase =document.querySelector("#pascelCase span");
let snakecase =document.querySelector("#snakeCase span");
let kebabcase =document.querySelector("#kebabcase span");
let trimmm =document.querySelector("#trim span");

inputValue.addEventListener("input",function(){
let input = inputValue.value;
lowercase.innerText = input.toLowerCase();
uppercase.innerText = input.toUpperCase();
camelcase.innerText = camelcasee(input);
pascelcase.innerText =pascelcasee(input);
snakecase.innerText=snakecasee(input);
kebabcase.innerText=kebabcasee(input);
trimmm.innerText=trimm(input);

function camelcasee(input){
    let lowercasestring = input.toLowerCase().trim();
    let camelcaseString = "";
    for(let i=0;i<lowercasestring.length;i++){
        if(lowercasestring[i-1] === " "){
         camelcaseString+=lowercasestring[i].toUpperCase().trim();
        }
        else {
            camelcaseString+=lowercasestring[i].trim();
        }
    }
    return camelcaseString; 
}
function pascelcasee(input){
    let lowercasestring = input.toLowerCase().trim();
    console.log(lowercasestring)
    let pascelcaseString = "";
    for(let i=0;i<lowercasestring.length;i++){
        if( i===0 || lowercasestring[i-1] === " "){
         pascelcaseString+=lowercasestring[i].toUpperCase().trim();
        }
        else {
            pascelcaseString+=lowercasestring[i].trim();
        }
    }
    return pascelcaseString; 
}
function snakecasee(input){
    let lowercasestring = input.toLowerCase();
    let snakecaseString = "";
    for(let i=0;i<lowercasestring.length;i++){
        if(lowercasestring[i] === " "){
         snakecaseString+=lowercasestring[i].replace(" ","_");
        }
        else {
            snakecaseString+=lowercasestring[i];
        }
    }
    return snakecaseString; 
}
function kebabcasee(input){
    let lowercasestring = input.toLowerCase().trim();
    let kebabcaseString = "";
    for(let i=0;i<lowercasestring.length;i++){
        if(lowercasestring[i] === " "){
            kebabcaseString+=lowercasestring[i].replace(" ","-").trim();
        }
        else {
            kebabcaseString+=lowercasestring[i].trim();
        }
    }
    return kebabcaseString; 
}
function trimm(input){
    let trimcaseString =""; 
    for(let i=0;i<input.length;i++){
        if(input[i] ===" "){
            trimcaseString += input[i].trim();
        }
        else{
            trimcaseString +=input[i];
        }
    }
    return trimcaseString;
}
})


