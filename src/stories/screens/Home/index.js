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
  Body,
  Right,
  List,
  ListItem
} from 'native-base'
import { FooterTabs } from '../../../components'
import styles from './styles'
interface Props {
  //这里的只是一个接口的功能 为了确定下面使用的方法的类型 但是是any 所以注释掉也没关系啦~
  navigation: any;
  list: any;
}
interface State {
  number: number;
}
class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super((props: any))
    this.state = {
      number: '1',
      todo: {
        item: 'todoList'
      }
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Title>主页</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          {/* <List>
          <ListItem
                  key={"todoList"}
                  onPress={() => this.props.navigation.navigate("BlankPage", {name:'todoList111'})}>
                  <Text>{'todoList'}</Text>
          </ListItem>
          <ListItem
                  key={"todo342List"}
                  onPress={() => this.props.navigation.navigate("AddPassword", {name:'todoL3421'})}>
                  <Text>{'todoList'}</Text>
          </ListItem>
          </List> */}
          <Text>主页，pokemon的功能列表</Text>
        </Content>
        <FooterTabs active="home" navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default Home
