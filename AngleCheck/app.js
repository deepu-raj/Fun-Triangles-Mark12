const angle = document.querySelectorAll(".angle");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const error = document.querySelector("#errorMsg");
const checkBtn = document.querySelector("#check-btn")
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
function assessAngles () {
    var sum=0;
    for (i=0;i<3;i++) {
        sum= sum+Number(angle[i].value);
            }
    if (sum===180){
        error.innerText = "Yes, you can create a triangle with these values"
    } else {
        error.innerText = "No, you canoot create triangles with these angles "
      }
}
checkBtn.addEventListener("click",assessAngles);