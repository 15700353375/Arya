/* 发布订阅者的本质是 emit发布  触发on */
class EventEmitter {
  constructor() {
    // 事件对象，存放订阅的名字和事件
    this.events = {}
  }
  // 订阅事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback]
    } else {
      //一个名字可以订阅多个事件函数
      this.events[eventName].push(callback)
    }
  }

  // 触发事件
  emit(eventName) {
    // 遍历所有执行了订阅的事件
    this.events[eventName] && this.events[eventName].forEach(cb => cb())
  }
}

let em = new EventEmitter()

function workDay() {
  console.log('每天工作')
}
function makeMoney() {
  console.log('先赚一百万')
}
function sayLove() {
  console.log('我稀罕你')
}

em.on('money', makeMoney)
em.on('love', sayLove)
em.on('work', workDay)
em.on('work', makeMoney)

em.emit('money')
em.emit('love')
em.emit('work')

/* 手动实现观察者模式 */

/* 观察者 */
class Observable {
  constructor(name) {
    this.name = name
  }
  update(obj) {
    console.log(
      `当前：${this.name}被通知了，当前${obj.name}状态是：${obj.state}`
    )
  }
}

/* 被观察者 */
class Subject {
  constructor(name) {
    this.name = name
    this.state = '开心'
    this.observers = []
  }
  // 搜集观察者
  attach(item) {
    this.observers.push(item)
  }

  // 更新被观察者
  setState(state) {
    this.state = state
    // 通知所有观察者、更新状态
    this.observers.forEach(item => item.update(this))
  }
}

// 创建一个被观察者
let student = new Subject('学生')

// 两个观察者
let parent = new Observable('父母')
let teacher = new Observable('老师')

// 添加观察者
student.attach(parent)
student.attach(teacher)
// 被观察者变化
student.setState('不高兴了')
