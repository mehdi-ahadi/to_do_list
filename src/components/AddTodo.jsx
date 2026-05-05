import "../styles/addTodo.css"
import { useState } from "react"

function AddTodo() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const _reset = () => {
        setTitle("")
        setDesc("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {
            title,
            desc,
            id: Date.now(),
            completed: false
        }
        _reset()
    }


    return (
        <div className="add-todo">
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit} className="todo-form">
                <div className="text-field flexCenter">
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title" />
                </div>
                <div className="text-field flexCenter">
                    <input
                        type="text"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        placeholder="Description" />
                </div>
                <div className="flexCenter ">
                    <button className="btn-submit flexCenter" type="submit">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
