import Api from '../index';
import Constants from '../Constants';

// User Login Authentication
const loginUser = (data: object) => {
  return Api(Constants.LOGIN, data, 'post', null);
}

export { loginUser };