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
