alert("are you want to sure?");

//alert("this is single line comment");

/*
alert("this is js comment");
*/
var myAge = 25;
console.log(myAge)

var myName = "tamjid";
console.log(myName)


var myName = "aynul islam";
console.log(myName)

var myName = 10;
console.log(myName);

var customerAge = 23;
console.log(customerAge)



//mathematical operator number

var newAgeAddition = (customerAge + myAge);
console.log(newAgeAddition);

var newAgeMultification = (customerAge * myAge);
console.log(newAgeMultification);

var newAgeDevidation = (customerAge/myAge);
console.log((newAgeDevidation));

var newAgeSubtraction = (customerAge - myAge);
console.log(newAgeSubtraction);


//mathematical operator number with str

var myNumber = 100;
var myString = "string";

//addition number with str
var myNumberString = (myNumber + myString);
console.log(myNumberString);

//multiply number with str, its return NaN
var myNumberStringMultipy = (myNumber * myString);
console.log(myNumberStringMultipy);

//subtract number with str, its return NaN
var myNumberStringSubtract = (myNumber - myString);
console.log(myNumberStringSubtract);

//devide number with str, its return NaN
var myNumberStringDevide = (myNumber / myString);
console.log(myNumberStringDevide);

// mathematical operator with only string concitanation, only addition is applicable in str concinate

var myStr1 = "aynul";
var myStr2 = "islam";

//addition with string
//without space
var myTotalStr = (myStr1 + myStr2);
console.log(myTotalStr);

//with space, we also can add space in var myStr2 = " islam";
var myTotalStr = (myStr1 + " " + myStr2);
console.log(myTotalStr);

// str devide with str, its return NaN
var myDevideStr = (myStr1/myStr2);
console.log(myDevideStr);

// str multiply with str, its return NaN
var myMultiplyStr = (myStr1 * myStr2);
console.log(myMultiplyStr);

// str subtract with str, its return NaN
var mySubtractStr = (myStr1 - myStr2);
console.log(mySubtractStr);


// Shortcut Mathematical Operation 

var myAge = 10;
var myLastAge = 23;

//Shortcut Addition
console.log(myAge += myLastAge);

//Shortcut Multipication
console.log(myAge *= myLastAge);

//Shortcut Substraction
console.log(myAge -= myLastAge);

//Shortcut Devidation
console.log(myAge /= myLastAge);

//addition 1 before variable

console.log(myAge ++);
console.log(myAge);
console.log(myAge);


//adition 1 after variable
console.log(++ myAge);
console.log(myAge);

// show in browser using document.write()
document.write(myAge);

//boolean in js
var myBoolean1 = true;
console.log(myBoolean1);

var myBollean2 = false;
console.log(myBollean2);

//it returns true
console.log(5<7);

// it returns false
console.log(7<5);

 // builtin Boolean function(), it returns true bcz 1<10
console.log(Boolean(1<10));

 // builtin Boolean function() it returns false bcz 10<100
console.log(Boolean(100<10));

// its return true bcz 5 is a number
console.log(Boolean(5));

//its return true bcz "hello" is a string
console.log(Boolean("hello"));

//its return false bcz "" is an empty string
console.log(Boolean(""));

//its return false, bcz its 0 same as -0 return false
console.log(Boolean(0));
console.log(Boolean(-0));


//if/else condition in js

var iAmStudent = true;

if (iAmStudent){
    console.log("Yes I am Student!!");

} else{
    console.log("I am not student");
}

var iAmJobholder = false;
if (iAmJobholder){
    console.log("yes, I am Job Holder");
    
} else[
    console.log("I am bekars")
];

var iAmEngineer = true;
if (iAmEngineer){
    console.log("Yes Iam Engineer!!");
} else{
    console.log("Iam not Engineer, I Ma lewra");
}

var iAmCricketer = false;
if (iAmCricketer){
    console.log("Yes, Iam Cricketer")
};

var iAmAvee = false;
if (iAmAvee){
    console.log("yes!, Iam Avee");
} else{
    console.log("Iam not avee, Iam aynul");
}

var iAmTamjid = true;
if(iAmTamjid){
    console.log("yes!, Iam tamjid");
} else{
    console.log(" I am not tamjid, Iam avee");
};

var myNum = 10;
if (myNum==10){
    console.log("my num is equal to 10");
} else{
    console.log("my num is not equal to 10");
};

if (myNum<20){
    console.log("my num is less than 10")
} else{
    console.log("my number is greater than 10")
};

if (myNum>20){
    console.log("my num is greater than 20")

};


var myNum1 = 100;
var myNum2 = 100;

if (myNum1==myNum2){
    console.log("both number value are same");
} else{
    console.log("both number are different");
};


var mySchool = "dhaka";
var myCollege = "feni";

if (mySchool==myCollege){
    console.log("my school and college are same area");
} else{
    console.log("my school and college are not in same area");
}

var myVillage = "feni";
var myCity = "feni";
if (myVillage==myCity){
    console.log("my village and my city are same");
} else{
    console.log("my village and my city are not same");
};


