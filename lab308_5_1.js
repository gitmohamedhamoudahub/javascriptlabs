// //************************************PART ONE ************************************* */
// Take an array of numbers and return the sum.
function getSum(...arrNumbers){
    let sumReturned = 0;
    
    arrNumbers.forEach((mySumNumber)=> {
        
         if(mySumNumber > 0)
            sumReturned += mySumNumber;
} 
)
    console.log(`calculating the sum of  ${arrNumbers} ==> ${sumReturned} `);
    return sumReturned;
}


// Take an array of numbers and return the average.
function getAvg(...arrNumbers){
    let avgReturned = 0;
    let arrAvgNums = [...arrNumbers];
    arrAvgNums = arrNumbers;
    let arrNumbersSum = 0;
    if(arrAvgNums.length > 0 ){
        console.log(`calculating the average of  ${arrAvgNums} `);
        arrNumbersSum = getSum(...arrAvgNums);
        avgReturned = arrNumbersSum / arrAvgNums.length;
        console.log(`calculating the average of  ${arrAvgNums} ==> ${avgReturned} `);
    }
    return avgReturned;
}

// Take an array of strings and return the longest string.
function getLongestString( ...arrStrings ){

    
    let objLongest = {
        stringlength: 0, 
        stringText:  '' };
    arrStrings.forEach((strMyString) => {
        
       if(strMyString.length > objLongest.stringlength){
        objLongest.stringlength = strMyString.length; 
        objLongest.stringText = strMyString;}
        
    })
    console.log(`The longest string in [ ${arrStrings} ] ===> ${objLongest.stringText} length of ${objLongest.stringlength}`);
    return objLongest.stringText;
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function getStringLongerThan(minLength,...arrStrings){
    console.log(`The longer than ${minLength} string in [ ${arrStrings} ]`);
    let arrResult = [];
    arrStrings.forEach((strMyString) => {
        if(strMyString.length > minLength){
            arrResult.push(strMyString);
        }
    }
);
return arrResult;
}

// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// //************************************Testing PART ONE ************************************* */
// getSum(0,1,2,3,4,5,6,7,8,9,10);
//  getAvg(0,1,2,3,4,5,6,0);
let x = ['CCCCCCCCCCCCCCCCCCCC','AA','BBBAAAABBB','AAAAAA'];
//getLongestString(...x);
console.log ( getStringLongerThan(0,...x) );
// //************************************END PART ONE ************************************* */

// //************************************ PART TWO ************************************* */
  let userData =
   [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Sort the array by age.
console.log( userData);

    userData.sort((a,b) => {
    const ageA = parseInt( a.age);
    const ageB = parseInt( b.age);
    if(ageA < ageB)
    {
        return 1;
    }
    else if (ageA>ageB)
    {
        return -1;
    }
    return 0;
    }
);

console.log(`<========= Sorted by age data =========>`);
console.log(userData);

// Filter the array to remove entries with an age greater than 50.
let newUserData = userData.filter(
    (user) => { 
    if(parseInt(user.age) > 50) 
        {return true;

        } 
        return false ;
    }
)
console.log(`<========= age > 50 =========>`);
console.log(newUserData);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const newUserDataMap = userData.map((x) => {
    return {
        id:x.id,
        name:x.name,
        job: x.occupation,
        age: parseInt(x.age) + 1        
    }    
} )
console.log(`<========= Mapping change occupation to job, and add 1 to age =========>`);
console.log(newUserDataMap);

// Use the reduce method to calculate the sum of the ages.
const sumOfAges = userData.reduce((sumAges,user) => {return (sumAges += parseInt(user.age))},0);
console.log(`<========= Reduce sum of ages =========>`);
console.log(`Sum of all ages ==> ${sumOfAges}`);
// Then use the result to calculate the average age.
console.log(`<========= Average of ages =========>`);
console.log(`Average of ages ==> ${sumOfAges/userData.length}`);
