var prompt = require('prompt');


//
// Start the prompt
//
prompt.start();

// program to check if the number is even or odd
// take input from the user
prompt.get(['number'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('number: ' + result.number);
    var var_x = result.number;
    var final_result;
    do
    {
        
        if(var_x % 2 == 0) {
            console.log("OG X value is even.\nValue is: "+var_x);
            final_result = (var_x / 2);
            var_x = final_result;
            console.log("Numero diviso per due vale ora: "+final_result);
        }
    
        // if the number is odd
        else {
            console.log("Valore originale di X è disparo! .\nValore di X: "+var_x);
            final_result = (var_x * 3)+1;
            var_x = final_result;
            console.log("Numero moltiplicato per tre più uno vale ora: "+final_result);
        }

        if(final_result == 1)
        {
            console.log("\n################################# LOOP TERMINATO #################################\n");
            console.log("\n                       Valore di collisione 1 raggiunto!                            \n");
            console.log("\n                       Con valore di partenza: "+result.number+"                            \n");
            console.log("\n################################# LOOP TERMINATO #################################\n")
        }
    }
    while(final_result != 1);
    //check if the number is even
    
  });

