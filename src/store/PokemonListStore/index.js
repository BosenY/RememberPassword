import { observable, action, computed } from 'mobx'
import list from '../../utils/pokemon-message.js'
class PokeList {
  @observable list = list //首页列表
  @observable selectedId = 1 //被选中的宝可梦,默认是1号妙蛙种子
  @observable selectedItem = {}
  @observable num = 0

  @action
  AddNum() {
    this.num += 1
  }
  ReduceNum() {
    this.num -= 1
  }
  @computed
  get newnum() {
    return this.num
  }
  @action
  setSelect(id, item) {
    this.selectedId = id
    this.selectedItem = item
  }

  @action
  setSelectId(id) {
    this.selectedId = id
    console.log(this.selectedId)
  }

  @action
  setSelectItem(item) {
    this.selectedItem = item
  }
}

export default PokeList
