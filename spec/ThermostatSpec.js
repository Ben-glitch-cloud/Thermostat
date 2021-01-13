describe('Thermostat', function() {  

    beforeEach(function() {
        newThermostat = new Thermostat
    });

    describe('Constraction', function() {

        it("should return the defult temeperture of the Thermostat", function() {
            expect(newThermostat.Thermostat_temp).toBe(20)

        });  

        it("should return the setting of the power saving mode", function() {
            expect(newThermostat.powerMode).toBe(false)

        });

    }); 

    describe("Power mode", function() {
        
        it("should set the power saving mode On(true)", function() {
            
            newThermostat.powermodeOn() 
            expect(newThermostat.powerMode).toBe(true)
        }); 

        it("should set the power saving mode off(false)", function() {
            
            newThermostat.powermodeOn() 
            expect(newThermostat.powermodeOff()).toBe(false)
        });

    }); 

    describe("reset", function() {

        it("should reset the temperture to 20", function() {
            newThermostat.turnUp()
            newThermostat.turnUp() 
            expect(newThermostat.Thermostat_temp).toBe(22)
            expect(newThermostat.reset()).toBe(20)
        });

    }); 

    describe("energyuse", function() {
 
        it("should return low engery use", function() {
            newThermostat.Thermostat_temp = 17
            expect(newThermostat.energyuse()).toEqual("low-usage")
        }); 

        it("should return medium engery use", function() {
            newThermostat.Thermostat_temp = 20
            expect(newThermostat.energyuse()).toEqual("medium-usage")
        }); 

        it("should return high engery use", function() {
            newThermostat.Thermostat_temp = 26
            expect(newThermostat.energyuse()).toEqual("high-usage")
        });

    }); 


    describe("increase and decrease temp", function() {

        it("increase temp", function() {
           expect(newThermostat.turnUp()).toEqual(21)

        }); 

        it("descrease temp", function() {
            expect(newThermostat.turnDown()).toEqual(19)
 
         });  

         it("lowest temp message", function() {
            newThermostat.Thermostat_temp = 10
            expect(newThermostat.turnDown()).toEqual("This is as low as you can go.")
 
         });   
         
         it("highest temp on power saving mode off", function() {
            newThermostat.powermodeOff()
            newThermostat.Thermostat_temp = 35
            newThermostat.turnUp()
            expect(newThermostat.Thermostat_temp).toEqual(35) 
            expect(newThermostat.turnUp()).toEqual("temperature limit")
         }); 

         it("highest temp on power saving mode on", function() {
            newThermostat.powermodeOn()
            newThermostat.Thermostat_temp = 25 
            newThermostat.turnUp()
            expect(newThermostat.Thermostat_temp).toEqual(25) 
            expect(newThermostat.turnUp()).toEqual("temperature limit")
         }); 

    });

});