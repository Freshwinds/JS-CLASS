/**
 * Created by freshwinds on 17-7-17.
 */
class  Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}.I am ${this.age} years old.`;
    }

}

class Student extends  Person{
    constructor(name,age,kclass){
        super(name,age);
        this.kclass=kclass;
    }
    introduce(){
        return super.introduce()+ `I am at Class ${this.klass}`;
    }
}
class Teacher extends Person{
    constructor(name,age,kclass){
        super(name,age);
        this.kclass=kclass;
    }
    introduce(){
        return super.introduce()+(this.kclass==null? `I teach No Class`: `I teach Class ${this.kclass}`);
    }
}

var a=new Person("Tom",21);
console.log(a.introduce());
var b=new Student("Tom",21,2);
console.log(b.introduce());
var c=new Teacher("Tom",21,2);
var d=new Teacher("Tom",21,null);
console.log(c.introduce());
console.log(d.introduce());

