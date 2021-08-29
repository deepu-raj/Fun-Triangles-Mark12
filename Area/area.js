const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const side3 = document.querySelector("#side3");
const error = document.querySelector("#errorMsg");
const checkBtn = document.querySelector("#check-btn");
error.innerText ="";


/**function checkInputs(){
    $(".angle").each(function(){
        if ($(this).value() = ""){
            error.innerText = "Enter all the angles"
            } else {
            assessAngles()
            }
        }
    )} **/ 

function calculateArea() {
    var result=0;
    const a = Number(side1.value);
    const b = Number(side2.value);
    const c = Number(side3.value);
    var s = (a+b+c)/2;
    if (a < 0 || b < 0 || c < 0 ||
        (a + b <= c) || a + c <= b ||
                        b + c <= a){
                            error.innerText= "Invalid sides";
    } else {
    result= Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    error.innerText= "Area is equal to  " + result.toFixed(2);}
}
    
checkBtn.addEventListener("click",calculateArea);