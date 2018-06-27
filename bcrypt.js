const bcrypt = require('bcrypt');
class Hash {
  static hashPassword(password) {
    return new Promise((resolve, rejects) => {
      bcrypt.hash(password, 10, (err, hash) => {
        if (err) reject(err);
        else {
          resolve(hash);
        }
      });
    });
  }
}

Hash.hashPassword('password').then(res => console.log(res));
