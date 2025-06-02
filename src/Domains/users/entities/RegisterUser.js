class RegisterUser {
  constructor({ username, password, fullname }) {
    if (!username || !password || !fullname) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_REQUIRED_PROPERTY');
    }

    if (typeof username !== 'string'
      || typeof password !== 'string'
      || typeof fullname !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (username.length > 50) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }

    if (!username.match(/^[\w]+$/)) { // /^[a-zA-Z0-9_]+$/
      throw new Error('REGISTER_USER.USERNAME_CONTAIN_FORBIDDEN_CHARACTER');
    }

    this.username = username;
    this.password = password;
    this.fullname = fullname;
  }
}

module.exports = RegisterUser;
