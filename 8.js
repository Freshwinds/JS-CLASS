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
class Class{
    constructor(number){
        this.number=number;
    }

}

class Student extends  Person{
    constructor(name,age,xclass){
        super(name,age);
        this.kclass={};
        this.kclass.number=xclass.number;
    }
    introduce(){
        return super.introduce()+ "I am at Class "+this.kclass.number;
    }
}
class Teacher extends Person{
    constructor(name,age,kclass){
        super(name,age);
        this.kclass=kclass;
    }
    introduce(){
        return super.introduce()+`I am a teacher.`+(this.kclass==null? `I teach No Class`: `I teach Class ${this.kclass}`);
    }
    introduceWith(x){
        if(x.number==this.kclass){
            return super.introduce()+`I am a teacher. I teach ${x.name}`;
        }
        else{
            return super.introduce()+`I am a teacher. I don't teach ${x.name}`;
        }
    }
}


var  a=new Person("Tom",21);
console.log(a.introduce());
var temp =new Class(2);

var b=new Student("Jerry",21,temp);
console.log(b.introduce());
var c=new Student("Jerry",21,new Class(3));
console.log(c.introduce());
var d=new Teacher("Tom",21,2);
console.log(d.introduce());
console.log(d.introduceWith(c));
console.log(d.introduceWith(b));