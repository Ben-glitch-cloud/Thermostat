'use strict';


// let e = 10 <-- is a local varible
// e = 10 <-- is a globel varible  
//node 
//html how to grab an element from javascrapt  

class Thermostat {
    constructor() {

        this.Thermostat_temp = 20  

        this.powerMode = true

    }   

    powermodeOn() { 

        this.powerMode = true  
        return this.powerMode

    }  


    powermodeOff() {

        this.powerMode = false
        return this.powerMode 

    }  

    ispowerModeon() { 

       return this.powerMode === true  
        
    }

    reset(){

        this.Thermostat_temp = 20 
        return this.Thermostat_temp 

    } 

    energyuse(){
        if(this.Thermostat_temp < 18) {
            return "low-usage"
        } else if(this.Thermostat_temp <= 25 && this.Thermostat_temp >= 19) {
            return "medium-usage"
        } else if(this.Thermostat_temp > 25) {
            return "high-usage"
        }

    }

    turnUp(){

        if(this.Thermostat_temp < 35 && this.powerMode == false) {
            this.Thermostat_temp ++  
            return `${this.Thermostat_temp}°C`
        } else if(this.Thermostat_temp < 25 && this.powerMode == true) {
            this.Thermostat_temp ++ 
            return `${this.Thermostat_tem}°C`
        } else {
            return "temperature limit"
        }
    } 

    turnDown() {
        if(this.Thermostat_temp > 10) {
        this.Thermostat_temp -- 
        return this.Thermostat_temp
        } else {
        return "This is as low as you can go."
        }
    }
} 

let newThermostat = new Thermostat