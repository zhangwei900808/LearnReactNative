import React,{ Component } from 'react';
import { AppRegistry,SectionList,StyleSheet,Text,View } from 'react-native';

export default class SectionListBasics extends Component{
    constructor(props){
        super(props);
        this.state={phpData:[
                    {title:'D',data:['Devin']},
                    {title:'J',data:['Jackson','James','Jillian','Jimmy','Joel','John','Julie']}
        ],
     mydata:{title:'zhangwei'}}
    }
    componentDidMount(){
        this.getMoviesFromApiAsync();
    }
     getMoviesFromApiAsync() {
        //  fetch('http://www.awbeci.app/api/v1/user')
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log('hhhhhhh')
        //         console.log('result', result);
        //         this.setState({
        //             mydata:result
        //         })
        //     })
        //     .catch(error => {
        //         console.log('error', error);
        //     })
            // 注意：用自定义域名来访问会报错
            fetch('http://192.168.10.10/api/v1/user')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                    mydata:responseJson
                })
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    render(){
        return(
            <View style={styles.container}>
                <Text>{this.state.mydata.title}</Text>
                {/*<SectionList
                sections={this.state.phpData}
                renderItem={({item})=><Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}/>*/}
            </View>
        )
    }
}

let arr = [
    {title:'D',data:['Devin']},
                    {title:'J',data:['Jackson','James','Jillian','Jimmy','Joel','John','Julie']}
];

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})