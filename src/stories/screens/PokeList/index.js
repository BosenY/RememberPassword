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
import {
  View,
  Image,
  NativeModules,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native'
import imgList from '../../../utils/imgList.js'
import { FooterTabs } from '../../../components'
import styles from './styles'
interface Props {
  navigation: any;
  pokelistStore: any;
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
      },
      text: '',
      displayList: []
    }
  }
  componentDidMount() {
    let { list } = this.props.pokelistStore
    this.setState({
      displayList: list.slice(0, 19)
    })
  }
  renderType(types, cnTypes) {
    return cnTypes.map((item, index) => (
      <View key={index} style={styles[types[index]]}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ))
  }
  toDetail(id, item) {
    this.props.navigation.navigate('PokemonDetail')
  }
  LazyLoadList() {
    console.log('懒加载')
    let { list } = this.props.pokelistStore
    if (this.state.displayList.length < 802) {
      this.setState({
        displayList: list.slice(0, this.state.displayList.length + 20)
      })
    }
  }

  render() {
    let list = this.state.displayList
    console.log(list)
    return (
      <Container style={styles.container}>
        <StatusBar backgroundColor="#ff0000" />
        <Header>
          <Left style={{ flex: 1 }} />
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Title style={{ color: '#ffffff' }}>宝可梦列表</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content>
          <TextInput
            style={styles.searchInput}
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            placeholder="请输入宝可梦的名称/属性/序号等"
          />
          <List style={styles.List}>
            <FlatList
              data={list}
              onEndReachedThreshold={0}
              onEndReached={() => this.LazyLoadList()}
              renderItem={({ item, index }) => (
                <ListItem
                  key={index}
                  onPress={() => {
                    this.toDetail(index + 1, item)
                  }}
                >
                  <Text>{index + 1}.</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.pokeListImg}
                    source={imgList[index].uri}
                  />
                  <Text style={styles.itemListName}>{item.cnName}</Text>
                  {this.renderType(item.type, item.cnTypes)}
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
