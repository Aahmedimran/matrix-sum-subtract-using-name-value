function processMatrix(e){ 
    let allInputsOfM1 = document.getElementsByName("m1")
    let allInputsOfM2 = document.getElementsByName("m2")
    let result = document.getElementsByName("mr")
 //  //console use check error and function work/or
    // console.log(allInputsOfM1);
    // console.log(allInputsOfM1.length);

    for (let i = 0; i < allInputsOfM1.length; i++) {
        // console.log(allInputsOfM1[i].value);
        // console.log(allInputsOfM2[i].value);

        if (e.submitter.innerText.toLowerCase() === "sum"){ 
            result[i].value = Number(allInputsOfM1[i].value) + Number(allInputsOfM2[i].value);
            
        }
        else{ 
            result[i].value = Number(allInputsOfM1[i].value) - Number(allInputsOfM2[i].value); 
           
        }
    }
}