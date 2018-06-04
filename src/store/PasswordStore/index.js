import { observable, action } from 'mobx'

import moment from 'moment'

class PasswordStore {
  @observable passwordList = [] //后期拿本地存储的值 做到百分百

  //增加
  @action
  addItem(params) {
    let { describe, password } = params
    if (describe != '' && password != '') {
      //这里只校验是否为空，对于空格和特殊字符的校验放在container层中处理
      this.passwordList.push({
        describe,
        password,
        updatedate: moment().format('YYYY-MM-DD HH:mm')
      })
    } else {
      //...
    }
  }

  //修改
  @action
  editItem(index, params) {
    let { describe, password } = params
    if (describe != '' && password != '') {
      //这里只校验是否为空，对于空格和特殊字符的校验放在container层中处理
      this.passwordList[index] = {
        describe,
        password,
        updatedate: moment().format('YYYY-MM-DD HH:mm')
      }
    } else {
      //...
    }
  }

  //删除
  @action
  deleteItem(index) {
    //下一版更新写法
    this.passwordList = [
      this.passwordList.slice(0, index),
      this.passwordList.silie(index + 1)
    ]
  }
}

export default PasswordStore
