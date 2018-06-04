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
import { View, NativeModules, StatusBar } from 'react-native'
const { StatusBarManager } = NativeModules
// import { observer, inject } from "mobx-react/native"
import { FooterTabs } from '../../../components'
import styles from './styles'
interface Props {
  //这里的只是一个接口的功能 为了确定下面使用的方法的类型 但是是any 所以注释掉也没关系啦~
  navigation: any;
  pokelistList: any;
}
interface State {
  number: number;
}
class PokeList extends React.Component<Props, State> {
  constructor(props: any) {
    super((props: any))
    this.state = {
      number: '1',
      todo: {
        item: 'todoList'
      }
    }
  }
  //   componentDidMount() {
  //     StatusBarManager.setColor(processColor('#ff0000'), false)
  //   }
  render() {
    let { pokelistStore } = this.props
    // let list = pokelistList.list
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <Header>
          {/* <StatusBar
         backgroundColor="#2b85e4"
         barStyle="light-content"
        /> */}
          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Title>宝可梦列表</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <List>
            {pokelistStore.list.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onPress={() => {
                    {
                      console.log(item)
                    }
                  }}
                >
                  <Text>{item.cnName}</Text>
                </ListItem>
              )
            })}
          </List>
        </Content>
        <FooterTabs active="list" navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default PokeList
