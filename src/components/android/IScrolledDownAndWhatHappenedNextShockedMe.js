import React,{ Component } from 'react';
import { ScrollView,Image,Text,View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Image source={require('./../../images/favicon.png')}/>
                <Text style={{fontSize:96}}>React Native</Text>
            </ScrollView>
        )
    }
}