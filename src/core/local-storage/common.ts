import Realm, {UpdateMode} from 'realm';

import {PersonalizeModel} from './models';
import {ModelNames, PersonalizeModelTy} from './types';

// add/update web/remote resources
export function updatePersonalizeModel(
  realm: Realm,
  {uriHash, uri}: {uriHash?: string; uri?: string},
  webData: Omit<PersonalizeModelTy, 'uriHash' | 'uri'>,
) {
  const __uriHash = uriHash;

  const {base64Data} = webData;
  const metaData = {...webData, base64Data: undefined};

  console.log(
    '\nUpdate Web Resource Cache :  ',
    '\nURI         :',
    uri,
    '[',
    uriHash,
    ',',
    __uriHash,
    ']',
    '\nbase64Data  :',
    `${base64Data.substring(0, 8)}....${base64Data.substring(
      base64Data.length - 8,
    )}`,
    '\nmetaData    :',
    JSON.stringify(metaData),
  );

  realm.write(() => {
    realm.create<PersonalizeModel>(
      ModelNames.PersonalizeModel,
      {
        ...metaData,
        uriHash: __uriHash,
        uri,
        base64Data,
      },
      UpdateMode.Modified,
    );
  });

  const dbRecord = getPersonalizeModel(realm, {
    uriHash,
    uri,
  }) as PersonalizeModelTy;

  console.log('\nUpdate Web Resource Cache :  DB Record');

  return dbRecord;
}

export function getPersonalizeModel(
  realm: Realm,
  {uriHash}: {uriHash?: string; uri?: string},
) {
  const __uriHash = uriHash;
  return realm
    .objects<PersonalizeModel>(ModelNames.PersonalizeModel)
    .filtered('uriHash == $0', __uriHash)
    .at(0);
}
// export function getWallet(realm: Realm, address: string) {
//     return realm.objects<Wallet>(ModelNames.Wallet).filtered('masked == $0 && address == $1', false, address).at(0)
// }
// export function addContact(realm: Realm, address: string, data: Omit<ContactTy, 'address' | 'masked'>) {

//     console_logs("\nAdd Contact : ",
//         "\nAddress : ", address,
//         "\nData :", JSON.stringify(data, null, "  ")
//     );

//     realm.write(
//         () => {
//             realm.create<Contact>(
//                 ModelNames.Contact,
//                 {
//                     ...data,
//                     address,
//                     masked: false,
//                 },
//                 UpdateMode.Modified
//             );
//         }
//     );

//     return realm.objects<Contact>(ModelNames.Contact).filtered('masked == $0 && address == $1', false, address).at(0);
// }
