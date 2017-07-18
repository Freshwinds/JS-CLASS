/**
 * Created by freshwinds on 17-7-17.
 */

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    basicIntroduce() {
        return `My name is ${this.name}.I am ${this.age} years old.`;
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return  this.basicIntroduce()+ `I am a Student.I am at Class ${this.klass}.`;
    }
}
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return this.basicIntroduce()+ `I have a job.`;
    }
}
var a=new Person("Tom",21);
console.log(a.basicIntroduce());
var b=new Student("Tome",21,2);
console.log(b.introduce());
var c=new Worker("Tom",21);
console.log(c.introduce());