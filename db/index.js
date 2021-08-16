import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          image TEXT NOT NULL,
          amount INT NOT NULL,
        )`,
        [],
        () => { resolve() },
        (_, err) => { reject(err) },
      )
    });
  });

  return promise;
}

export const insertitem = (
  title,
  image,
  amount

) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO items (title, image, amount) VALUES (?, ?, ?)`,
        [title, image, address, lat, lng],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}

export const traeritem = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items;',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });

  return promise;
}