import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import {FONTS} from '@common/fonts';
import {UImage} from '@models/Icon';
import {Icons} from '@assets/register';
interface TopNavProps {
  left?: {
    icon?: React.ReactNode;
    onPress?: () => void;
    title?: string;
  };
  right?: {
    profile?: {
      icon?: string;
      onPress?: () => void;
    };
    children?: React.ReactNode;
  };
}

interface PageBaseProps {
  children: React.ReactNode;
  topNav: TopNavProps;
}

export const PageBase: React.FC<PageBaseProps> = ({topNav, children}) => {
  return (
    <View style={styles.base}>
      <View style={styles.layout}>
        <View style={styles.nav}>
          <View style={styles.navLeft}>
            {topNav.left && (
              <TouchableOpacity onPress={topNav.left.onPress}>
                {topNav.left.icon ?? (
                  <View style={styles.IconContainer}>
                    <Ionicons
                      name={'arrow-back'}
                      size={UIResponsive.Icons.medium}
                      color={Palette.Icons.default.dark}
                    />
                  </View>
                )}
              </TouchableOpacity>
            )}
            <Text style={styles.navTitle}>{topNav.left?.title}</Text>
          </View>

          {topNav.right && (
            <View style={styles.navRight}>
              {topNav.right.children ?? (
                <TouchableOpacity onPress={topNav.right.profile?.onPress}>
                  <View style={styles.calenderCotainer}>
                    <Feather
                      name={'calendar'}
                      size={UIResponsive.Icons.small}
                      color={Palette.Icons.default.dark}
                    />
                  </View>
                </TouchableOpacity>
              )}
              {topNav.right.profile && (
                <TouchableOpacity>
                  <UImage source={Icons.profile} resizeMode="cover" />
                </TouchableOpacity>
              )}
            </View>
          )}
          {topNav.right?.children}
        </View>
        <View style={styles.body}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    ...UIResponsive.FullScreen,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Palette.background.dark[100],
    paddingVertical: 30,
  },
  layout: {
    width: UIResponsive.Body.width,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  nav: {
    ...UIResponsive.TopNav,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  navLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  navRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  navTitle: {
    color: Palette.text.light[100],
    fontSize: 18,
    textAlign: 'center',
    fontFamily: FONTS.TRegular,
  },
  IconContainer: {
    backgroundColor: Palette.background.light[100],
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    height: UIResponsive.Body.height,
  },
  profileContainer: {
    backgroundColor: Palette.background.light[100],
    height: 35,
    width: 35,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.9,
  },
  calenderCotainer: {
    backgroundColor: Palette.background.light[100],
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.9,
  },
});
