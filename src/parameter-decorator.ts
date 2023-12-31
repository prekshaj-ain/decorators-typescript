function logParameter(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter ${parameterIndex} in ${methodName} of ${target.constructor.name} has been decorated.`);
  }
  
  class Example {
    greet(@logParameter message: string): void {
      console.log(message);
    }
  }
  
  const exampleInstance = new Example();
  exampleInstance.greet("Hello, World!");
  