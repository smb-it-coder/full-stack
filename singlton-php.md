# What is singleton in PHP?
- Singleton can be used like a global variable.
- It can have only one instance (object) of that class unlike normal class.
- When we don't want to create a more than one instance of a class like database connection or utility library we would go for singleton pattern.
- Singleton makes sure you would never have more than one instance of a class.
- Make a construct method private to make a class Singleton.
- If you don't want to instantiate a multiple copies of class but only one then you just put it in singleton pattern and you can just call methods of that class and that class will have only one copy of it in a memory even if you create another instance of it.
- If user just wants to connect to database then no need to create a another instance again if the instance already exist, you can just consume first object and make the connection happen.
e.g.


<?php
    class DBConn {

        private static $obj;

        private final function  __construct() {
            echo __CLASS__ . " initializes only once\n";
        }

        public static function getConn() {
            if(!isset(self::$obj)) {
                self::$obj = new DBConn();
            }
            return self::$obj;
        }
    }

    $obj1 = DBConn::getConn();
    $obj2 = DBConn::getConn();
    
    var_dump($obj1 == $obj2);
?>
