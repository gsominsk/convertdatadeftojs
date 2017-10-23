module.exports = { fields: 
   { id: { type: 'INTEGER', autoIncrement: true, primaryKey: true },
     fForumRootConf: { public: true, type: 'TEXT' },
     fForumReplyConf: { public: true, type: 'TEXT' },
     fForumReportConf: { public: true, type: 'TEXT' },
     fFAQRootConf: { public: true, type: 'TEXT' },
     fSentCustEmailRep: { public: true, type: 'INTEGER' },
     fCustMailFrom: { public: true, type: 'TEXT' },
     fFileIcon: { public: true, type: 'TEXT' },
     fCSSPath: { public: true, type: 'TEXT' },
     fWikiMarkupFlag: { public: true, type: 'INTEGER' },
     fEnableAttachments: { public: true, type: 'INTEGER' } } }