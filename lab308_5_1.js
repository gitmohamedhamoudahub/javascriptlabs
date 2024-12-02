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