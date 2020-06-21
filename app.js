// Chap 21-25 and Task 1
// var firstName= prompt("Write Your First Name");
// var LastName= prompt("Write Your Last Name");
// var fullName= firstName+ " "+LastName;
// alert ("HELLO" + " "+ fullName);

// Chap 21-25 and Task 2
// var fav_Mob_model=prompt("Enter Your Favourite Mobile Phone Model"); 
// alert(fav_Mob_model.length);

// Chap 21-25 and Task 3
// var nationality="PAKISTANI";
// var indxNUM= nationality.indexOf('N');
// alert ( "Index of 'N' is :"+ indxNUM);

//Chap 21-25 and Task 4
// var greet="Hello World";
//  var indxNUM= greet.lastIndexOf('l');
//  alert ( " LastIndex of 'l' is :"+ indxNUM);

//Chap 21-25 and Task 5
//  var nationality="PAKISTANI";
//  var character= nationality.charAt(3);
//  alert ( "Character At Index '3' is :"+ character);

//Chap 21-25 and Task 7
// var text="Hyderabad";
// var indxNUM= text.indexOf('Hyder');
// var replacingText= "Islam";
// var remText= text.slice(indxNUM+5);
// alert(replacingText+remText);


//Chap 21-25 and Task 8
// var message ="Ali and Sami are best friends .They play cricket and football together"; 
// var replace= message.replace(/and/g,"$");
// alert(replace);

//Chap 21-25 and Task 10
// var dryFruits=prompt("ENTER DRYFRUIT NAME"); 
// dryFruits=dryFruits.toUpperCase();
// alert(dryFruits);

//Chap 21-25 and Task 11
// var abc=prompt("Enter language name");
// var spi=abc.split("");
// var firstL= spi[0];
// firstL=firstL.toUpperCase();
// var reml=spi.slice(1);
// reml=reml.join("");
// reml=reml.toLowerCase();
// alert(firstL+reml);

//Chap 21-25 and Task 12
// var num="35.36";
// num=num.toString().replace(".", "");
// alert(num);

//Chap 21-25 and Task 13  Incomplete sahi nahi hai 
// var username=prompt("Enter a Username");
// for(i=0; i<username.length; i++)
// if (username[i]==="." || username[i]==="," || username[i]==="!"|| username[i]==="@"){
//     alert("Invalid Username!");
// }
// else{
//     alert("Valid Username!");
// }

//Chap 21-25 and Task 14
// var items=["cake","apple pie","cookie","chips","patties"];
// var search=prompt("Enter search value");
// search=search.toLowerCase();
// if (items.indexOf(search) !==-1){
//     alert("yes"+ " "+ search+ " "+"is available");
// }
// else{
//     alert("no"+ " "+ search+ " "+"is not available");
// }


//Chap 21-25 and Task 16
// var university="University Of Karachi";
// university=university.split("");
// for(i=0; i<university.length; i++){
//     console.log(university[i]);
// }

//Chap 21-25 and Task 17
// var lastL=prompt("ENTER ANY WORD");
// lastL=lastL.split("").reverse();
// var result=lastL[0];
// alert(result);


//Chap 21-25 and Task 18 copy code
// }
// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//  var text="the quick brown fox jumps over the lazy dog"; 
//  var count=countOccurences(text,"the"); // 2
//  alert(count);

//Chap 26-30 and Task 1
// var number=3.45214;
// console.log("number:"+number);
// var roundOf=Math.round(number);
// console.log("round off value:"+roundOf);
// var floornum=Math.floor(number);
// console.log("floor value:"+floornum);
// var ceilnum=Math.ceil(number);
// console.log("ceil value:"+ceilnum);

//Chap 26-30 and Task 2
// var number=-2.673;
// console.log("number:"+number);
// var roundOf=Math.round(number);
// console.log("round off value:"+roundOf);
// var floornum=Math.floor(number);
// console.log("floor value:"+floornum);
// var ceilnum=Math.ceil(number);
// console.log("ceil value:"+ceilnum);

//Chap 26-30 and Task 3
// var number=prompt("Enter a number");
// var absnum= Math.abs(number);
// alert(absnum);

//Chap 26-30 and Task 4
// var diceRoll = Math.floor( Math.random() * 6 )+1 ;
// alert('Random dice value: ' + diceRoll);

