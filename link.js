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