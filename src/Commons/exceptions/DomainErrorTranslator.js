const InvariantError = require('./InvariantError');

const DomainErrorTranslator = {
  translate(error) {
    const [domain, key] = error.message.split('.');

    if (!(domain in this._glossary)) return error;

    const message = this._glossary[domain].message
      + (this._glossary[domain].message ? ' karena ' : '')
      + this._glossary[domain].description[key];

    return new InvariantError(message);
  },
};

// ---------- from course module ----------
// const DomainErrorTranslator = {
//   translate(error) {
//     return DomainErrorTranslator._directories[error.message] || error;
//   },
// };

// DomainErrorTranslator._directories = {
//   'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
//   'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),
//   'REGISTER_USER.USERNAME_LIMIT_CHAR': new InvariantError('tidak dapat membuat user baru karena karakter username melebihi batas limit'),
//   'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER': new InvariantError('tidak dapat membuat user baru karena username mengandung karakter terlarang'),
// };

// ---------- my first refactor attempt ----------
// const domain = 'REGISTER_USER';
// const message = 'tidak dapat membuat user baru karena ';

// DomainErrorTranslator._directories = {
//   [domain + '.NOT_CONTAIN_REQUIRED_PROPERTY']:
//     new InvariantError(message + 'properti yang dibutuhkan tidak ada'),
//   [domain + '.NOT_MEET_DATA_TYPE_SPECIFICATION']:
//     new InvariantError(message + 'tipe data tidak sesuai'),
//   [domain + '.USERNAME_LIMIT_CHAR']:
//     new InvariantError(message + 'karakter username melebihi batas limit'),
//   [domain + '.USERNAME_CONTAIN_FORBIDDEN_CHARACTER']:
//     new InvariantError(message + 'username mengandung karakter terlarang'),
// };

DomainErrorTranslator._glossary = {
  REGISTER_USER: {
    message: 'tidak dapat membuat user baru',
    description: {
      NOT_CONTAIN_REQUIRED_PROPERTY: 'properti yang dibutuhkan tidak ada',
      NOT_MEET_DATA_TYPE_SPECIFICATION: 'tipe data tidak sesuai',
      USERNAME_LIMIT_CHAR: 'karakter username melebihi batas limit',
      USERNAME_CONTAIN_FORBIDDEN_CHARACTER:
        'username mengandung karakter terlarang',
    },
  },
  USER_LOGIN: {
    message: '',
    description: {
      NOT_CONTAIN_NEEDED_PROPERTY: 'harus mengirimkan username dan password',
      NOT_MEET_DATA_TYPE_SPECIFICATION: 'username dan password harus string',
    },
  },
  REFRESH_AUTHENTICATION_USE_CASE: {
    message: '',
    description: {
      NOT_CONTAIN_REFRESH_TOKEN: 'harus mengirimkan token refresh',
      PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION: 'refresh token harus string',
    },
  },
  DELETE_AUTHENTICATION_USE_CASE: {
    message: '',
    description: {
      NOT_CONTAIN_REFRESH_TOKEN: 'harus mengirimkan token refresh',
      PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION: 'refresh token harus string',
    },
  },
};

module.exports = DomainErrorTranslator;
