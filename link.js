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

// string slice in js

var myName = "Aynul Islam Tamjid";
var myNameSlice = myName.slice(4);
console.log(myName);
console.log(myNameSlice);

var myNameDoubleSlice = myName.slice(3,8);
console.log(myNameDoubleSlice);


//split in js
// split method convert string to array in js

var myFruits = "apple, banana, orange, mango";
var myFruitsArray = myFruits.split(",");
console.log(myFruitsArray);

var myClass = "one, two, three, four";
console.log(myClass);
var myClassArray = myClass.split(",");
console.log(myClassArray);

//its replce by zero and converto string to array
console.log(myClass.replace("one","zero").split(","));

//its convert uppercase, also convert string to array
console.log(myClass.toUpperCase().split(","));

// its return true, because myClass variable string start with "a"
console.log(myClass.startsWith("o"));

// its return true bcz myClass variable ends with 0
console.log(myClass.endsWith("r"));


// valueOf method returns same value of variable, its using in object
console.log(myClass.valueOf());

// its return last index number of a searching letter of variable
console.log(myClass.lastIndexOf("o"));

/// Array In Javascript

//insert value in array using arrayName[position] = value;
var myArray = [];
console.log(myArray);
myArray[0] = "apple";
myArray[1] = "mango";
myArray[2] = true;
myArray[3] = "banana";
console.log(myArray);

// upate value in arary usig arrayName[position] = value;

myArray[2] = false;
console.log(myArray);

// direct array create

var myNewArray = [1,5,11,7,2,56,6,true,"hello","bye",false,[12,454,45]];
console.log(myNewArray);


// check array length, its return array length of an array
console.log(myNewArray.length);

// array sorting by using sort() function
console.log(myNewArray.sort());

/// arrays item willbe replace by using reverse()function in js
console.log(myNewArray.reverse());


// object in javascript//


//create object by using Object() method
var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "aynul";
myCar.brand = "mazda";


// its return  myCar objects all value
console.log(myCar);
// its printing drivers value of this object
console.log(myCar.driver);

myCar.drive = function(){
    console.log("this is drive function");
}
console.log(myCar.drive());
console.log(myCar);

var myHouse = new Object();
myHouse.area = "mirpur";
myHouse.unit = "d3"
myHouse.rent = function(){console.log("house not for salse");};
console.log(myHouse);

// its show rent() output
(myHouse.rent());

// another way to define object
var myHomeTown = {dstrict : "feni",po:"nababpur", thana : "sonagazi", house_no:12, rent:function(){console.log("nice home");}};
console.log(myHomeTown);
console.log(myHomeTown.dstrict);

// it returns rent() of myHomeTown object
myHomeTown.rent();

var mySalary = {
    name:"aynul",
    employee_id: "DGT-000143",
    
    salary:function(basic,house_rent,food,travel){
        console.log("my salary is :" + (basic+house_rent+house_rent+food+travel));
    },

    totalSalary: function(basic, house_rent, food, travel){
        return parseInt(basic+house_rent+travel+food);
    }

};
mySalary.totalSalary(12000,2000,1000,2000);
console.log( (mySalary));

//its return keys of an object , and its an array
var keys = Object.keys(mySalary);
console.log(keys);

var newKeys = Object.keys(myHouse);
console.log( myHouse);

// its return values of an object and its an array
var values = Object.values(mySalary);
console.log( values);

var newValues = Object.values(myHouse);
console.log( newValues);

// its return entries of object with value and keys and its an array

var entries = Object.entries(myHouse);
console.log( entries);

var newEmtries = Object.entries(mySalary);
console.log( mySalary);


//using this keyward
var myCar2 = {
    maxspeed : 45,
    driver : "avee",
    drive : function(speed,time){
        console.log(speed*time);
    },
    driverInfo: function(){
        console.log("driver info " + this.driver);
    }
};

for (car in myCar2, myCar2++){
    console.log(myCar2);

}

//myCar2.driverInfo();
//myCar2.drive(40,4);
//console.log(myCar2.drive(40,2));

//dynamic object calling

var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    
    this.logDriver = function(){
        console.log("My Name is " + this.driver, "maximum speed of my car " + this.maxSpeed);
    }; 

}

var myCar = new Car(70,"avee");
var myCar2 = new Car(23, "aynul");

//myCar.drive(20,6);
myCar2.logDriver();


var Office = function(it,commercial){
    this.it = it;
    this.commercial = commercial;
    console.log("dekko isho dept section name are " + this.it, "and " +this.commercial )
    this.merchandizing = function(top,bottom){
        this.top = top;
        this.bottom = bottom;
    };

}

var deptOffice = new Office("software", "export");

// js date object

var myDate = new Date();
console.log(myDate);


var myPastDate = new Date(1995, 11, 3, 10, 22, 23);
var myFutureDate = new Date (2021, 1, 1, 11, 34, 34);

console.log(myPastDate);



/// regular expression

// exec() = Executes a search for a match in a string.It returns an array of information or null on a mismatch

// test() = Tests for a match in a string. It returns true or false.

// match() = Returns an array containing all of the matches, including capturing groups, or null if no match is found.

// matchAll() = Returns an iterator containing all of the matches, including capturing groups.

// search() = Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

// replace() = Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

// replaceAll() = Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.

// split() = Uses a regular expression or a fixed string to break a string into an array of substrings.

