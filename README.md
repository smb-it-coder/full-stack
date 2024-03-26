# PHP 8 new feature with example

PHP 8 introduced several new features and improvements over its predecessor PHP 7. Here are some notable features along with examples:

## 1 Union Types:

Union types allow declaring that a parameter or return type can accept multiple types of values. This enhances type safety and readability of code.

    // Example using Union Types
    function foo(int|string $value): void {
        echo $value;
    }
    
    foo(123);      // Output: 123
    foo("Hello");  // Output: Hello

## 2 Named Arguments:

Named arguments allow passing arguments to a function by specifying the parameter name, which makes function calls more readable and less error-prone, especially for functions with many parameters.
        
        // Example using Named Arguments
        function greet($name, $greeting = "Hello", $punctuation = "!") {
            echo "$greeting, $name$punctuation";
        }
        
        greet(greeting: "Hi", name: "John");  // Output: Hi, John!

## Constructor Property Promotion:

Constructor property promotion reduces boilerplate code when creating classes by allowing properties to be declared and initialized directly in the constructor.

        // Example using Constructor Property Promotion
        class Person {
            public function __construct(
                public string $name,
                public int $age
            ) {}
        }
        
        $person = new Person(name: "Alice", age: 30);
        echo $person->name;  // Output: Alice            

## 4 Match Expression:

The match expression is an improvement over the switch statement, offering more concise syntax and stricter type-checking.

        // Example using Match Expression
        $score = 85;
        
        $grade = match (true) {
            $score >= 90 => "A",
            $score >= 80 => "B",
            $score >= 70 => "C",
            $score >= 60 => "D",
            default => "F",
        };
        
        echo $grade;  // Output: B

## 5 Nullsafe Operator:

The nullsafe operator (?->) allows accessing properties or calling methods on potentially null values without causing a fatal error.

        // Example using Nullsafe Operator
        class User {
            public ?Address $address = null;
        }
        
        class Address {
            public function getCity(): string {
                return "New York";
            }
        }
        
        $user = new User();
        echo $user?->address?->getCity();  // Output: New York

## Weak Maps:

Weak maps allow associating arbitrary data with objects without preventing those objects from being garbage collected when they are no longer needed.

    // Example using Weak Maps
    $weakMap = new WeakMap();
    
    $obj = new stdClass();
    $weakMap[$obj] = 'some data';
    
    var_dump($weakMap[$obj]);  // Output: 'some data'
    
    unset($obj);
    
    var_dump($weakMap[$obj]);  // Output: NULL


## Saner Numeric Strings:

PHP 8 introduces a more consistent behavior for numeric strings, making operations involving numeric strings more predictable.
    // Example of Saner Numeric Strings
    var_dump("123" + "456");  // Output: int(579)
    var_dump("123" . "456");  // Output: string(6) "123456"


## Throw Expression:

PHP 8 allows throwing exceptions in expressions, enabling cleaner and more concise error handling code.
        // Example using Throw Expression
        $value = -1;
        
        $result = $value >= 0 ? $value : throw new InvalidArgumentException('Negative value not allowed');


## Just-In-Time (JIT) Compilation:

While not a language feature per se, PHP 8 introduced JIT compilation, which can significantly improve the performance of PHP applications by dynamically compiling code into machine code.

These features, combined with the ones mentioned previously, enhance PHP's capabilities, performance, and developer experience in various aspects.

