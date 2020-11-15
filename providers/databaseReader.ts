import SQLite from 'react-native-sqlite-storage';

const connection = {
    database : SQLite.openDatabase({
            name: 'calculator_db',
            location: 'default',
            createFromLocation: '~calculator_db.db',
        },
        () => {},
        error => {
            console.log(error);
        })
};

export const insertData = (data : {} | [], table : string) => {

};

export const updateEntry = (data : {} | [], table : string) => {

};

export const deleteEntry = (id : number, table : string) => {

};

export const getEntry = (id : number, table : string) => {

};

export const getData = (table : string) : any[] => {
    let dbData: any[] = [];
    connection.database.transaction(tx => {
        tx.executeSql(
            `SELECT * FROM ${ table }`, [],
            (tx, results) => {
                results.rows.raw().forEach(item => dbData.push(item));
            })
    })
    .then(r => console.log(r));
    
    return dbData;
};

export const execute = (query : string) => {

};
