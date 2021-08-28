const base = document.querySelector("#base");
const height = document.querySelector("#height");
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

function calculateHypo() {
    var result=0;
    const a = Number(base.value);
    const b = Number(height.value);
    result= Math.sqrt((a*a)+(b*b));
    error.innerText= "Hypotenuse is equal to  " + result.toFixed(5);
}
    
checkBtn.addEventListener("click",calculateHypo);