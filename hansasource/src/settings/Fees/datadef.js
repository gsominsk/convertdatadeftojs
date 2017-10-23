// @flow

module.exports = {
    id       : { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    Name     : { public: true, type: 'STRING', label : 'Name' },
    Value    : { public: true, type: 'STRING', label : 'Value' }
};
