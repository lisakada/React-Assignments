class Person {
    constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  
    greet(other) {
      console.log("Hello " + other.name + ", I am " + this.name + "!");
    }
  }
  
  let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
  let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')
  
  console.log(sonny.greet(jordan))
  console.log(jordan.greet(sonny))

  console.log(`Hello, my name is ${sonny.name} and my email address is ${sonny.email} and my phone number is ${sonny.phone}`)
  
  console.log(`Hello, my name is ${jordan.name} and my email address is ${jordan.email} and my phone number is ${jordan.phone}`)