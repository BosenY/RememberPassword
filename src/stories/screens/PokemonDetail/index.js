import * as React from 'react'

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from 'native-base'
import { observer, inject } from 'mobx-react/native'
import styles from './styles'
export interface State {}
interface Props {
  navigation: any;
  pokelistStore: any;
}
// @inject('pokelistStore')
@observer
class PokemonDetailPage extends React.Component<Props, State> {
  constructor(props: any) {
    super((props: any))
    this.state = {
      title: ''
    }
  }
  addnum() {
    this.props.pokelistStore.AddNum()
  }
  reducenum() {
    this.props.pokelistStore.ReduceNum()
    console.log(this.props.pokelistStore.num)
  }
  render() {
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Title>{this.props.pokelistStore.num}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content padder>
          <Text>{this.props.pokelistStore.newnum}</Text>
          <Button rounded light onPress={() => this.reducenum()}>
            <Text>{this.props.pokelistStore.newnum}</Text>
          </Button>
          <Button rounded onPress={() => this.reducenum()}>
            <Text>-</Text>
          </Button>
          {/* <Button onPress={() => this.reducenum()}>
            {' '}
            <Text>-</Text>{' '}
          </Button> */}
        </Content>
      </Container>
    )
  }
}

export default PokemonDetailPage
