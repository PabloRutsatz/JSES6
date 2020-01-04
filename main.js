class Matematica{
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));

class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo ToDo.');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo();
}