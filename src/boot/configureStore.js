import MainStore from '../store/DomainStore/HomeStore'
import LoginStore from '../store/ViewStore/LoginViewStore'
import PasswordStore from '../store/PasswordStore/index.js'
import PokeListStore from '../store/PokemonListStore/index.js'

export default function() {
  const mainStore = new MainStore()
  const loginForm = new LoginStore()
  const passwordStore = new PasswordStore()
  const pokelistStore = new PokeListStore()

  return {
    loginForm,
    mainStore,
    passwordStore,
    pokelistStore
  }
}
