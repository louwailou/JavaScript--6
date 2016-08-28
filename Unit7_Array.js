console.log("sunjianfeng");
var empty = [];
var primes = [2,true,"sunjianfeng",3.5];
console.log(primes);
// 包含数组直接量和 对象直接量
var b = [[1,{x:1,y:2}],[2,{x:3,y:4}]];
console.log(b);
// 如果省略直接量的某个值则为undefined
var count = [1,,2];
console.log(count);
console.log(count[1]);//undefined

var a = new Array(10);
console.log(a);
// 稀疏数组  没有赋值的数组
var a1 = [,,,];
var a2 = new Array(3);
// a1 和 a2 不同哦，a1所有元素为 undefined

// 数组长度  当设置length 长度小于当前数组索引最大值时
// 大于或等于的部分将被删除
// 可以使用 Object.defineProperty() 修改数组的lengths属性
// Object.defineProperty(a,"length",{writable:false})
// 
//  添加 和 删除
a = [];
a[0] = "zero";
a[1] = "one";
a.push("two");
a.unshift("insert element at index 0");// 
console.log(a);
// 使用delete 删除数组元素，但是并不会改变数组的length,
// 也不会让数组元素从索引高的位置填充删除的空白位置
// 即 数组变换成了稀疏数组
// 
a.shift();//从数组头部删除一个元素，并将元素下移
// 跳过 null undefined 和不存在的元素
//if(!a[index]) {console.log("");}
// 跳过undefined 和不存在的元素
// if (a[index] === undefined){}
// 只想跳过不存在的元素,仍处理undefined
// if(!(index in a)){}
// 
//a.slice(2);
// a.split(" ");
//a.splice(index, howMany) 删除元素，插入元素
// 会根据元素的增删来改变索引值，第一个参数制定了插入和删除的起始位置
// 第二个参数指定了应该从数组中删除的元素个数 
var a  = [1,2,3,4,5,6,7,8];
console.log(a.splice(4));
console.log(a);
/*
[ 5, 6, 7, 8 ]
[ 1, 2, 3, 4 ]
 */

// unshift(1)在头部添加一个元素
// shift() 删除第一个元素


// ECM5 中的数组方法
// 数组方法，大多数第一个参数接受一个函数，并对数组的
// 每个元素调用一次该函数，该函数使用单个参数：
// 数组元素，元素索引，数组本身
// 通常只需要第一个参数，可以忽略后两个参数
// 
// forEach()
a.forEach( function(element, index) {
    // statements
    console.log(element);
});
a.forEach(function (element,index,arr) {
     // body...  
     arr[index] = element + 10;
})
console.log(a);

// map() 不修改原数组
var b = a.map(function (x) {
     /* body... */ 
     return x*x;
});
console.log(b);
console.log(a);// 

// filter() 返回原数组的子集
var c = a.filter(function (x) {
     /* body... */ 
     return x !== undefined && x != null;
});

// every() 当且仅当所有元素调用判断都返回true 才返回 true

var aEvery =  a.every(function (x) {
     /* body... */ 
     return x< 10;
});
console.log(aEvery);// false

// some 有true 就返回true
var aSome = a.some(function (x) {
     /* body... */ 
     return x > 10;
});


// reduce 和 reduceRight()
//  使用指定的函数将数组元素进行组合，生成单个值
// 这称之为 注入 和 折叠

// reduce 需要两个参数 ，第一个数执行函数，第二个数可选的初始值

var a = [1,2,3,4,5];
var sum = a.reduce(function (x,y) {
     /* body... */ 
     return x + y;
},0);
console.log(sum);// 15


// indexOf();


/*
 7.10  数组类型
 */
var isArr = Array.isArray(a);
console.log(isArr);


// 类数组对象 
var a = {"0":"a","1":"b","3":"c"};
//类数组对象 没有继承自 Array.prototype, 
//就不能直接调用数组方法，但是可以间接调用数组方法

var ajoin = Array.prototype.join.call(a,"+");
console.log(ajoin);
console.log(a);
var amap = Array.prototype.map.call(a,function (x) {
     /* body... */ 
     return x.toUpperCase();
});
console.log(amap);
console.log(a);






















