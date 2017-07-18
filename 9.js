/**
 * Created by freshwinds on 17-7-17.
 */

class  Person{
    constructor(id,name,age){
        this.id=id;
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
        this.leader=null;
    }
    assignLeader(student_X){
        this.leader=student_X;
    }

}

class Student extends  Person{
    constructor(id,name,age,xclass){
        super(id,name,age);
        this.kclass=xclass;
    }
    introduce(){

        if(this.kclass.leader!=null&&this.kclass.leader.id===this.id)
            return  super.introduce()+ ` I am Leader of Class `+this.kclass.number;
        else
            return super.introduce()+ `I am at Class `+this.kclass.number;
    }
}
class Teacher extends Person{
    constructor(id,name,age,kclass){
        super(id,name,age);
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


var  a=new Person(1,"Tom",21);
console.log(a.introduce());
var temp =new Class(2);

var b=new Student(2,"Jerry",21,temp);
temp.assignLeader(b);
console.log(b.introduce());
var c=new Student(3,"Jerry",21,new Class(3));
console.log(c.introduce());
var d=new Teacher(4,"Tom",21,2);
console.log(d.introduce());
console.log(d.introduceWith(c));
console.log(d.introduceWith(b));