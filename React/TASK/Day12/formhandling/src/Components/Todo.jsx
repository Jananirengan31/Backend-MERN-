
import { useState } from "react";

const Todo = () => {

    const [tasks, setTasks] = useState([]);

    const [taskName, setTaskName] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Pending");

    const [editId, setEditId] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = () => {

        if (!taskName.trim() || !date || !status) {
            setError("Please fill all the fields");
            return;
        }

        if (editId === null) {

            const newTask = {
                id: crypto.randomUUID(),
                taskName: taskName.trim(),
                date: date,
                status: status
            };

            setTasks([...tasks, newTask]);

        } else {

            const updatedTasks = tasks.map((task) =>
                task.id === editId
                    ? {
                        ...task,
                        taskName: taskName.trim(),
                        date: date,
                        status: status
                    }
                    : task
            );

            setTasks(updatedTasks);
        }

        clearForm();
    };

    const handleEdit = (task) => {

        setTaskName(task.taskName);
        setDate(task.date);
        setStatus(task.status);

        setEditId(task.id);
        setError("");
    };

    const handleDelete = (id) => {

        setTasks(tasks.filter((task) => task.id !== id));

        if (editId === id) {
            clearForm();
        }
    };

    const clearForm = () => {

        setTaskName("");
        setDate("");
        setStatus("Pending");

        setEditId(null);
        setError("");
    };

    return (

        <div className="max-w-xl mx-auto mt-10 p-6 border rounded-lg shadow">

            <h1 className="text-2xl font-bold mb-5 text-center">
                Task Management
            </h1>

            <div className="flex flex-col gap-3">

                <input
                    type="text"
                    placeholder="Enter Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="border p-2 rounded"
                />

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border p-2 rounded"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                {error && (
                    <p className="text-red-500">{error}</p>
                )}

                <div className="flex gap-2">

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white p-2 rounded flex-1"
                    >
                        {editId === null ? "Add Task" : "Update Task"}
                    </button>

                    {editId !== null && (
                        <button
                            onClick={clearForm}
                            className="bg-gray-500 text-white p-2 rounded flex-1"
                        >
                            Cancel
                        </button>
                    )}

                </div>

            </div>

            <h2 className="text-xl font-bold mt-6 mb-3">
                Task List
            </h2>

            {tasks.map((task) => (

                <div
                    key={task.id}
                    className="border p-3 rounded mb-3"
                >

                    <h3 className="font-bold">{task.taskName}</h3>
                    <p>{task.date}</p>
                    <p>{task.status}</p>

                    <button
                        onClick={() => handleEdit(task)}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(task.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
};

export default Todo;
