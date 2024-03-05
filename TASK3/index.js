const convert=()=>{
    let celciusInput=document.getElementById('celcius-input')
    let fahrenheitInput=document.getElementById('fahrenheit-input')
    let kelvinInput=document.getElementById('kelvin-input')


    let celcius=document.getElementById('celcius-input').value
    let fahrenheit=document.getElementById('fahrenheit-input').value
    let kelvin=document.getElementById('kelvin-input').value

    if(celcius==""&&fahrenheit==""&&kelvin==""){
        alert("Please fill any one of the field to convert!")
    }
    if(celcius!="" && fahrenheit=="" && kelvin==""){
        // fahrenheitInput.innerText=(celcius * 9) / 5 + 32
        fahrenheitInput.value=(celcius * 9) / 5 + 32
        console.log(celcius+273.15)
        kelvinInput.value=parseFloat(celcius) + 273.15
        console.log((celcius * 9) / 5 + 32)
    }else if(fahrenheit!="" && celcius=="" && kelvin==""){
        celciusInput.value=(fahrenheit - 32) * 5/9
        kelvinInput.value=(fahrenheit - 32) * 5/9 + 273.15 
    }
    else if(kelvin!="" && celcius=="" && fahrenheit==""){
        celciusInput.value=kelvin - 273.15
        fahrenheitInput.value=(kelvin - 273.15) * 9/5 + 32
    }
    
}

const resetValues=()=>{
    document.getElementById('celcius-input').value=""
    document.getElementById('fahrenheit-input').value=""
    document.getElementById('kelvin-input').value=""
}