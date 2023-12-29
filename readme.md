## Decorators

In TypeScript, decorators are a way to add metadata or behavior to declarations (such as classes, methods, or properties) in a concise and reusable manner. Decorators are widely used in certain frameworks like Angular, and they can be applied to classes, methods, accessors, properties, or parameters.

Decorators are functions that are prefixed with the `@` symbol.

## class decorator

Class decorators in TypeScript are functions that are applied to class declarations. They can be used to modify or enhance the behavior of a class, add metadata, or perform any other kind of logic during class declaration. Class decorators are applied using the `@decorator` syntax just before the class declaration.

They receive the constructor of the class as their only parameter.

**Class decorators are applied when the class is declared, not when an instance is created. They provide a way to extend or modify the behavior of classes at design time.**

## decorator factory

A decorator factory is a higher-order function that returns a decorator function. In TypeScript, a decorator factory is used to create decorators with configurable behavior. Decorator factories allow you to pass parameters to decorators, enabling dynamic configuration based on the arguments provided to the factory.

## property decorator
