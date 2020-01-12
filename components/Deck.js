import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import CardView from 'react-native-cardview' ;
import Colors from '../constants/Colors';



export default class Deck extends Component {

    render() {
        const { title,cardsCount ,cardId} = this.props;

        return (
      <View style={cardId%2 == 0 ? styles.MainContainerRed:styles.MainContainerGrey}>
         <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardViewStyle}>
             <Text style={styles.cardViewTitle}> {title} </Text>
             <Text style={styles.cardViewCount}> {cardsCount} cards </Text>
             
        </CardView>
      </View>
        )
    }
}

const styles = StyleSheet.create({

    MainContainerRed: {
        flex: 1,
        backgroundColor:Colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
      },
      MainContainerGrey: {
        flex: 1,
        backgroundColor:Colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
      },
     
      cardViewStyle:{
        width: 250, 
        height: 180,
     
      },
     
      cardViewTitle:{
        fontSize: 40, 
        color: '#000', 
        textAlign: 'center', 
        marginTop: 50    
      },
      cardViewCount:{
        fontSize: 20, 
        color: '#000', 
        textAlign: 'center', 
        marginBottom: 5   
      }
})