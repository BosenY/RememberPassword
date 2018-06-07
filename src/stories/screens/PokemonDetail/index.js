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

import styles from './styles'
export interface State {}
interface Props {
  navigation: any;
  pokelistStore: any;
}
class PokemonDetailPage extends React.Component<Props, State> {
  constructor(props: any) {
    super((props: any))
    this.state = {
      title: ''
    }
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     console.log(newProps)
  //   }
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
            <Title>{this.props.pokelistStore.selectedId}</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content padder>
          <Text>宝可梦详情</Text>
        </Content>
      </Container>
    )
  }
}

export default PokemonDetailPage
