import todosResponse from '../../fixtures/getTodosResponse.json';
class TodosFixtureService{
    getTodosAPI=()=>{
        return new Promise((resolve,reject)=>{
            resolve(todosResponse);
        });
    }
}
export default TodosFixtureService;