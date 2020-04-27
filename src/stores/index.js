
import TodoService from '../services/TodoService/index.api';
import UserService from '../services/UserService/index.api';
import authStore from '../Authentication/Stores/';
import productStore from '../E_Commerce/Stores/ProductStore';
import CartStore from '../E_Commerce/Stores/CartStore';


import CounterStore from './CounterStore';
import UsersStore from './UsersStore';
import TodoStoreAPI from './TodoStoreAPI';

const userService=new UserService();
const todoService=new TodoService();

const counterStore = new CounterStore();
const usersStore=new UsersStore(userService);
const todosStore=new TodoStoreAPI(todoService);
const cartStore=new CartStore();

export default {
  counterStore,
  usersStore,
  todosStore,
  authStore,
  productStore,
  cartStore
};
