// pls make at least 5 persons
const people = [{
    id: 1,
    name: 'Jorje',
    age: 21,
    moneyAmount: 50,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 1,
}, {
    id: 2,
    name: 'Andy',
    age: 18,
    moneyAmount: 10,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 1,
}, {
    id: 3,
    name: 'Alesya',
    age: 17,
    moneyAmount: 132,
    desiredAlcoholName: 'martini',
    desiredAlcoholAmount: 4,
}, {
    id: 4,
    name: 'Robert',
    age: 16,
    moneyAmount: 123,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 3,
}, {
    id: 5,
    name: 'Alex',
    age: 24,
    moneyAmount: 400,
    desiredAlcoholName: 'ale',
    desiredAlcoholAmount: 3,
}];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    whisky: 23, // don't change this one
    wine: 18,
    matrini: 50,
    vodka: 23,
    ale: 35,
};

const LEGAL_AGE = 18; // don't change this

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
/*==========The first function==========*/
function getLegalAgePeople(arr, ageParamName) {
    // WRITE CODE HERE
    let legalAgePeople = arr.filter(function(people) {
        return people.age >= LEGAL_AGE
    })

    return legalAgePeople
}

let legalAgePeopleArray = getLegalAgePeople(people, people.age) //I suppose it's not an appropriate usage of ageParamName, but it doesn't influence the rest of the code :)

console.log(legalAgePeopleArray)
/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */
/*==========The second function==========*/
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    // WRITE CODE HERE
    let peopleWhoHaveMoneyForAlcohol = arr.filter(function(people) {
        return people.moneyAmount >= people.desiredAlcoholAmount * alcoholPriceForOneItem[people.desiredAlcoholName]
    })

    return peopleWhoHaveMoneyForAlcohol
}

let peopleWhoHaveMoneyForAlcoholArray = getPeopleWhoHaveMoneyForAlcohol(legalAgePeopleArray)

console.log(peopleWhoHaveMoneyForAlcoholArray)

/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */
/*==========The third function==========*/
function buyAlcohol(arr) {
    // WRITE CODE HERE
    let executedPurchase = arr.map(function(people) {
        let bottles = ''
        if (people.desiredAlcoholAmount > 1) {
            bottles = ' bottles'
        } else if (people.desiredAlcoholAmount = 1) {
            bottles = ' bottle'
        }

        return people.name + " bought " + people.desiredAlcoholAmount + bottles + ' of ' + people.desiredAlcoholName + ' for ' + alcoholPriceForOneItem[people.desiredAlcoholName] * people.desiredAlcoholAmount + ' rubles';
    })

    return executedPurchase
}

let peopleWhoActuallyBoughtAlcohol = buyAlcohol(peopleWhoHaveMoneyForAlcoholArray)

console.log(peopleWhoActuallyBoughtAlcohol)








// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}