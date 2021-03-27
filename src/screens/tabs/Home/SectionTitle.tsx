import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface SectionTitleProps {
  navigation: any;
  title: String;
  linkPage: String;
}

const SectionTitle = ({navigation, title, linkPage}: SectionTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(linkPage)}>
        <Text style={styles.link}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginTop: 30.0,
    marginBottom: 20.0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1.3rem',
    lineHeight: '1.3rem',
    color: '$blackColour',
  },
  link: {
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    color: '$greenColour',
  },
});

export default SectionTitle;
