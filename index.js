// //console.log('hello');
// //console.log('I Like Pizza');

// //document.getElementById("myH1").textContent='hello';
// //window-alert('this is alert')

// // let fullName="Zülal Özçelik";
// // let age = "21";
// // let student = false;

// // console.log(age);
// // document.getElementById("p1").textContent = `Your name is ${fullName}`;
// // document.getElementById("p2").textContent = age;
// // document.getElementById("p3").textContent = student;

//const PI = 3.14159;
// let radius;
// let circumfrence;

// document.getElementById("mySybmit").onclick=function(){
// radius= document.getElementById("myText").value;
// radius= Number(radius);
// circumfrence= 2 * PI * radius;
// document.getElementById("myH3").textContent=circumfrence;
// }


// ******** WEB COUNTER***********
//      const decreaseBtn = document.getElementById("decreaseBtn");
//      const resetBtn = document.getElementById("resetBtn");
//      const increaseBtn = document.getElementById("increaseBtn");
//      const countLabel = document.getElementById("countLabel");
//      let count = 0;

//      increaseBtn.onclick = function(){
//            count++;
//            countLabel.textContent = count;
//      }
//      decreaseBtn.onclick = function(){
//            count--;
//            countLabel.textContent = count;
//      }
//      resetBtn.onclick = function(){
//            count = 0;
//            countLabel.textContent = count;
//      }




//****************NUMBERGUESS*******************
//const myButton = document.getElementById("myButton");
//const myLabel= document.getElementById("myLabel");
//const min = 1;
//const max = 6;
//let randomNum;

//myButton.onclick= function(){
    //randomNum= Math.floor(Math.random()* max) + min; 
    //myLabel.textContent=randomNum;
    //
    //
    //}

     // NUMBER GUESSING GAME

//const minNum = 1;
//const maxNum = 100;
//const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

//let attempts = 0;
//let guess;
//let running = true;

//while(running){
//    
//    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//    guess = Number(guess);
//    
//    if(isNaN(guess)){
////window.alert("Please enter a valid number");
//    }
//    else if(guess < minNum || guess > maxNum){
////window.alert("Please enter a valid number");
//    }
//    else{
////attempts++;
////if(guess < answer){
////    window.alert("TOO LOW! TRY AGAIN!");
////}
////else if(guess > answer){
////    window.alert("TOO HIGH! TRY AGAIN!");
////}
////else{
////    window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
////    running = false;
////}
//    }
//}
//********************************************************** */

//***************** */ TEMPERATURE CONVERSION PROGRAM*********************

//const textBox = document.getElementById("textBox");
//const toFahrenheit = document.getElementById("toFahrenheit");
//const toCelsius = document.getElementById("toCelsius");
//const result = document.getElementById("result");
//let temp;

//function convert(){

////if(toFahrenheit.checked){
//////temp = Number(textBox.value);
//////temp = temp * 9 / 5 + 32;
//////result.textContent = temp.toFixed(1) + "°F";
////}
////else if(toCelsius.checked){
//////temp = Number(textBox.value);
//////temp = (temp - 32) * (5/9);
//////result.textContent = temp.toFixed(1) + "°C";
////}
////else{
//////result.textContent = "Select a unit"; 
////}
//}


//***********************GET and SET*****************************

//class Rectangle{

////constructor(width, height){
//////this.width = width;
//////this.height = height;
////}

////set width(newWidth){
//////if(newWidth > 0){
////////this._width = newWidth;
//////}
//////else{
////////console.error("Width must be a positive number");
//////}
////}

////set height(newHeight){
//////if(newHeight > 0){
////////this._height = newHeight;
//////}
//////else{
////////console.error("Height must be a positive number");
//////}
////}


////get width(){
//////return `${this._width.toFixed(1)}cm`;
////}
//
////get height(){
//////return `${this._height.toFixed(1)}cm`;
////}


////get area(){
//////return `${(this._width * this._height).toFixed(1)}cm`;
////}
//}

//const rectangle = new Rectangle(2, 3);

//console.log(rectangle.width);
//console.log(rectangle.height);
//console.log(rectangle.area);


//function createCounter() {

////let count = 0;

////function increment() {
//////count++;
//////console.log(`Count increased to ${count}`);
////}

////function getCount() {
//////return count;
////}

////return {increment, getCount};
//}
//
//const counter = createCounter();

//counter.increment();
//counter.increment();
//counter.increment();

//console.log(`Current count: ${counter.getCount()}`);

function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal= Number(principalInput.value);
    let rate = Number(rateInput.value /100) ;
    let years= Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value=0;
    }

    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }

    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }


    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent= result.toLocaleString(undefined,
                                                    {style:"currency",
                                                    currency: "USD"}); 
}