import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Status} from '@models/alert';
import {AnimateView} from '@models/animation';
import {GapHorizontal} from '@models/gap';
import {Label, LabelVariant} from '@models/label';
import {Palette} from '@styles/BaseColor';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface statusCardProps {
  title: string;
  bg?: string;
  rate?: string | number;
  icon?: VectorIcons;
  unit: string;
  onPress?: () => void;
  status?: string;
  index: number;
}
export const StatusCard: React.FC<statusCardProps> = ({
  title = 'Health',
  rate = '165',
  bg,
  unit = 'bpm',
  onPress,
  status = 'NORMAL',
  icon,
  index
}) => {
  if (!bg) {
    bg = Palette.background.light[550];
  }
  return (
    <AnimateView order={index}>
      <TouchableOpacity onPress={onPress}>
        <View style={{...styles.container, backgroundColor: bg}}>
          <View style={styles.top}>
            <Label variant={LabelVariant.H3_Bold.small.extra} title={title} />
            {icon}
          </View>
          <View style={styles.center}>
            <View style={styles.centerRow}>
              <Label variant={LabelVariant.H2.Roboto} title={rate} />
              <GapHorizontal w={2} />
              <Label variant={LabelVariant.Sub3.Roboto} title={unit} />
            </View>
          </View>
          <View style={styles.bottom}>
            <Status title={'phase 1'} />
            <FontAwesome
              name="location-arrow"
              size={15}
              color={Palette.background.dark[100]}
            />
          </View>
        </View>
      </TouchableOpacity>
    </AnimateView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIResponsive.Card.status,
    backgroundColor: Palette.background.light[550],
    padding: 10,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  top: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
