import authStore from './authStore.js';
import authService from '../Services';

const authServiceInstance=new authService();
const authStoreInstance=new authStore(authServiceInstance);

export default authStoreInstance;