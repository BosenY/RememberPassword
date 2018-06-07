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
class BlankPage extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }
  render() {
    let { params } = this.props.navigation.state
    let display = {
      describe: '',
      password: '',
      updatedate: ''
    }
    if (params) {
      display = params
    }
    // console.log(params)
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
            <Title>密码详情</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content padder>
          <Text>密码描述: {display.describe || 'null'}</Text>
          <Text>密码: {display.password || 'null'}</Text>
          <Text>最后一次更新时间: {display.updatedate || 'null'}</Text>
        </Content>
      </Container>
    )
  }
}

export default BlankPage
