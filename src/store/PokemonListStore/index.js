import { observable, action } from 'mobx'
import list from '../../utils/pokemon-message.js'
class PokeList {
  @observable list = list //首页列表
  @observable selectedId = 1 //被选中的宝可梦,默认是1号妙蛙种子
  @observable selectedItem = {}

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
