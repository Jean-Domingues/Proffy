import React from 'react';

import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import wppIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: 'https://github.com/Jean-Domingues.png' }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Jean Domingues</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, incidunt?
        {'\n'} 
        Lorem ipsum dolor, eius.
      </Text>

      <View style={styles.footer}> 
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={wppIcon} />
            <Text style={styles.contactButtonText}>
              Whatsapp
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
