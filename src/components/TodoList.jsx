function TodoList({ todos }) {
    return (
        <div>{todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
        ))}</div>
    )
}

function Todo({ todo }) {
    return (
        <div>Todos</div>
    )
}

export default TodoList
