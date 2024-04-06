const display = document.getElementById("display");
function appenedtoDisplay(input){

    display.value += input;



}

function clearDis(){
    display.value=" ";

}

function calculate(){
    try{
        display.value=eval(display.value);
    }catch(error){
        display.value="Error";
    }
    


}