function Person(name) {
  this.name = name;
  this.sum = function () {
    console.log(this.name);
  };
}
Person.prototype.age = 18;

// 原型链继承
// 思路：让新实例的原型等于父类的实例
// 缺点：1、新实例无法向父类构造函数传参。
// 　　　2、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）

function Per() {
  this.name = "ker";
}

Per.prototype = new Person();

var per1 = new Per();
// console.log(per1.name);

// 构造函数继承
// 　　　　重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
// 　　　　特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 　　　　　　　2、解决了原型链继承缺点1、2、3。
// 　　　　　　　3、可以继承多个构造函数属性（call多个）。
// 　　　　　　　4、在子实例中可向父实例传参。
// 　　　　缺点：1、只能继承父类构造函数的属性。
// 　　　　　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 　　　　　　　3、每个新实例都有父类构造函数的副本，臃肿。
function Con(name) {
  Person.call(this, name);
  this.age = 20;
}

var con1 = new Con("con");
// console.log(con1.age);

// 组合继承（组合原型链继承和借用构造函数继承）****
// 重点：结合了两种模式的优点，传参和复用
// 　　　　特点：1、可以继承父类原型上的属性，可以传参，可复用。
// 　　　　　　　2、每个新实例引入的构造函数属性是私有的。
// 　　　　缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数
function SubType(name) {
  Person.call(this, name);
}
SubType.prototype = new Person();
var sub = new SubType();

// 原型式继承
// 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
// 　　　　特点：类似于复制一个对象，用函数来包装。
// 　　　　缺点：1、所有实例都会继承原型上的属性。
// 　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）
function content(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
var sup = new Person();
var sup1 = new content(sup);
// console.log(sup1.age);

// 寄生式继承
// 重点：就是给原型式继承外面套了个壳子。
// 　　　　优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
// 　　　　缺点：没用到原型，无法复用。
function content(obj) {
    function F(){}
    F.prototype = obj
    return new F()
}
var sup = new Person()
function subObject(obj){
    var sub = content(obj)
    sub.name = 'gar'
    return sub
}
var sup2 = subObject(sup)

// console.log(sup2.name);



// 寄生组合式继承（常用）修复了组合继承的问题
function content(obj) {
    function F(){}
    F.prototype = obj
    return new F()
}
var con = content(Person.prototype) // con(F实例) 继承了父类函数的原型

// 组合
function Sub(){
    Person.call(this) // 继承父类构造函数的属性
}

Sub.prototype = con // 继承con 实例
con.constructor = Sub // 修复实例

var sub1 = new Sub()

// console.log(sub1.age);
