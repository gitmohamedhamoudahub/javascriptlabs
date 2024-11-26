function growingPains(numOfWeeks)
{
    // Function to handle growing pains
    console.log(`growing pains started with ${numOfWeeks} weeks`);
    // Add more code to handle growing pains
    const pi = 3.1415;
    const radius = 5; // The radius of the circle is 5 meters.
    const area = pi * radius * radius;
    console.log(`The area of the circle is ${area}`);
    // Each plant requires a minimum space of 0.8 square meters.
    let plantMinSpace = 0.8;
    // The area is starting with 20 plants.
    let startingNumOfPlants = 20;
    let startingArea = plantMinSpace * startingNumOfPlants;
    let currentNumOfPlants = startingNumOfPlants ;
    console.log(`Starting Area: ${startingArea}`);
    // The plants double in number every week.
    for (let i =1;i<=numOfWeeks;i++)
    {
        currentNumOfPlants *= 2;
        console.log(`After week ${i} number of plants became ${currentNumOfPlants}`) 
    }
    let maxCapacityOfGarde = 20;
    let currentCapacityOfGardePercentage = (currentNumOfPlants / maxCapacityOfGarde)/100;
    console.log(`Current Capacity Of Garden Percentage: ${currentCapacityOfGardePercentage}`);
    if (currentCapacityOfGardePercentage > 0.8)
    {
        
        console.log(`Pruned - stop  exceeding the capacity of the garden`);
    }
    else if ((currentCapacityOfGardePercentage < 0.8) || (currentCapacityOfGardePercentage > 0.5))
    {
        
        console.log(`Monitored - growing at an acceptable rate`);
    }
    else if (currentCapacityOfGardePercentage > 0.8)
    {
            
            console.log(`Planted -  there is room to plant more plants.`);
    }
                

}
growingPains(2);