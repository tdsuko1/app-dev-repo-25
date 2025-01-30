import React from 'react';
import {View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const InstagramHomeScreen = () => {
    return(
        <View style = {{
            flex:1
        }}>
            <View Style = {{
                flexDirection: 'row',
                justyifyContent: 'space-between'
            }}>
                <Text style = {{
                    fontFamily: 'Pacifico-Regular',
                    fontSize: 30,
                    marginLeft: 16
                }}>
                    Instagram
                </Text>
                <View style = {{
                    flexDirection : 'row',
                    alignItems: 'center',
                    marginRight:8
                }}>
                    <View style = {{
                        margin : 8
                    }}>
                      <Icon name = 'plus-square-o' type = 'font-awesome' size = {26} color = 'blue'
                      />
                      <Icon name = 'heart-o' type = 'font-awesome' size = {26} color = 'red'
                      />
                      <Icon name = 'paper-plane-outline' type = 'ionicon' size = {26} color = 'pink'
                      />
                    </View>
                </View>
            </View>
          </View>
    )
  
};

export default InstagramHomeScreen;