
import TodoService from '../services/TodoService/index.api';
import UserService from '../services/UserService/index.api';

import CounterStore from './CounterStore';
import UsersStore from './UsersStore';
import TodoStoreAPI from './TodoStoreAPI';

const userService=new UserService();
const todoService=new TodoService();

const counterStore = new CounterStore();
const usersStore=new UsersStore(userService);
const todosStore=new TodoStoreAPI(todoService);

export default {
  counterStore,
  usersStore,
  todosStore,
};
