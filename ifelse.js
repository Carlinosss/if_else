const myAge = 18;
const isFemale = true;
let person1 = 'designated';
let person2 = 'drinker';
let driver = person1;
const driverStatus = "designated";


if (myAge > 18 && isFemale) {
	console.log("You are a lady over 18, please come in!");
}
else if (myAge == 18 && isFemale) {
	console.log("You are a 18 year old lady and you can come in!");
}
else if (myAge < 18) {
	console.log("You are not over 18, please stay outside!");
}

else if (myAge > 18) {
	console.log("I'm sorry today is ladies night, come back later");
}

else if (myAge == 18) {
	console.log("Today is ladies night. You cant come in");

}
if (driver == driverStatus) { 
	console.log("Driver has designated status and is allowed to drive!");
}	
	else { 
	console.log('Driver does not have designated status and is not allowed to drive');
}

