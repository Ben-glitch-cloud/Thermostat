$(document).ready(function() { 
    var thermostat = new Thermostat();  
    $('#alert').css('color', 'green')
    $('#alert').text('Power mode On') 
    updateTemperature();

    function updateTemperature() { 
        $('#temperature').text(thermostat.Thermostat_temp);
    }

   


    $('#turnup').click(function() {  
        updateTemperature(); 
        if(thermostat.turnUp() === "temperature limit") {
            $('#temp_message').text("Temperature Limit"); 
        } else {
            $('#temp_message').text('Temperature') 
        } 
       
    }); 

    $('#turndown').click(function() {  
        updateTemperature(); 
        if(thermostat.turnDown() === "temperature limit") {
            $('#temp_message').text("Temperature Limit"); 
        } else {
            $('#temp_message').text('Temperature')
        } 
       
    });  

    $('#reset').click(function() { 
        thermostat.reset(); 
        updateTemperature();
    });  

    $('#Powermodeon').click(function() {  
        $('#alert').css('color', 'green')
        $('#alert').text('Power mode On') 
        thermostat.powermodeOn(); 
    }); 

    $('#Powermodeoff').click(function() {  
        $('#alert').css('color', 'red')
        $('#alert').text('Power mode Off') 
        thermostat.powermodeOff(); 
    })  

    $('#energey').click(function() { 
        if(thermostat.energyuse() === "low-usage") {
            $('#energy_use_indicator').css('color', 'green')
        } else if(thermostat.energyuse() === "medium-usage") {
            $('#energy_use_indicator').css('color', 'orange')
        } else if(thermostat.energyuse() === "high-usage") {
            $('#energy_use_indicator').css('color', 'Red')
        }
        $('#energy_use_indicator').text(thermostat.energyuse());  

        
    }) 

    
})