//if/else if condition in js

var myNum = 101;
if (myNum==10){
    console.log("my num is equal to 10");
} else if(myNum<100){
    console.log("my num is less than 100");
} else if(myNum>100){
    console.log("my num greater than 100");
} else{
    console.log("my num is not valid");
};

//using ===, === and == are not same in js, === will check also data type, thats why === is more secure than ==
var myAge = 24;
if (myAge===24){
    console.log("my age is equal to 24");
} else if (myAge<20){
    console.log("my age is less than 20");
} else{
    console.log("my age is 24");
};

var myFriend = 20;
var aveesFriend = 25;
if (myFriend<aveesFriend){
    console.log("my friend are less");
}else if(myFriend==aveesFriend){
    console.log("my friend and avees friend are same number")
}else{
    console.log("avees friend are less");
};

// check != and ==, === in js

var myFriend = 30;
var aveesFriend = "30";

if (myFriend!=aveesFriend){
    console.log(true);
}else{
    console.log(false);
};

if (myFriend==aveesFriend){
    console.log(true);
}else {
    console.log(false);
};

if (myFriend===aveesFriend){
    console.log(true);
}else{
    console.log(false);
};


//Day 2
//logocal operators

var myAge = 25;

if (myAge===25 || myAge<25 || myAge>18){
    console.log("You can join with us")    
}else{
    console.log("You can not join with us")
}


if (myAge>18 && myAge==25&& myAge<30){
    console.log("U are adult")
}else{
    console.log("U r not adult")
}

if (myAge!==25 && myAge<30){
    console.log("U are Outside codition")
}else if(myAge===18 && myAge<18){
    console.log("u also outside condition,when condition apply u can come")
}else if(myAge===18 || myAge<18){
    console.log("wait for approval")
}else if(myAge===25 && myAge<30 && myAge>18){
    console.log("come in")
}else{
    console.log("get Out from here")
}


//loop in js

//while loop in js

var age = 10
while(age<18){
    console.log("ur age is under 18 ")
    age++;
}
document.write("stop")

var myAge = 15;
while(myAge<=25){
    console.log("my age is under 25");
    myAge++;

}
document.write("stop loop please");

var myAge = 25;
while (myAge>=10){
    console.log("age is over 10");
    document.write("age is over 10")
    myAge --;
}


//for loop in js

for (age=5; age<10; age ++){
    console.log("age is less than 10");
    document.write("age is less than 10")
}


//for loop with a tag 
var links = document.getElementsByTagName("a");

for (link=0; link<links.length;link++){
    console.log("this is link" + link);
    document.write("this is link" + link);
}

document.write("all link now write in loop");



var pTag = document.getElementsByTagName("p");

for (tags=0; tags<pTag.length; tags++){
    console.log("tags are" + tags);
    document.write("tags are" + tags);

}

document.write("all tag in now loop")


var allTag = document.getElementsByTagName("p");

for (tag=2; tag<=allTag.length; tag++){
    document.write("new tags are" + tag);

}

var newTag = document.getElementsByTagName("a");

for (tag=3; tag<=newTag.length; tag++){
    console.log("here is console tag" + tag);
    document.write("here is the doc tag" + tag);

}

docTag = document.getElementsByTagName("a");

for (doc=2; doc<=docTag.length; doc++){
    document.write("tag define as docTag" + doc);
}


//Break and Continue

for(i=2; i<=10; i++){
    console.log(i);
    if(i===7){
        break;
    }
}

for (age=10; age>=2; age++){
    console.log(age);
    if (age===15){
    break;
    }
}


for(number=10; number<=20; number++){
    console.log(number);
    if (number===15){
    break;
    }
}

for(roll=0; roll<=10; roll++){
    console.log(roll);
    if(roll===2){
        break;
    }

    
}

//continue and break in combined

for(item=2; item<=20; item++){
    if (item===3 || item==5){
        continue;
    }
    console.log(item);
    if(item===10){
        break;
    }
}

for(work=10; work<=20; work++){
    if(work===13 || work===14){
        continue;
    }
    console.log(work);

    if (work===19){
        break;
    }
    console.log(work);
}


for (task=0; task<=30; task++){
    if (task===7 || task===11 || task ===15){
        continue;
    }
    console.log(task);

    if(task===20){
        break;
    }
    console.log(task);

}

//practical example of loops in js
//add class in js1.html links properties, check in element
var links = document.getElementsByTagName("a");

for (link=0; link<links.length; link++){
    links[link].className = "newLink-" + link;

}

var allAge = document.getElementsByTagName("p");

for (age=0; age<allAge.length; age ++){
    allAge[age].className = "age-" + age;
}

// how to function work in js 

function getAverage(a,b){
    var average = (a+b)/2;
    var newAverage = (a*b)/2;

    var udatedAverage = newAverage/average;
    
    console.log(newAverage);
    console.log(average);
    console.log(udatedAverage);
}
getAverage(10,10)
//if we send 3 parameter inside the function than it will accept first two value 
//getAverage(10,10,13)

