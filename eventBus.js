/*
 * @Author: laishaojiang
 * @Date: 2020-06-18 09:23:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-18 09:41:53
 * @
# Description: 事件管理中心-极简版
 */

class EventBus {
    constructor() {
        this.eventObj = {}
    }

    $emit(eventName, ...arg) {
        let that = this
        if(this.eventObj[eventName]) {
            this.eventObj[eventName].map(cb => {
                cb.apply(that, ...arg)
            })
        } else {
            throw new Error(`${eventName} 不存在`)
        }
    }

    $on(eventName, cb) {
        if(this.eventObj[eventName]) { // 事件已经存在则push
            this.eventObj[eventName].push(cb)
        } else {
            this.eventObj[eventName] = [cb] // 不存在则创建一个数组存储
        }
    }

    $off(eventName) {
        if(this.eventObj[eventName]) {
            delete this.eventObj[eventName]
        }
    }
}
