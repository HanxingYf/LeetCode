class Animal { 
    sayName = () => { throw new Error('你应该自己实现这个方法'); 
} }
class Monkey extends Animal { 
    sayName() { console.log('I love coding'); 
} }
const monkey = new Monkey()