//Chap 26-30 and Task 5
//  var toss = Math.floor( Math.random() * 2 )+1 ;
// if (toss==1){
//     alert("1"+"\n"+"random coin value:TAILS");
// }
// else if(toss==2){
//     alert("2"+"\n"+"random coin value:HEADS");
// }

//Chap 26-30 and Task 6
//   var hunNum = Math.floor( Math.random() * 98 )+2 ;
//   alert("random number between 1 and 100:"+hunNum);


//Chap 26-30 and Task 8
// var secnum=Math.floor( Math.random() * 8)+2 ;
// var usenum=prompt("Enter a number between 1 and 10");
// if(secnum==usenum){
//     alert("Congratulations it is a secret no");
// }
// else{
//     alert("Sorry try Again");
// }

//Chap 31-34 and Task 1
// var a=new Date();
// console.log(a);

//Chap 31-34 and Task 2
// var month=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
// var now=new Date();
// var theMonth=now.getMonth();
// var nameOfmonth=month[theMonth];
// alert("Current Month:"+nameOfmonth);

//Chap 31-34 and Task 3
// var a =new Date();
// var b=a.toString();
// var c= b.slice(0,3);
// alert("Today is"+" "+c); 

//Chap 31-34 and Task 4
// var a =new Date();
// var b=a.toString();
// var c= b.slice(0,3);
// if(c=="SUN")
// {
//     alert("It's Fun day");
// } 
// else{
//     alert("It's Working day");
// }

//Chap 31-34 and Task 5 incorrect
// var a =new Date();
// var b=a.toString();
// var c= b.slice(7,2);
// alert(c);
// if(c=="SUN")
// {
//     alert("It's Fun day");
// } 
// else{
//     alert("It's Working day");
// }


//Chap 31-34 and Task 13
// var age=prompt("Enter Your Age");
// var preYear="2020";
// birthYear=(preYear-age);
// alert("Your age is:"+age);
// alert("Your birth year is:"+birthYear);

//Chap 31-34 and Task 14
// document.write("<h1> K-Electric Bill </h1>");
// var cusName=prompt("Enter Your Name");
// document.write("Customer Name:"+cusName +"<br/>");
// var month=["January","Febraury","March","April","May","June","July","August","September","October","November","December"];
// var now=new Date();
//  var theMonth=now.getMonth();
//  var nameOfmonth=month[theMonth];
//  document.write("Current Month:"+nameOfmonth+"<br/>");
//  var numOfunits=prompt("Enter your bill units");
//  document.write("Number of units:"+numOfunits+"<br/>");
//  var chrgesPerunit=18;
//  document.write("Charges per unit:"+chrgesPerunit+"<br/>");
//  var netAmopay=(numOfunits*chrgesPerunit);
//  document.write(" Net Amount Payable (within Due Date): "+netAmopay+"<br/>");
//  var latePay=350;
//  document.write("Late payment surcharge:"+latePay+"<br/>");
//  var grossAmopay=(netAmopay+latePay);
//  document.write(" Gross Amount Payable (after Due Date): "+grossAmopay);

//Chap 34-38 and Task 1
// function date(){
//     var a=new Date();
//      alert(a);
// }
// date();

//Chap 34-38 and Task 2
// function name(){
//     var firstName=prompt("Enter your First Name");
//     var LastName=prompt("Enter your Last Name");
//     alert("Hello"+" "+firstName+" "+LastName);
// }
// name();


//Chap 34-38 and Task 3
// function add(a,b){
//     var c=a+b;
//     return c;

// }
//  var g=add(4,5);
// alert("Sum Of Two Numbers is:"+g);

//Chap 34-38 and Task 4
// function calculator(num1,operator,num2){
//     if(operator==="+"){
//        return num1+num2;   
//     }
//     else if(operator==="-"){
//        return num1-num2;
//     }
//     else if(operator==="*"){
//        return num1*num2;
//     }
//     else if(operator==="/"){
//       return  num1/num2;
//     }
//     else{
//         return "Incorrect Operator!"
//     }
// }
// var result=calculator(4,"+",5);
// var result1=calculator(10,"-",5);
// var result2=calculator(4,"+",5);
// var result3=calculator(15,"/",3);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);


//Chap 34-38 and Task 5
// function square(num){
//     alert("Square of given number is:"+num*num);
// }
// var num = parseInt(prompt("Enter a number:"));
// square(num);
