
import TodoService from '../services/TodoService/index.api';
import UserService from '../services/UserService/index.api';

import AuthService from '../Authentication/Services/index';


import AuthStore from '../Authentication/Stores/';

import productStore from '../E_Commerce/Stores/ProductStore';
import CartStore from '../E_Commerce/Stores/CartStore';
import CounterStore from './CounterStore';
import UsersStore from './UsersStore';
import themeStore from './ThemeStore';

const userService=new UserService();

const authService=new AuthService();

const counterStore = new CounterStore();
const usersStore=new UsersStore(userService);

const cartStore=new CartStore();


const authStore=new AuthStore(authService);



export default {
  counterStore,
  usersStore,
  authStore,
  productStore,
  cartStore,
  themeStore,
};
