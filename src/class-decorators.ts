function Logger(constructor : Function){
    console.log(`class ${constructor.name} is declared`);
}

// Decorator Factory
function EnforceMethodNamingConvention(prefix : string){
    return function (constructor: Function){
        const classMethods = Object.getOwnPropertyNames(constructor.prototype);
        for(const method of classMethods){
            if(method !== 'constructor' && !method.startsWith(prefix,0)){
                console.error(`Method ${method} does not follow naming convention`);
            }
        }
    }
}

@Logger
class Person{
    name = 'Preksha';
    constructor(){
        console.log('creating object...')
    }
}

@EnforceMethodNamingConvention('handle')
@Logger
class EventHandler {
    handleEvent1() {
        console.log('Handling Event 1');
    }

    handleEvent2() {
        console.log('Handling Event 2');
    }

    processEvent3() {
        console.log('Processing Event 3');
    }
}