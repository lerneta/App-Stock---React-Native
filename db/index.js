import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('address.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS producto (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          image TEXT NOT NULL,
          amount INTEGER NOT NULL,
          stock INTEGER NOT NULL
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
  amount,
  stock,
  image

) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO producto (title, image, amount, stock) VALUES (?, ?, ?, ?)`,
        [title, image, amount, stock],
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
        'SELECT * FROM producto;',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });
  return promise;
}

export const eliminaritem = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'delete FROM producto where id=' + id + ';',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      );
    });
  });
  return promise;
}