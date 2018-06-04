// @flow
import * as React from 'react'
import { observer, inject } from 'mobx-react/native'

import PokeList from '../../stories/screens/PokeList/index.js'

interface Props {
  navigation: any;
  pokelistStore: any;
}
interface State {}

@inject('pokelistStore')
@observer
export default class PokeListContainer extends React.Component<Props, State> {
  render() {
    let props = this.props
    return <PokeList {...props} />
  }
}
