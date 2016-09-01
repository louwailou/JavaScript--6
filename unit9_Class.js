// encoding = "utf-8"
console.log("孙建锋");

function myObjecat(msg) {
     /* body... */ 
     // 公有属性
     this.myMsg = msg;
     this.address = "中国北京";
       //私有属性
    var name = "haoqing";
    var age = 20;
    var that = this;
    //private method
    function sayName () {
        console.log("this.name "+ this.name);
    }

    // 公有方法
    this.sayAge = function () {
         /* body... */ 
         console.log("public method age=  "+self.age);
    }




}
// public 方法适合new 创建的实例对象

myObjecat.prototype.sayHello = function(argument){
     // body...
     console.log("为 prototype.method ");  
};

// 静态属性，只有类才能访问，实例不能访问

myObjecat.name1 = "China";

myObjecat.alertName = function () {
     /* body... */ 
     console.log("this.name " + this.name);
}

var my = new myObjecat("111111");
console.log( myObjecat.name1);
console.log("my.name "+ my.name1);// undefined
console.log("访问静态属性name1 = " + my.constructor.name1);
console.log("访问实例属性 = " + my.myMsg);
 console.log(myObjecat.address); 
 ////undefined, myObject中的this指的不是函数本身，而是调用address的对象，而且只能是对象


myObjecat.alertName();//this.name myObjecat
// my.alertName();// 出错!!!!!
my.constructor.alertName();//this.name myObjecat
my.sayHello();
//myObjecat.sayHello();// cuo

 //---- 测试prototype ----//
 console.log(my.prototype); //undefined, 实例对象没有prototype
 console.log(myObjecat.prototype); //Object 
/*
myObjecat { sayHello: [Function] }

 */

 console.log(myObjecat.prototype.constructor);//{ [Function: myObjecat] name1: 'China', alertName: [Function] }

 console.log(myObjecat.prototype.constructor.name); //myObjecat



// 类有prototype ,prototype 有constructor
// 实例没有prototype，但是有constructor ,通过constructor访问类方法
// 类不能调用实例方法










