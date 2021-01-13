class Thermostat {
    constructor() {

        this.Thermostat_temp = 20  

        this.powerMode = false 

    }   

    powermodeOn() { 

        this.powerMode = true  
        return this.powerMode 

    } 

    powermodeOff() {

        this.powerMode = false
        return this.powerMode 

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

    turnUp() {

        if(this.Thermostat_temp < 35 && this.powerMode == false) {
            this.Thermostat_temp ++ 
            return this.Thermostat_temp
        } else if(this.Thermostat_temp < 25 && this.powerMode == true) {
            this.Thermostat_temp ++ 
            return this.Thermostat_temp
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