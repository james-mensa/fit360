import Realm from 'realm';

export class PersonalizeModel extends Realm.Object<PersonalizeModel> {
  uriHash!: string;
  uri!: string;
  base64Data!: string;
  mime?: string;
  updateTimestamp?: number;
  timeToLeave?: number;

  static schema: Realm.ObjectSchema = {
    name: 'PersonalizeModel',
    primaryKey: 'uriHash',
    properties: {
      uriHash: 'string',
      uri: 'string',
      base64Data: 'string',
      mime: 'string',
      updateTimestamp: 'int',
      timeToLeave: 'int',
    },
  };
}
