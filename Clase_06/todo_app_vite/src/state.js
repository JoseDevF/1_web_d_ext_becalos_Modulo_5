import axios from 'axios'
/* Este MODULO que maneja todo el estado de la aplicación, concentra la funcionalidad para manipular datos */
const BASE_URL_API = "http://localhost:3005/api";

function callback(error, todos) {
    if (error) {
        console.error('Error: ', error.message)
    } else {
        /* todos.forEach(todo => {
            console.log(`Listado de todos: ${todo.id} ${todo.task} - ${todo.dueDate}`);
        }); */
        return todos;
    }
}

export const getTodos = () => {

    let todosArray = []
    axios.get(`${BASE_URL_API}/todos`)
        .then(respuesta => todosArray = callback(null, respuesta.data))
        .catch(error => callback(error, null))
        .finally(() => { return todosArray })
    //return JSON.parse(todos_list ?? "[]");

    //return todosArray;
}

export const todos = getTodos()
//todos();
console.log(todos);

/* addTodo */
/* Ejecutar función para añadir un nuevo pendiente, a un listado de pendientes y si es a traves de API, llamar a la API con un POST para crear. */
export function addTodo(item) {
    //const todos = getTodos()
    todos.push({ ...item, done: false });
    persist();
}

export function toggleDone(index) {
    //const todos = getTodos()
    todos[index].done = !todos[index].done;
    persist();
}

export function removeTodo(index) {
    //const todos = getTodos()
    todos.splice(index, 1);
    persist();
}

function persist() {
    localStorage.setItem("todos", JSON.stringify(todos));
}