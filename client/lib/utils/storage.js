import { isString } from './typeOf.js';
import { typeError } from '../error/typeError.js';

const { localStorage: storage } = window;
// console.log(storage);

/* storage.setItem('name', 'tiger');
storage.setItem('obj', JSON.stringify({ name: 'tiger', age: 14 }));

console.log(JSON.parse(storage.getItem('obj')));
 */

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}

// export function getStorage(key) {
//   if (isString(key)) {
//     JSON.parse(storage.getItem(key));
//   }
// }

export function deleteStorage(key) {
  return new Promise((resolve) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
