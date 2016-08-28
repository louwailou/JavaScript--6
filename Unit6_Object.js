
// 除 字符串 数字 true ,false undefined 外 其他都是对象
//属性特性 
// writable attribute 可写 是否可以设置值
// enumerable attribute  可枚举
//configurable attribute 可配置，是否可以删除或者修改
//
//除了包含属性之外，每个对象还拥有三个相关的对象特性（object attributes）
//对象的原型(prototype) 指向另外一个对象，本对象的属性继承自他的原型对象
//对象的类(class) 是一个表示对象类的字符串
//对象的扩展标记(extensible flag) 指明了(在ECM5中)是否可以向该对象添加新的属性


/*创建对象
    通过对象直接量 ，关键字new 和Object.create()
1. 对象直接量
*/
var empty = {};
var point = {x:0,y:0};
var book = { "mainTitle":"sun",
            "subtitle":"yousis ma ",
            author:{firstName:"first_Name",
                    surname:"FlagName"
           }
  };


console.log(book);
console.log(book.author + '\\');
console.log(book.subtitle);
console.log("book 的原型：")
console.log(book.prototype);
console.log(book.author.prototype);
var arr = new Array();
console.log(arr.prototype);
console.log(Array.prototype);

// 创建空对象
var kong1 = {};
var kong2 = new Object();
var kong3 = Object.create(Object.prototype);
// 通过构造函数或者new 创建的对象的原型就是构造函数的prototype属性的值
console.log(kong2);
console.log("object.create object");
console.log(kong3);
console.log(Object.prototype);
// 说明 通过new 和 Object.create 创建的对象的原型都是一样的
//  但是为何 通过{...} 定义的是undefined??? 如 book
//  
var o1 = Object.create({x:1});
console.log('o1 prototype');
console.log(o1.prototype);//o1 prototype  undefined


/*
通过原型继承创建一个对象
 */
function inherit(p){
    if (p == null) {
        throw new TypeError("type error");
    };
    if (Object.create) {
        // create 方法存在
        return Object.create(p);
    };

    var t = typeof(p);
    if (t != "object" && t != "function"){
        throw  new TypeError(" need object type")
    }
    function f(){// 定义一个都造函数
        console.log('this is a function f（）');
    };
    f.prototype = p;// 将原型属性设置为p
    return new f();// 使用f() 创建p的继承对象
    /*
typeof的运算数未定义,返回的就是 "undefined".
运算数为数字 typeof(x) = "number"
字符串 typeof(x) = "string"
布尔值 typeof(x) = "boolean"
对象,数组和null typeof(x) = "object"
函数 typeof(x) = "function"
typeof 运算符返回一个用来表示表达式的数据类型的字符串。 
可能的字符串有："number"、"string"、"boolean"、"object"、"function" 和 "undefined"。 
如： 
     */
}
console.log("typeof(null)")
console.log(typeof(null)); // object

/*
   属性的查询和设置
 */
var author = book.author;
var name = author.subtitle;
var title = book["mainTitle"];
console.log(book.mainTitle);



//6.2  属性继承
var o = { };
 o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
console.log('bengin')
console.log(s.prototype);
console.log("s = " + s);
console.log(q.x + q.y);

console.log('end ')

// 如果对象不存在，视图查询这个不存在对象的属性就会报错
// var len = book.newtitle.length;

/*
   6.3 删除属性
 delete 只能删除自有属性，不能删除继承属性(删除继承属性，要从定义这个属性的原型上删除)
 delete 只是断开属性和宿主对象的联系  
 删除成功或者没有任何副作用则返回 true
  如：删除不存在的或者 继承的属性 也是返回 true
不能删除可配置属性为false的属性 ,如 全局变量 和函数 属性
var x = 1;
delete this.x 
function f(){};
delete this.f;
 */ 
/*
 6.4 检测属性

 in,hasOwnPreperty()和perpertyIsEnumerable()
 */
console.log("属性查询begin");
console.log("x" in o);//true
console.log( "toString" in o);// true
console.log("x" in point);//true 
console.log("abc" in o);
console.log("属性查询end");
// hasOwnProperty() 检测自有属性,继承属性为false
// propertyIsEnumerable（）检测是自有属性且是可枚举的 才返回true

// 除 in 外 还可以使用！== 判断一个属性是否为undefined
// !== 可以区分null 和 undefined

// 如果o中含有属性x,且x 的值不是null 或者undefined
if(o.x != null) o.x *= 2;
//如果x 是undefined ，null,false，“”，0，NAN
if(o.x) o.x *= 2;











/*
    Description:
    The Object.create() method creates a new object with the specified prototype object and properties.

    Syntax:
    Object.create(proto[, propertiesObject])
*/
