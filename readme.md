## Decorators

In TypeScript, decorators are a way to add metadata or behavior to declarations (such as classes, methods, or properties) in a concise and reusable manner. Decorators are widely used in certain frameworks like Angular, and they can be applied to classes, methods, accessors, properties, or parameters.

Decorators are functions that are prefixed with the `@` symbol.

## class decorator

Class decorators in TypeScript are functions that are applied to class declarations. They can be used to modify or enhance the behavior of a class, add metadata, or perform any other kind of logic during class declaration. Class decorators are applied using the `@decorator_name` syntax just before the class declaration.

They receive the constructor of the class as their only parameter.

**Class decorators are applied when the class is declared, not when an instance is created. They provide a way to extend or modify the behavior of classes at design time.**

## decorator factory

A decorator factory is a higher-order function that returns a decorator function. In TypeScript, a decorator factory is used to create decorators with configurable behavior. Decorator factories allow you to pass parameters to decorators, enabling dynamic configuration based on the arguments provided to the factory.

## property decorator

Property decorators in TypeScript are functions that can be applied to class property declarations. They allow you to observe, modify, or provide metadata for individual properties of a class.

Property decorators are applied to properties within a class. They receive two parameters: the target object and the property name.

## method decorators

Method decorator is a special kind of declaration applied to a method declaration. It can be used to observe, modify, or replace a method definition. A method decorator is declared just before a method declaration.

They recieve three parameters:
`target`: The prototype of the class or the constructor function.
`propertyKey`: The name of the method being decorated.
`descriptor`: An object that contains the method's descriptor.

## accessor decorator

Accessor decorator in TypeScript is a special kind of decorator that is applied to the getter or setter of a class property. It allows you to modify the behavior of reading from or writing to a property. Accessor decorators are part of the broader category of property decorators, which are used to customize the behavior of class properties.

An accessor decorator is a function that takes three parameters:
`target`: The constructor function of the class or the prototype of the class (depending on whether the decorator is applied to a static or instance member).
`propertyKey`: The name of the property to which the decorator is applied.
`descriptor`: An object containing the property descriptor, including the getter or setter.

## parameter decorator

parameter decorator is a special type of decorator that can be applied to a parameter declaration within a class constructor. Parameter decorators are declared just before a parameter declaration and are used to observe, modify, or replace the parameter's behavior.

`target`: The constructor function of the class for a non-static member, or the class itself for a static member.
`methodName`: The name of the method containing the parameter.
`parameterIndex`: The index of the parameter within the parameter list.
