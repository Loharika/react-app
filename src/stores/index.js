
import TodoService from '../services/TodoService/index.api';
import UserService from '../services/UserService/index.api';
import AppService from '../services/AppService';
import AuthService from '../Authentication/Services/index';


import AuthStore from '../Authentication/Stores/';

import productStore from '../E_Commerce/Stores/ProductStore';
import CartStore from '../E_Commerce/Stores/CartStore';
import CounterStore from './CounterStore';
import UsersStore from './UsersStore';
import TodoStoreAPI from './TodoStoreAPI';
import AppStore from './AppStore';
import themeStore from './ThemeStore';

const userService=new UserService();
const todoService=new TodoService();
const appService=new AppService();
const authService=new AuthService();

const counterStore = new CounterStore();
const usersStore=new UsersStore(userService);
const todosStore=new TodoStoreAPI(todoService);
const cartStore=new CartStore();
const appStore=new AppStore(appService);

const authStore=new AuthStore(authService);



export default {
  counterStore,
  usersStore,
  todosStore,
  authStore,
  productStore,
  cartStore,
  appStore,
  themeStore,
};
