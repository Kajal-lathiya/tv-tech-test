import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import moment from 'moment';

import styles from './styles';
import CommonStyles from '../CommonStyles';

const DATA = [
  {
    id: 1,
    list: [
      {name: 'Entity 1', price: '99999'},
      {name: 'Entity 2', price: '995454'},
    ],
  },
  {
    id: 2,
    list: [
      {name: 'Entity 1', price: '99999'},
      {name: 'Entity 2', price: '995454'},
      {name: 'Entity 3', price: '676767'},
    ],
  },
  {
    id: 3,
    list: [
      {name: 'Entity 1', price: '797896'},
      {name: 'Entity 2', price: '343454'},
    ],
  },
  {
    id: 4,
    list: [
      {name: 'Entity 1', price: '64545'},
      {name: 'Entity 2', price: '23234'},
    ],
  },
];
export default function OverView() {
  const renderItem = ({item, key}) => {
    const {id, list} = item;
    return (
      <View key={key}>
        <Text
          style={[
            CommonStyles.font16W,
            styles.margin10,
            CommonStyles.fontBold,
          ]}>
          Section {id}
        </Text>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const renderListItem = ({item, key}) => {
    const {name, price} = item;
    return (
      <View key={key} style={styles.entityView}>
        <Image
          source={require('../../Assets/entity.png')}
          resizeMode="cover"
        />
        <View style={styles.entityDetails}>
          <Text style={CommonStyles.font16W}>{name}</Text>
          <Text style={CommonStyles.font16W}>{price}</Text>
        </View>
        <Image
          source={require('../../Assets/ArrowRight.png')}
          resizeMode="cover"
          style={styles.imageSize18}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={CommonStyles.appContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Text style={CommonStyles.font16W}>
              {moment(new Date()).format(`D MMM 'YY`)}
            </Text>
            <View style={styles.row}>
              <Text
                style={[
                  CommonStyles.font30W,
                  CommonStyles.fontBold,
                  CommonStyles.fontWhite,
                ]}>
                Main
              </Text>
              <Image
                source={require('../../Assets/graduation.png')}
                resizeMode="cover"
                style={[styles.imageSize18, styles.marginTL]}
              />
            </View>
          </View>
          <Image
            source={require('../../Assets/user.png')}
            resizeMode="cover"
            style={styles.userImage}
          />
        </View>
        <View style={styles.subView}>
          <View style={styles.row}>
            <View style={[styles.flex1, styles.titleView]}>
              <Text style={[CommonStyles.font18W, styles.marginB10]}>
                Title 1
              </Text>
              <Text style={CommonStyles.font30W}>₤99M</Text>
              <Text style={CommonStyles.font14Green}>+ 10%</Text>
            </View>
            <View style={[styles.flex1, styles.subTitle]}>
              <View>
                <Text style={CommonStyles.font18W}>Sub Title 1</Text>
                <View style={styles.row}>
                  <Text style={CommonStyles.font30W}>₤99M</Text>
                  <Text style={CommonStyles.font14Green}> +20%</Text>
                </View>
              </View>
              <View style={styles.borderTop}>
                <Text style={CommonStyles.font18W}>Sub Title 1</Text>
                <View style={styles.row}>
                  <Text style={CommonStyles.font30W}>₤99M</Text>
                  <Text style={CommonStyles.font14red}> -10%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.row, styles.refresh]}>
            <Image
              source={require('../../Assets/refresh.png')}
              resizeMode="cover"
            />
            <Text> 2 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.sectionList}>
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
