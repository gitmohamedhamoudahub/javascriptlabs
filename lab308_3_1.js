console.log("Lab Started");
 function fizzBuzz()
{
    console.log("   Buzz Started");
    
    for (let i=0; i<101; i++)
    {   
        
        if (((i % 3) == 0))
        {
            console.log(`${i} FIZZ`);
        }
        else if (((i % 5) == 0))
            {
                console.log(`${i} BUZZ`);
            }
        else if (((i % 3) == 0) && ((i % 5) == 0))
        {
            console.log(`${i} FIZZ BUZZ`);
        }
        else
        {
           console.log(`${i}`);
        }


    }
    console.log("   Fizz Buzz Ended");
    
}

function  isPrime(nNum) 
{
    let bolResult = false;
    //    console.log(`Prime Time for : ${nNum}`);
       //return if the input was 0, 1, 2
       if((nNum == 0) ||(nNum == 1) ) 
       {
       // console.log(nNum );
        bolResult = false;
        // return bolResult;
       }
        else if (nNum == 2) {
            bolResult = true;
            //return bolResult;
        }
        else {
            
            for(let i = 2; i < nNum; i++)
                {
                    //bolResult = false;
                    //console.log('==>' + nNum + " " + i +  " " + nNum%i);
                  if(nNum%i == 0) 
                    {
                        bolResult = false;
                        break;
                        
                    }   
                    else 
                    {
                        bolResult = true;

                    }
                                                     
                }
                
                
        }
        return bolResult;     
       

}
// fizzBuzz();
// for(let j=0;j<50;j++)
// {
//     if(isPrime(j))
//     {
//             console.log(` ${j} `);
//     }
// }

function nextPrimeNumber(nToTest)
{
    let counter = nToTest + 1 ;
    while(true)
        {
            if(isPrime(counter))
            {
                console.log(`Next Prime Number For ${nToTest} is ${counter}`); ;
                break;
            }
            else
            {
                counter = counter + 1;
            }

        }
    
}

nextPrimeNumber(78);