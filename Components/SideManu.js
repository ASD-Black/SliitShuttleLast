import React from 'react';
import { View,SafeAreaView, ScrollView, AsyncStorage, Image} from 'react-native';
import { Text, List, ListItem } from 'native-base';

export class SideManu extends React.Component {
    render(){
      return(
        <SafeAreaView style={{flex: 1}}>
          <View style={{alignText:'center', justifyContent: 'center', height:160}}>
          <Image style={{width:120, height:120, borderRadius: 60}}
             source={require('../assets/logeduser.jpg')}
            />
          </View>
          <Text style={{flexDirection:'row', marginLeft:150, fontSize: 22, marginTop:-95, marginBottom:60}}>IT16130326</Text>
          <ScrollView>
            <List>
              <ListItem onPress={()=> this.props.navigation.navigate('Profile')}>
                <Text>Profile</Text>
              </ListItem>
              <ListItem onPress={()=> this.props.navigation.navigate('Setting')}>
                <Text>Setting</Text>
              </ListItem>
              <ListItem onPress={()=> this.props.navigation.navigate('Payments')}>
                <Text>Payments</Text>
              </ListItem>
              <ListItem onPress={()=> this.props.navigation.navigate('Inquiry')}>
                <Text>Inquiry</Text>
              </ListItem>
            </List>
          </ScrollView>
          
          <List>
              <ListItem onPress={this.LogOut}>
                <Text>Logout</Text>
              </ListItem>
            </List>
        </SafeAreaView>
      )
    }
    LogOut = async () => {
      AsyncStorage.clear()
      this.props.navigation.navigate('auth')
    }
  }