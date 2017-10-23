module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fRingVolume: { public: true, type: 'INTEGER' },
     fCallVolume: { public: true, type: 'INTEGER' },
     fNotificationType: { public: true, type: 'INTEGER' },
     fSoundInDevice: { public: true, type: 'TEXT' },
     fSoundOutDevice: { public: true, type: 'TEXT' },
     fRingerDevice: { public: true, type: 'TEXT' } } }