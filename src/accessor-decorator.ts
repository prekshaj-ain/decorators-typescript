function validateRange(minVal : number, maxVal : number){
    return function(_: any, _2 : string, descriptor : PropertyDescriptor){
        let originalSetter = descriptor.set!;
        descriptor.set = function(num : number){
            if(num < minVal || num > maxVal){
                throw new Error(`Value must be between ${minVal} and ${maxVal}`)
            }
            originalSetter.call(this, num)
        }
        return descriptor;
    }
}
class TemperatureSensor {
    private _temperature: number = 0;
  
    @validateRange(-50, 50)
    get temperature(): number {
      return this._temperature;
    }
  
    set temperature(value: number) {
      this._temperature = value;
    }
  }
  
  const sensor = new TemperatureSensor();
  
  // Valid temperature setting
  sensor.temperature = 25;
  
  // Invalid temperature setting, will throw an error
  try {
    sensor.temperature = 75;
  } catch (error : any) {
    console.error(error.message); // Output: Value must be between -50 and 50
  }