module.exports = {
    id        :     { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
    workerKey:      { public: true, type: 'TEXT', unique: true },
    fullName:       { public: true, type: 'TEXT' },
    startPeriod:    { public: true, type: 'DATE' },
    endPeriod:      { public: true, type: 'DATE' },
    sumDays:        { public: true, type: 'INTEGER' },
    sumWorkDays:    { public: true, type: 'INTEGER' },
    periodMatrix :  { public: true,
        type:   'MATRIX',
        label:  'Periods',
        fields : {
            id          : { type: 'INTEGER', autoIncrement: true,  primaryKey: true },
            StartDate   : { public: true, type: 'DATE'   },
            EndDate     : { public: true, type: 'DATE'   },
            SumDays     : { public: true, type: 'INTEGER'   },
            SumWorkDays : { public: true, type: 'INTEGER'  },
        }
    }
};
