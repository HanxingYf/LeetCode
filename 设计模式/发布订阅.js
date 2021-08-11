class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 订阅
    on(eventName, callBack) {
        if(!this.events[eventName]) {
            this.events[eventName] = [callBack]
        }else {
            this.events[eventName].push(callBack)
        }
    }
    // 删除订阅
    off(eventName, callBack) {
        if(!this.events[eventName]) return
        this.events = this.events[eventName].filter(item => {
            return item !== callBack
        })
    }
    // 触发事件
    emit(eventName, ...rest) {
        this.events[eventName] && this.events[eventName].forEach((fn) =>{
            fn.apply(this, rest)
        })
    }
    // 执行一次
    once(eventName, callBack) {
        function fn() {
            callBack()
        }
    }
}

const em = new EventEmitter()
const handle = (...rest) => {
    console.log(rest);
}
em.on('click', handle)
em.emit('click', 1,2,3)
em.off('click',handle)
em.off('click',1)
em.once('dbClick', ()=>{
    console.log('once');
})