import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home screen</Text>

      <Link href="/about" style={styles.link}>
        Go to About screen
      </Link>

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        
      <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    fontSize: 18,
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  imageContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
