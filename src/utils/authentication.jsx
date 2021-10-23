const initUser = {
  username: 'admin',
  password: 'admin',
};

class Authentication {
  constructor() {}

  userLogin = (user) => {
    if (
      initUser.username === user.username &&
      initUser.password !== user.password
    )
      return null;
    return user;
  };
}

const authentication = new Authentication();

export default authentication;
