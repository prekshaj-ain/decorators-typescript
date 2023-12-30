function memoize(_:any, _2 : string, descriptor : PropertyDescriptor){
    let originalMethod = descriptor.value;
    let cache: Map<number,number> = new Map();
    descriptor.value = function(num : number) : number{
        if(cache.has(num)){
            console.log(`from cache for ${num}`);
            return cache.get(num)!;
        }

        let result:number = originalMethod.call(this,num);
        console.log(`calculating result for ${num}`);
        cache.set(num,result);
        return result;
    }
    return descriptor;
    
    
}

class ExampleClass {
    @memoize
    fibonacci(n: number): number {
        return n <= 1 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}

const exampleInstance = new ExampleClass();
console.log(exampleInstance.fibonacci(5)); // Should calculate and log the result
console.log(exampleInstance.fibonacci(5)); // Should reuse the cached result, no recalculation
console.log(exampleInstance.fibonacci(3)); // Should calculate and log the result
console.log(exampleInstance.fibonacci(3)); // Should reuse the cached result, no recalculation
