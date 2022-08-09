import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBar } from 'react-navigation-tabs';
import style from './style';

const TabBarComponent = (props) => {
  const insets = useSafeAreaInsets();
  return <BottomTabBar {...props} style={style.tabBarStyle(insets)} />;
};
export default TabBarComponent;