function getResult(bangla,english){
    var result = bangla + english;
    console.log(result);
    return result;
}

var myResult = getResult(87,76);
console.log("total result of my exam " + myResult);


function getCgpa(bangla,english,math,physics){
    var averageCgpa = (bangla + english + math + physics)/getCgpa.length;
    console.log("cgpa length:" + getCgpa.length);
    console.log(averageCgpa);
    return averageCgpa;

}
getCgpa(4,3,4,2);
var myCgpa = getCgpa(4,3,4,2);
console.log("my cgpa is " + myCgpa);

function myAmount(bank,cash,paycard){
    var avgMyAmount = (bank+cash+paycard)/myAmount.length;
    console.log(avgMyAmount);
    return avgMyAmount;
}
myAmount(110635,73545,75564);
var newMyAmount = myAmount(110635,73545,75564);
console.log("newMyAmount is : " + newMyAmount);



function ourTeam(football,cricket,badminton){
    var winingPercentage = (football + cricket + badminton) / ourTeam.length;
    console.log("our team number: " + ourTeam.length);
    return winingPercentage;
}

var ourNewTeam = ourTeam(23,13,45);
console.log("our new team are :" + ourNewTeam);

// numbers in js

var numberOne = 5;
var numberTwo = 10;
var numberSum = (numberOne + numberTwo);

console.log(numberSum)


// when we sum two variable one have string another have a number, then it will sum string and sum 

var numberOne = 10;
var numberTwo = "10";
var numberThree = (numberOne + numberTwo);
// type of 
console.log(typeof(numberThree));
// it will show 1010
console.log(numberThree);


// Math use in js

var number1 = 11.33;
var number2 = 34;

var numberRound = Math.round(number1 + number2);
// it will show 45, instead of 45.33
console.log(numberRound);

var numberFloor = Math.floor(number1 + number2);
// it will show 45, instead of 45.33, it is similer to Math.round method
console.log(numberFloor);


var numberMin = Math.min(number1,number2);
//it will show minimum value of variable
console.log(numberMin);

var numberMax = Math.max(number1,number2);
// it will show maximum value of variable
console.log(numberMax);

var numberCeil = Math.ceil(number1 + number2);
//it will show 46, instead of 45.33
console.log(numberCeil);


// it will show the pi value of variable by using builtin pi function
var numberPi = Math.PI;
console.log(numberPi);

// Not a Number : NaN in Js

var appleNumber = 10;
var appleName = "apple";

var multiplyApple = (10*"apple");
// its return NaN
console.log(multiplyApple)

var devideApple = (10/"apple");
//its return NaN
console.log(devideApple);

var subtractApple = (10-"aplle");
//its return NaN
console.log(subtractApple);

// check NaN or Not NaN

var a = "apple";
var b = 5;
var x = 10;
var c = a * b;
var z = b * x;
if (isNaN(a)){
    console.log("its return true " + c);
} else{
    console.log("its return false");
}

// check NaN or Not NaN

if (isNaN(b)){
    console.log(true);
} else{
    console.log(false);
}

// check NaN or Not NaN

if(isNaN(x)){
    console.log("its return", + c )

} else{
    console.log("its return: ", + z);
}
 if(!isNaN(b)){
     console.log("its a number");

 }else {
     console.log("its not a number");
 }



// string in js

var myString = ("hello");
console.log(myString);
// string length
console.log(myString.length);
//uppercase string
console.log(myString.toUpperCase());
//index of any letter of this string
console.log("index number of l: " + myString.indexOf("l"));


var myString2 = ("Hello 'Iam' tamjid");
console.log(myString2);
// string length
console.log(myString2.length);
// string uppercase
console.log(myString2.toUpperCase());
// index number check of any letter in string
console.log("index number of d: " + myString2.indexOf("d"));

var myString3 = ("Hello I'am Tamjid");
console.log(myString3);
// string length
console.log(myString3.length);
//string uppercase
console.log(myString3.toUpperCase());
// check index number of any letter/word in string
console.log("index number of Tam: " + myString3.indexOf("Tam"));
// tam returns -1; because of js not find tam instead of Tam
console.log("index number of Tam: " + myString3.indexOf("tam"));


//check if tam is on string or not
if (myString3.indexOf(("Shuvo")!==-1)){
    console.log("avee");
}else{
    console.log("tamjid");
}


if (myString3.indexOf(("Tam")===-1)){
    console.log("index of Tam in myString: " + myString3.indexOf("Tam"));
}else{
    console.log("index not valid");
}


//comparision in  string

var a = "abc";
var b = "ABC";

var aLower = a.toLowerCase();
var bLower = b.toLowerCase();
var cLower = "bcd";
// its print false
if(a===b){
    console.log("true");
}else{
    console.log("false");
}

//its print true
if (aLower===bLower){
    console.log("true");
}else{
    console.log("false");
}

aLower = "abc";
cLower = "xyz";

if (aLower<cLower){
    console.log("aLower lower than cLower");
}else{
    console.log("aLower not lower than cLower ")
}