for(var var_x = 1; var_x++; true)
{
    console.log("\n################################# LOOP INIZIATO #################################\n");
    console.log("\n                       Con valore di partenza: "+var_x+"                            \n");
    console.log("\n################################# LOOP INIZIATO #################################\n")
    var valore_iniziale = var_x;
    var final_result = var_x;
    do
    {
        if(valore_iniziale % 2 == 0) {
            valore_iniziale = (valore_iniziale / 2);
        }
    
        // if the number is odd
        else {
            valore_iniziale = (valore_iniziale * 3)+1;
        }

        if(valore_iniziale == 1)
        {
            console.log("\n################################# LOOP TERMINATO #################################\n");
            console.log("\n                       Valore di collisione 1 raggiunto!                            \n");
            console.log("\n################################# LOOP TERMINATO #################################\n")
        }
    }
    while(valore_iniziale != 1);
    //check if the number is even
}


