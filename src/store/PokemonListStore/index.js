import { observable, action } from 'mobx'
import list from '../../utils/pokemon-message.js'
class PokeList {
  @observable list = list
}

export default PokeList
