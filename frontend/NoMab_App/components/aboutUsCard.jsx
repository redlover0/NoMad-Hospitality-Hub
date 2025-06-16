import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";

export default function AboutUsCard({
                                        name,
                                        bio,
                                        icon="person-circle-outline",
                                        linkin,
    github,
                                    }) {
    const handleLinkPress = async (url) => {
        if (url) {
            try {
                await Linking.openURL(url)
            } catch (error) {
                console.error('Failed to open URL:', error)
            }
        }
    }

  return (
      <View style={styles.cardContainer}>
          <View style={styles.cardHeaderContainer}>
              <View style={styles.iconContainer}>
                  <Ionicons name={icon} size={50} color="#4A90E2" />
              </View>
              <View style={styles.housekeeperInfo}>
                  <Text style={styles.cardHeaderText}>{name}</Text>
                  <Text style={styles.bioText}>{bio}</Text>                        </View>
          </View>
          <View style={styles.statusContainer}>
              {/*<Ionicons name="call" size={20} color="#4A90E2"*/}
              {/*          style={[styles.iconContainer, {marginLeft: 15, marginRight: 30}]}/>*/}
              {/*<Text>+1 234 567 8901</Text>*/}
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', marginTop: 10,}}>
              <TouchableOpacity  onPress={() => handleLinkPress}>
                  <Ionicons name="logo-linkedin" size={35} color="#4A90E2" style={{marginLeft: 15, marginRight: 30}}/>
              </TouchableOpacity>
              <View style={{width: 40}}>

              </View>
              <TouchableOpacity onPress={() => handleLinkPress} >
                  <Ionicons name="logo-github" size={35}  style={{marginLeft: 15, marginRight: 30}}/>
              </TouchableOpacity>
              {/*<Text style={{fontSize: 14, color: '#666'}}>LinkedIn</Text>*/}
              {/*<Text style={{fontSize: 14, color: '#666'}}>Github</Text>*/}
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        elevation: 2,
        // height: 200,
        width: 375,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    iconContainer: {
        marginRight: 12,
    },
    housekeeperInfo: {
        flex: 1,
    },
    cardHeaderText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bioText: {
        fontSize: 14,
        wordWrap: 'break-word',
        // color: '#4CAF50',
        fontWeight: '500',
    }
});