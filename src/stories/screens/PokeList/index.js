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
import { View, Image, NativeModules, StatusBar, FlatList } from 'react-native'
import imgList from '../../../utils/imgList.js'
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
  componentDidMount() {
    // console.log(JSON.stringify(imgList))
    //   StatusBarManager.setColor(processColor('#ff0000'), false)
  }
  renderType(types, cnTypes) {
    return cnTypes.map((item, index) => (
      <View key={index} style={styles[types[index]]}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ))
  }
  toDetail(id) {
    console.log(id)
  }

  render() {
    let { list } = this.props.pokelistStore
    console.log(list)
    return (
      <Container style={styles.container}>
        <Header>
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
            <FlatList
              data={imgList}
              renderItem={({ item, index }) => (
                <ListItem key={index} onpress={this.toDetail(index + 1)}>
                  <Text>{item.key + 1}.</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.pokeListImg}
                    source={item.uri}
                  />
                  <Text style={styles.itemListName}>{list[index].cnName}</Text>

                  {this.renderType(list[index].type, list[index].cnTypes)}
                </ListItem>
              )}
            />
          </List>
        </Content>
        <FooterTabs active="list" navigation={this.props.navigation} />
      </Container>
    )
  }
}

export default PokeList
