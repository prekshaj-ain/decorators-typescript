
function timing(_: any, methodName: string, descriptor : PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = function(...args : any[]){
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        const executionTime = end - start;

        console.log(`Method ${methodName} took ${executionTime} milliseconds to execute.`);
        return result;
    }
    return descriptor;
}

class Task {
    @timing
    performTask() {
        // Simulate a time-consuming task
        for (let i = 0; i < 100000000; i++) {
            // Some computation
        }
        console.log('Task completed!');
    }
}

const task1 = new Task();
task1.performTask();