import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SkeletonImage from 'react-native-skeleton-image';

export default function App() {
  const uri = `https://placehold.co/300x200/palegreen/azure.png?text=Hello,%20world!&v=${new Date().getTime()}`;

  return (
    <View style={styles.container}>
      <Text>{"RN's <Image />"}</Text>
      <Image style={styles.image} source={{ uri }} />

      <View style={styles.spacer} />

      <Text>{'<SkeletonImage />'}</Text>
      <SkeletonImage style={styles.image} source={{ uri }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  spacer: {
    height: 24,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },
});
