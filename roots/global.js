import SQLite from 'react-native-sqlite-storage';

global.database = SQLite.openDatabase({
        name : 'calculator_db',
        location : 'default',
        createFromLocation : '~calculator_db.db',
    },
    () => console.log('Database connected successfully.'),
    error => console.log(error)
);
