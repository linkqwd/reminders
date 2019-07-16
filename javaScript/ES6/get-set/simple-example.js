function makeClass() {
    "use strict";
    
    class Thermostat{
      constructor(farenheit){
        this.farenheit = farenheit;
      }
      get temperature(){
        return 5 / 9 * (this.farenheit - 32);
      }
      set temperature(celsius){
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
    }
    
    return Thermostat;
  }

const Thermostat = makeClass();

const thermos = new Thermostat(76); // setting in Fahrenheit scale

let temp = thermos.temperature; // Getter call: 24.44 in C
console.log(temp);

thermos.temperature = 26;

temp = thermos.temperature; // 26 in C
console.log(temp);