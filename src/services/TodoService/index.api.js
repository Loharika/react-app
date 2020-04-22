import {action} from 'mobx';
import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
class TodoService{
    api;
    constructor(){
        this.api=create({
            baseURL:'https://5e6864ded426c00016b7cfce.mockapi.io/api/v1/'
        });
    }
    @action.bound
    getTodosAPI(){
        return (networkCallWithApisauce(
            this.api,
            'todos/',
            {},
            apiMethods.get
        ));
    }
    
}
export default TodoService;