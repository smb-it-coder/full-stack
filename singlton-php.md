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

## Output:

- DBConn initializes only once
- bool(true)
- Object1 and Object2 will point to the same instance

            _______________________
           |                       |
$obj1 ---->|  Instance of DBConn   |<----- $obj2
           |_______________________| 


## IInd example
                                    
                                    <?php
                                    class Singleton
                                    {
                                        /**
                                         * Returns the *Singleton* instance of this class.
                                         *
                                         * @staticvar Singleton $instance The *Singleton* instances of this class.
                                         *
                                         * @return Singleton The *Singleton* instance.
                                         */
                                        public static function getInstance()
                                        {
                                            static $instance = null;
                                            if (null === $instance) {
                                                $instance = new static();
                                            }
                                    
                                            return $instance;
                                        }
                                    
                                        /**
                                         * Protected constructor to prevent creating a new instance of the
                                         * *Singleton* via the `new` operator from outside of this class.
                                         */
                                        protected function __construct()
                                        {
                                        }
                                    
                                        /**
                                         * Private clone method to prevent cloning of the instance of the
                                         * *Singleton* instance.
                                         *
                                         * @return void
                                         */
                                        private function __clone()
                                        {
                                        }
                                    
                                        /**
                                         * Private unserialize method to prevent unserializing of the *Singleton*
                                         * instance.
                                         *
                                         * @return void
                                         */
                                        private function __wakeup()
                                        {
                                        }
                                    }
                                    
                                    class SingletonChild extends Singleton
                                    {
                                    }
                                    
                                    $obj = Singleton::getInstance();
                                    var_dump($obj === Singleton::getInstance());             // bool(true)
                                    
                                    $anotherObj = SingletonChild::getInstance();
                                    var_dump($anotherObj === Singleton::getInstance());      // bool(false)
                                    
                                    var_dump($anotherObj === SingletonChild::getInstance()); // bool(true)
