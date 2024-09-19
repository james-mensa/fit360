import {VectorIcons} from '@common/VectorIcons';
import {UIResponsive} from '@layout/ResponsiveUi';
import {Palette} from '@styles/BaseColor';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Label, LabelVariant} from './label';
import React, {useEffect, useState} from 'react';
import {
  launchImageLibrary,
  launchCamera,
  MediaType,
  PhotoQuality,
} from 'react-native-image-picker';
import {HorizontalDivider} from './divider';
import {requestCameraPermission} from '@core/utils';

interface Uploaderprops {
  label?: string;
  handleFile?: (_file: string) => void;
  img?: string;
}

export const ImageUploader: React.FC<Uploaderprops> = ({
  label,
  handleFile,
  img = null,
}) => {
  const [base64Image, setBase64Image] = useState<string | null>(img);

  const selectImage = async () => {
    const options = {
      mediaType: 'photo' as MediaType,
      maxWidth: 300,
      maxHeight: 300,
      quality: 1 as PhotoQuality | undefined,
    };

    launchImageLibrary(options, async response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        if (asset.uri) {
          const base64String = `data:image/png;base64,${await uriToBase64(
            asset.uri,
          )}`;
          setBase64Image(base64String);
          handleFile && handleFile(base64String);
        }
      }
    });
  };

  const takePhoto = async () => {
    const permission_response: boolean = await requestCameraPermission();
    if (!permission_response) {
      return;
    }
    const options = {
      mediaType: 'photo' as MediaType,
      maxWidth: 300,
      maxHeight: 300,
      quality: 1 as PhotoQuality,
    };

    launchCamera(options, async response => {
      if (response.didCancel) {
      } else if (response.errorMessage) {
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        if (asset.uri) {
          const base64String = `data:image/png;base64,${await uriToBase64(
            asset.uri,
          )}`;
          setBase64Image(base64String);
          handleFile && handleFile(base64String);
        }
      }
    });
  };

  useEffect(() => {
    if (img) {
      setBase64Image(img);
    }
  }, [img]);

  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        {base64Image && (
          <Image source={{uri: base64Image}} style={styles.image} />
        )}
        <TouchableOpacity onPress={selectImage}>
          <View>{VectorIcons.Upload}</View>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectImage}>
          <Label
            title={label ?? 'Click to upload profile image'}
            variant={LabelVariant.Sub1.Extra}
            color={Palette.text.light[800]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.take_photo_line}>
        <HorizontalDivider
          width={UIResponsive.Body.width / 3}
          color={Palette.background.light[300]}
        />
        <Label
          title={'Or'}
          variant={LabelVariant.H3_Bold.small.extra}
          color={Palette.text.dark[400]}
        />
        <HorizontalDivider
          width={UIResponsive.Body.width / 3}
          color={Palette.background.light[300]}
        />
      </View>
      <TouchableOpacity onPress={takePhoto}>
        <View style={styles.take_photo}>
          <Label title={'Take photo'} variant={LabelVariant.Sub1.Extra} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 50,
  },
  container: {
    width: UIResponsive.Body.width - 50,
    height: 150,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Palette.background.light[300],
    backgroundColor: Palette.background.light[100],
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    ...Platform.select({
      ios: {
        shadowColor: Palette.background.light[500],
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 50,
        shadowColor: Palette.background.light[500],
      },
    }),
  },
  take_photo_line: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  take_photo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Palette.background.light[300],
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: Palette.background.light[500],
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 40,
        shadowColor: Palette.background.light[300],
      },
    }),
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 5,
    top: 5,
    borderRadius: 30,
    borderColor: Palette.background.light[200],
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

const uriToBase64 = async (uri: string): Promise<string> => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blobToBase64(blob);
};

const blobToBase64 = (blob: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String.split(',')[1]);
    };
    reader.readAsDataURL(blob);
  });
};
