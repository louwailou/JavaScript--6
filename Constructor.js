  // 类A的构造函数
   var ClassA = function() {  
  
        console.log("ClassA");  
  
        this.a = "a";  
  
    };  
  
    var ClassB = function() {  
  
        console.log("ClassB");  
  
        this.b = "b";  
  
    };  
  // 
    ClassB.prototype = new ClassA();// ClassA  
  
    var objB1 = new ClassB();  // ClassB  
  
    var objB2 = new ClassB();  // ClassB  

/*
构造子类的时候原型的构造函数不会执行
ClassA
ClassB
ClassB

 */

//由于js类的定义方法和函数的定义方法一样，
//所以定义类的同时就定义了构造方法。

function Person(name,sex){         // 类，同时定义构造方法
    this.eat=function(){                     // 类中的方法
     console.log("eating");
}
    this.name = name;                     // 类中的属性
    this.sex = sex;
 }


// 函数的实参 可以通过arguments[0],arguments[1] 等表示
// arguments 并不是真正的数组，踏实一个实参对象，每个实参对象都包含以数字为索引的一组元素以及
// length属性，但他毕竟不是数组

var scope = "global scope";
function checkScope () {
     var scope = "local Scope" ;
     function f () { 
         console.log(scope);
        return scope ;
    }
     return f();
}

checkScope();// local scope

var scope2 = "global scope";
function checkScope2 () {
     // body...  
     var scope2 = "local scope";
     function f () {
        console.log(this);
          console.log(scope2)
          ;  
          return scope2;
     }
     return f;
}

checkScope2()();

// 闭包

var uniqueInteger = (function () {
     // body...  
     var counter = 0;
     return function () {
          /* body... */
          console.log(counter);
          return counter ++; 
     }
} ());
var uni = uniqueInteger();
console.log(uni);
console.log(uniqueInteger);



function addPrivateProperty (o,name,predicate) {
     var value ;
     o["get" + name] = function(){
         return value;
     }
     o["set" + name] = function (v) {
          /* body... */ 
          if (predicate && !predicate(v)) {
             console.log("错我了");
          }else {
              value = v;
          }
     }
}

var o = {};
addPrivateProperty(o,"Name",function (){ return typeof(x) == "String" ;} );

o.setName("sunjian");
console.log(o.getName);
o.setName(0);



function constFunc(){
var funcs= [];
var pa = 0;
for (var i = 10 ; i >= 0; i--) {
    funcs[i] = function () {
         /* body... */ 
         pa = i;
         return pa ;
    }
}
return funcs;
}

var func = constFunc();

console.log("检查闭包")
console.log(func[5]());// -1
console.log(func[1]());// -1
// 嵌套的函数作用于 不会将作用域内的私有成员变量复制一份，也不会对绑定的变量生成静态快照
// 



/*        函数属性，方法，和构造函数                */


function checkArg (a,b,c) {
     // body...  
     console.log(arguments.length);// 实参的个数
    
};

checkArg(1,2);
// 每一个函数都包含一个 prototype 他指向一个引用对象，即原型对象，
// 每一个函数都包含不同的原型对象，当函数用作构造函数的时候，新创建的对象会从原型对象上继承属性

// call()   apply()
// 以对象o 的方法调用函数f
//f.call(o);
//f.apply(o);
//


// bind()
// 将函数绑定至某个对象，挡在函数f()上调用bind()方法并传入一个对象o作为参数，这个方法将返回
// 新的函数，以函数调用的方式调用新的函数将会把原始函数f当做o的方法来调用
// 传入新函数的任何实参都将会传入原始函数
// 


function f (y) {
      /* body... */ 
  return this.x + y;

}

var o = {x:1};
var g = f.bind(o);
 var gf = g(2);
console.log(gf);// 3  调用g（） 相当于调用了f


// 通过 Function 构造函数 ,创建的是 匿名函数， 有一点需要注意

var f = Function("x","y","return x*y");
console.log("傻逼")
console.log(f(1,2));
// 该方式创建的匿名函数 并不是使用词法作用域 ，该函数体的编译总会在顶层函数执行

var scope3 = "gloabal";
function constructFunction () {
     var scope3 = "localScope";
    // return new Function(" return scope3;");// 无法捕获局部作用域
}

//console.log(constructFunction()());


function not  (f) {
    return function () {
         var result  = f.apply(this,arguments);
         return !result; 
    }
}
var even = function (x) {
     /* body... */ 
     return x%2 === 0;
}

var odd = not(even);

function compose (f,g) {
     // body...  
     return function () {
          /* body... */
          console.log(this);
          return f.call(this,g.apply(this,arguments)); 
     };
}
var squre = function (x) {
     /* body... */ 
     return x*x;
}

var sum = function (x,y) {
     /* body... */ 
     return x+y;
}

var squreofSum = compose(squre,sum);
console.log( squreofSum(2,3));// 25









