---
title: 'OOP In Python'
date: '1-20-2023'
author: "Admin"
tags: "Computer Science"
preview: "How to use object oriented programming in python"
thumbnail: "https://images.unsplash.com/photo-1656680632373-e2aec264296b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D"
---

Object oriented programming is an important aspect of programming and software development and is a fundamental concept of many languages such as Python. Some even are built entirely around the concept, such as Java and C#. In Python, object originated programming is a paradigm that uses objects and classes to build highly maintainable applications, without the need to have repetitive code. 

OOPs concepts in Python:
- Classes
- Objects
- Polymorphism
- Encapsulation
- Inherientence
- Data Abstraction

### **Creating classes**
A Class is a collection of objects. It serves as a blueprint from which objects are being created. It contains various attributes and methods, which can be used by instances of the class.

Suppose you wanted to design a program to track cars in a dealership. If a list was used, the first element could be the car’s model while the second element could represent its color and so on. While this may be simple at first, imagine if you had 50, 200, or more vehicles. How would you know which element is which? Furthermore, as the number of vehicles increased, so would the complexity of your program, making it more and more difficult to maintain. This is where classes come in.

In python classes are created with the keyword class, followed by attributes, which are the variables of the class and methods which are built in functions for the class.

```python
class Car:
  def __init__(self, name, model, price):
    self.name = name
    self.model = model
    self.price = price


honda = Car("honda", "model XYZ", 50300)
```


Above is an example of how you would implement this. You initiate a class by first using the keyword “class” followed by the name of your class. Then you make a function that contains the attributes for your class, such as the name and price. To create an instance of the class above, we simply create a variable and call the class, then provide the attributes for the arguments. You may have noticed the use of self in the __init__ function. The self keyword has to be the first argument of the __init__ function in a class. It's used to tell Python that the method belongs to the instance of the class. In other words, self refers to the current object (instance) being created or used, allowing you to access its attributes and methods. 

So what about the init function? The __init__ function, short for "initialize," is a special method in Python classes. It is automatically called as soon as an object of the class is created (instantiated). This method is used to initialize the attributes of the class or perform any setup operations necessary for the object.

### **Dealing with methods**

Now that our car class has been created, suppose you wanted to add functionality to it besides just attributes. For example, you might want to add a test drive function that would allow people to test drive the car. In classes, these functions are called methods, which are built-in functions that can be used by instances of the class.

```python
class Car:
  def __init__(self, name, model, price):
    self.name = name
    self.model = model
    self.price = price
   
  def test_drive(self):
    print(f"You choose to test to drive {self.name}")
 
  def display_info(self):
    print(f"{self.name}, {self.model} is {self.price}")


honda = Car("honda", "model XYZ", 50300)
honda.display_info()
honda.test_drive()
```

In the above example we created two methods, which can be utilized by the instances. To call a method you use dot notation, followed by the name of the method. If you want to use class attributes within that method you simply use the self keyword for the first parameter.

### **Inheritance and subclasses**

Now suppose that our fictional car dealership is now selling planes in addition to the cars. While you could technically reuse our car class, some of its attributes may not apply to a plane. Furthermore our plane may have additional attributes that wouldn't apply to a car, like altitudes. To address this scenario, we can use inheritance in object-oriented programming. Inheritance allows us to create a new class (e.g., Plane) that shares some of the attributes and methods of an existing class, such as our car class. To create a subclass you would do the same as we did previously however you would specify the class you're inheriting from.

```python
class Plane(Car):
  def __init__(self, name, model, price, altitude):
    super().__init__(name, model, price)
    name.altitude = altitude
 
  def fly(self):
    print(f"You are now flying a plane at {self.altitude}")
 
smallPlane = Plane("Small plane", "Boeing", 85000, 300)
smallPlane.display_info()
```

We now have a subclass (or child class) that inherits both the attributes and methods from the main class (parent class). By using the super().__init__() method, we call the parent class’s __init__ function, allowing us to inherit and initialize specific attributes (like name and price) without rewriting code.

### **Polymorphism**

In object-oriented programming, polymorphism means "having many forms." It allows methods with the same name to behave differently based on the object that calls them. For example, if we need to determine whether a vehicle can float on water, we can use polymorphism to define a can_float() method. Each class (e.g., Plane, Boat) can have its own version of this method, with behavior specific to that type of object.

```python
Class Car:
    def can_float(self):
        return False  # Default behavior: most vehicles don't float


class Plane(Car):
    def can_float(self):
        return False  # Planes generally don't float


class Boat(Car):
    def can_float(self):
        return True  # Boats are designed to float


# Test the polymorphism
vehicles = [Plane(), Boat()]
for vehicle in vehicles:
    print(vehicle.can_float())  # Outputs: False, True
```

### **Encapsulation**
Encapsulation, which describes the concept of bundling data (attributes) and the methods that operate on that data into a single unit, usually a class. It helps protect the data by controlling access and ensuring it can only be modified in controlled ways. This is achieved by using access modifiers like private (_ or __) to restrict direct access to attributes and providing public methods (getters and setters) to manage them. In other words, you could think of encapsulation similar to a pill, where the contents are encapsulated within the pill itself and not available to the outside world to modify.
This method is essential for maintaining data integrity and implementing abstraction, as it hides the internal workings of an object from the outside world.
### **Data abstraction**
In our car dealership example, we probably wouldn’t want the end user knowing the internal workings of the car’s engine. This would be unnecessary and potentially confusing. To achieve this, we use data abstraction, which is the practice of hiding the internal details of a class and exposing only the relevant features to the outside world.

To enforce this abstraction in Python, we can make certain attributes private by prefixing them with double underscores (__). This tells Python that these attributes should not be accessed directly from outside the class. Instead, interaction with these private attributes should only be done through public methods, which act as controlled access points.

```python
class Car:
    def __init__(self, make, model, engine_type):
        self.__make = make  # Private attribute
        self.__model = model  # Private attribute
        self.__engine_type = engine_type  # Private attribute


    def get_engine_type(self):  # Public method to access private attribute
        return self.__engine_type


    def start_engine(self):
        print("Starting engine... The car is ready to drive!")


    def __str__(self):
        return f"{self.__make} {self.__model}"


#Create an instance of Car
my_car = Car("Toyota", "Corolla", "V6")
my_car.start_engine()
```

### **Conclusion**
Well, that covers the foundation of Object-Oriented Programming (OOP) in Python. This paradigm is widely used in the world of software engineering because it provides several key benefits that help developers write maintainable, readable, and scalable code.

By using the core principles of OOP, such as encapsulation, inheritance, polymorphism, and abstraction. You can design software that is modular, easier to understand, and more adaptable to change. These concepts enable developers to create reusable code, which not only reduces duplication but also simplifies maintenance and debugging.

