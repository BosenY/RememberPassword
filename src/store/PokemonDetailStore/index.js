import { observable, action } from 'mobx'
import pokemonDetailList from '../../utils/detailPageDB/database.min.js'

class PokemonDetailStore {
  @observable selectedId = 1 //被选中的宝可梦,默认是1号妙蛙种子
  @observable selectedItemList = []

  @action
  setSelectId(id) {
    this.selectedId = id
    this.setSelectItemList(id)
  }

  @action
  setSelectItemList(id) {
    this.selectedItemList = pokemonDetailList.filter(
      item => Number.parseInt(item.id) === id
    )
  }
}
