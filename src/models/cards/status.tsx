import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Status} from '@models/alert';
import {GapHorizontal} from '@models/gap';
import {Label, LabelVarient} from '@models/label';
import {Pallete} from '@styles/BaseColor';
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
}
export const StatusCard: React.FC<statusCardProps> = ({
  title = 'Health',
  rate = '165',
  bg,
  unit = 'bpm',
  onPress,
  status = 'NORMAL',
  icon,
}) => {
  if (!bg) {
    bg = Pallete.background.light[550];
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.container, backgroundColor: bg}}>
        <View style={styles.top}>
          <Label varient={LabelVarient.H3_Bold.small.extra} title={title} />
          {icon}
        </View>
        <View style={styles.center}>
          <View style={styles.centerRow}>
            <Label varient={LabelVarient.H2.Roboto} title={rate} />
            <GapHorizontal w={2} />
            <Label varient={LabelVarient.Sub3.Roboto} title={unit} />
          </View>
        </View>
        <View style={styles.bottom}>
          <Status title={status} />
          <FontAwesome
            name="location-arrow"
            size={15}
            color={Pallete.background.dark[100]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...UIResponsive.Card.status,
    backgroundColor: Pallete.background.light[550],
    padding: 10,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
