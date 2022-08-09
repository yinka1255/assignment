import { StyleSheet } from 'react-native';
import { colors, scale, isNotch, PLATFORM_IOS } from '../../util';

export const TAB_BAR_HEIGHT = PLATFORM_IOS ? scale(80) : scale(60);
export default StyleSheet.create({
  tabBarStyle: (insets) => ({
    backgroundColor: colors.white,
    paddingBottom: PLATFORM_IOS && isNotch ? scale(20) : scale(0),
    position: 'absolute',
    height: isNotch ? TAB_BAR_HEIGHT - insets.bottom : TAB_BAR_HEIGHT,
    bottom: 0,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      width: 4,
      height: -4,
    },
  }),
  tabIconContainerStyle: { justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1, paddingTop: isNotch ? scale(10) : 0 },
  tabIconImageStyle: { height: scale(20), width: scale(20) },
  tabIconImageStyle1: {paddingBottom: scale(1), width: scale(21), height: scale(15) },
  tabTextStyle: { fontSize: scale(10), textAlign: 'center', fontFamily: 'Airbnb Cereal App', fontWeight: '700', paddingTop: scale(7) },
  tabBarProfileNoPicture: { height: scale(20), width: scale(20), borderRadius: 20 },
  tabBarProfilePicture: { height: scale(18), width: scale(18), borderRadius: 18 },
  activeInitialBox: { height: scale(20), width: scale(20), borderRadius: 20 },
  inactiveImgBox: { height: scale(20), width: scale(20), borderRadius: 20, borderColor: colors.white, borderWidth: 1 },
  activeImgBox: { height: scale(20), width: scale(20), borderRadius: 20, borderWidth: 0 },
  initialText: { fontSize: scale(8) },
});
