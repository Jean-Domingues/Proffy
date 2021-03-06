import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import giveClassesBg from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveClassesBg} style={styles.content}>
        <Text style={styles.title}>Quer ser um professor?</Text>
        <Text style={styles.description}>
          Para começar, primeiro você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={()=> goBack()} >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton> 
    </View>
  );
}

export default GiveClasses;
