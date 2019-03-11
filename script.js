//Variables mutation and type coercion

var firstName = 'Jhon';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'twenty eight';
job = 'drivewr';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);



/********* Objects and properties **********/

var jhon = {
    firstName: 'jhon',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job: 'teacher',
    isMarried: false
};

console.log(jhon.firstName);
console.log(jhon['lastName']);
var x = 'birthYear';
console.log(jhon[x]);

jhon.job = 'designer';
jhon['isMarried'] = true;
console.log(jhon);

// new Object syntax
var Jane = new Object();
Jane.firstName = 'Jane';
Jane.birthYear = 1969;
Jane['lastName'] = 'Smith';
console.log(Jane);



/* Objects and methods */

var jhon = {
    firstName: 'jhon',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    Job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

jhon.calcAge()
console.log(jhon);




/* CODING CHALLENGE */
// who has the highest BMI

var jhon = {
    fullName: 'Jhon Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (jhon.calcBMI() > mark.calcBMI()) {
    console.log(jhon.fullName + ' has a higher BMI of ' + jhon.bmi);
} else if (mark.bmi > jhon.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}


//   coding challenge solution
var jhon = {
    fullName: 'Jhon Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bills =  this.bills[i];

            if (bill < 50) {
            percentage = .2;
            } else if (bills >= 50 && bill < 200) {
                percentage = .15;
            } else { 
            percentage = .1;
            }

            //Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage; 
        }
    }
}