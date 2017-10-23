module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fServersFolder: { public: true, type: 'TEXT' },
     fVersionsFolder: { public: true, type: 'TEXT' },
     fPollLocalServersSeconds: { public: true, type: 'INTEGER' },
     fPollRemoteServersSeconds: { public: true, type: 'INTEGER' },
     fAPIKey: { public: true, type: 'TEXT' },
     fXNewVersionsFolder: { public: true, type: 'TEXT' },
     fUpdateNodesFlag: { public: true, type: 'INTEGER' },
     fHansaVersion: { public: true, type: 'TEXT' },
     fNewHansaVersion: { public: true, type: 'TEXT' },
     fXHostingConfiguration: { public: true, type: 'TEXT' },
     fXHostingType: { public: true, type: 'INTEGER' },
     fServerIsCloudController: { public: true, type: 'INTEGER' },
     fXHostingConfig: { public: true, type: 'INTEGER' },
     fXHostingConfigComment: { public: true, type: 'TEXT' },
     fRegInCountry: { public: true, type: 'INTEGER' },
     fServiceCallTimeoutSeconds: { public: true, type: 'INTEGER' },
     fCCAddr: { public: true, type: 'TEXT' },
     fCCPort: { public: true, type: 'INTEGER' },
     fCCHTTPPort: { public: true, type: 'INTEGER' },
     fCCHTTPSPort: { public: true, type: 'INTEGER' },
     fNodeCode: { public: true, type: 'TEXT' },
     fHostingPartner: { public: true, type: 'INTEGER' },
     fStandardAccVersion: { public: true, type: 'TEXT' },
     fStandardERPVersion: { public: true, type: 'TEXT' } } }