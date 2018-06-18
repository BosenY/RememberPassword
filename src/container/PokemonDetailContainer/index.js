// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import PokemonDetail from '../../stories/screens/PokemonDetail/index.js'

interface Props {
  navigation: any;
  pokelistStore: any;
}
interface State {}

@inject('pokelistStore')
// @observer
export default class pokemonDetailContainer extends React.Component<
  Props,
  State
> {
  render() {
    let props = this.props
    return <PokemonDetail {...props} />
  }
}
