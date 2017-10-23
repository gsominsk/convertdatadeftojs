module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fComment: { public: true, type: 'TEXT' },
     fAmazonAccessKeyID: { public: true, type: 'TEXT' },
     fAmazonSecretAccessKey: { public: true, type: 'TEXT' },
     fAmazonKeyPairID: { public: true, type: 'TEXT' },
     fHostingType: { public: true, type: 'INTEGER' },
     fClosed: { public: true, type: 'INTEGER' },
     fAmazonAccountNumber: { public: true, type: 'TEXT' },
     fAmazonRegion: { public: true, type: 'TEXT' },
     fAmazonZone: { public: true, type: 'TEXT' },
     fAmazonInstanceType: { public: true, type: 'TEXT' },
     fAmazonInstanceId: { public: true, type: 'TEXT' },
     fAmazonImageId: { public: true, type: 'TEXT' },
     fAmazonKernelId: { public: true, type: 'TEXT' },
     fAmazonPrivateIP: { public: true, type: 'TEXT' },
     fAmazonPublicDNS: { public: true, type: 'TEXT' },
     fNodeHTTPPort: { public: true, type: 'INTEGER' },
     fNodeHTTPSPort: { public: true, type: 'INTEGER' },
     fNodePort: { public: true, type: 'INTEGER' },
     fAmazonEC2UserFlag: { public: true, type: 'INTEGER' },
     fAmazonCloudArchiveBucket: { public: true, type: 'TEXT' },
     fAmazonVPCSubnet: { public: true, type: 'TEXT' },
     fAmazonVPCId: { public: true, type: 'TEXT' },
     fDiscontinued: { public: true, type: 'INTEGER' },
     fSLUsername: { public: true, type: 'TEXT' },
     fSLPassword: { public: true, type: 'TEXT' },
     fSLAdminUser: { public: true, type: 'TEXT' } } }