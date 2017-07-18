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
        this.Class_member=new Array();
        this.leader=null;

    }
    assignLeader(student_X){
        if(this.Class_member.indexOf((student_X.id))!=-1)
            this.leader=student_X;
        else
            console.log("It is not one of us");
    }

    appendMember(student_x){
        this.Class_member.push(student_x.id);
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
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes=classes;

    }
    introduce(){
        var str="";

        str+=(super.introduce()+`I am a teacher.`+(this.kclass==null)? `I teach No Class`: `I teach Class $`);
        if(this.classes.length!=0) {
            for (var i = 0; i < this.classes.length; i++) {
                str += this.classes[i];
                if (i < this.classes.length - 1)
                    str += ",";
            }

        }
        else{
            str+="No Class";
        }
        str += ".";
        return str;
    }

    isTeaching(Student_x){
        for(var i=0;i<this.classes.length;i++){
            if(this.classes[i]==Student_x.kclass.number) {
                return true;
            }
        }
        return false;
    }
}
var  a=new Person(1,"Tom",21);
console.log(a.introduce());
var temp =new Class(2);

var b=new Student(2,"Jerry",21,temp);
temp.appendMember(b);
temp.assignLeader(b);
console.log(b.introduce());

var c=new Teacher(3,"Tom",21,[1,2]);
console.log(c.isTeaching(b));