var myRe = new RegExp('d(b+)d', 'g');
var myExp = myRe.exec('cdbbdbsbz');
console.log(myExp);


var myRegular = new RegExp("ca*", "g","i");
var myNewExp = myRegular.exec("caamcmcdcmbmcmcam");
console.log(myNewExp);


var exp1 = new RegExp("a|b","g");
var regExp = exp1.exec("abcdef");
console.log(regExp);



// js es6



// variable declare

//using const
const aynulsAge = 25;
console.log(aynulsAge);

//using arrow function

const learn = (a) => {
    console.log("hello " + a);
};

learn(12);

const newName = () => {

}


// spread operator in es6
const num = ['a',23,'bc','ed',4,7];
console.log(num);
const newNum = [...num, 4, 5, 7];
console.log(newNum);

//rest operator in es6

const learnArgs = (...args) => {
    console.log(args);

}
learnArgs(1,3,24,43,2,3);

const dekkoIt = (...args) =>{
    console.log(args);

       
}

const obj = Object.assign({}, [dekkoIt]);
console.log(obj);  



/// distructyring
// its use in object of js

const course = {
    name : "react course",
    details : {
        price : "200 tk",
        duration : "3 hrs",
        customer : {
            custname : "avee",
            custage : "26",
            education : {
                university : "DIU",
                semester : "6",
            }
        }

    }
};

console.log(course);

const {name} = course;
console.log(name);

const {details : {price}} = course;
console.log(price);

const {customer :{custage}} = course.details;
console.log(custage);

const {education :{university}} = course.details.customer;
console.log(university);

const {details : {duration}} = course;
console.log(duration);


const avee = {
    emp_name : "avee chakraborty",
    age : 24,
    university : "DIU",
    office : {
        ofc_name : "dekko",
        dept : {
            dept_name : "IT",
            section : "software",
            team : "backend"
        }
    }

}



const {emp_name} = avee;
console.log(emp_name);
const {office:{ofc_name}} = avee;
console.log(ofc_name);


/// array methods in es6

// there are some array method those not change the main array element
// those will create new instance of those arrays 
// not change in main array
// those array function are : filter(), find(), findIndex(), splice(),concat()

const newNumbers = [1,4,7,10,15];



//it will filter all of list item in the list based on condtion
const filterNewNumbers = newNumbers.filter((num) => num =>2);
console.log(filterNewNumbers);

const filtNum = newNumbers.filter((num) => num<2);
console.log(filtNum);

const findNumbers = newNumbers.find((num) => num>3);
const findIndexNumbers = newNumbers.findIndex((num) => num>3);
// it will find 0, because its find index no 0 and initial index of less than 3

console.log(findIndexNumbers);
// it will find 1 which index no 0 and initial index of less than 3
console.log(findNumbers);

const sliceNewNumbers = newNumbers.slice(2,6);
//it will print [7,10,15]
console.log(sliceNewNumbers);

// it will add array item in newNumbers by using concate()

const concatNewNumbers = newNumbers.concat("naimul", "bishunu", "shuvo");
console.log(concatNewNumbers);


const list = [1,"avee",23,56,78,12,656, "nobel", "aynul",23,56,78,12]

//it will filter all of list item in list based on condtion

const filterList = list.filter((num) => num<1000);
console.log(filterList);

// it will consloe  56 value in output ,bcz of 56 value is greater than 30 , 
const findList = list.find((num) => num>30);
console.log(findList);

// it will console index number 3, bcause 56 index number is 3, 56 is greater than 30
const findIndexList = list.findIndex((num) => num>30);
console.log(findIndexList);


// it will console [23,56,78,12,656,"nobel","aynul",23,56], it will start from index 2 and with 11 length of array
const sliceList = list.slice(2,11);
console.log(sliceList);
console.log(list);

// it will add item in the list array by using concat
const concatList = list.concat(1,4,6,7,29);
console.log(concatList);

// there are some es6 built in array function those change the main array 
// not create instances of array
// those function are 

const changeNumber = [1,3,5,7,9,34,"avee",34,"nobel"]

const spliceChangeNumber = changeNumber.splice(0,7);
// it will console [1,3,5,7,9,34,"avee"] , splice() change the main array changeNumber
// splice start with index 0 to 6 
console.log(spliceChangeNumber);

// when I console again changeNumber, console shows us [34,"nobel"]
// bcz of main array is changed now by using splice()

console.log(changeNumber);

const spliceAge = [1,3,5,7,9];
// it will remove start from index 0, it will remove 3 elements[1,3,5] from this.
// and add [7,9]
//final output [20,23,7,9]
const spliceAgeAddRemove = spliceAge.splice(0, 3, 20, 23);

//it will shows all value remove from changeNumber array [1,3,5]
console.log(spliceAgeAddRemove);

// now show the updated value of spliceAge array
console.log(spliceAge);

const pushSplitAge = spliceAge.push(22,25,28);
// push method directly add elements in main array pushSplitAge[]
console.log(spliceAge);

// map() in es6
// it will work like a forloop


const employeeNumber = [1,2,3,4,5]
const employeeNumberMap = employeeNumber.map((num) => {
    return num*2
});
// it will print in console [2,4,6,8,10]
console.log(employeeNumberMap);

const game = [3,7,11,13];
const gameMap = game.map((num) => {
    return num*num;

});
// it will print in console [9,49,121,144]
console.log(gameMap);

