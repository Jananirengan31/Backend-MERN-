
import { useState } from "react";

const Formhandling = () => {

    const [tasks, setTasks] = useState([]);

    const [taskName, setTaskName] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Pending");

    const [editIndex, setEditIndex] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = () => {

        if (!taskName.trim() || !date || !status) {
            setError("Please fill all the fields");
            return;
        }

        const newTask = {
            taskName: taskName.trim(),
            date: date,
            status: status
        };

        if (editIndex === null) {

            setTasks([...tasks, newTask]);

        } else {

            const updatedTasks = tasks.map((task, index) =>
                index === editIndex ? newTask : task
            );

            setTasks(updatedTasks);
        }

        clearForm();
    };

    const handleEdit = (index) => {

        setTaskName(tasks[index].taskName);
        setDate(tasks[index].date);
        setStatus(tasks[index].status);

        setEditIndex(index);
        setError("");
    };

    const handleDelete = (index) => {

        setTasks(tasks.filter((task, i) => i !== index));

        if (editIndex === index) {
            clearForm();
        }
    };

    const clearForm = () => {

        setTaskName("");
        setDate("");
        setStatus("Pending");
        setEditIndex(null);
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

                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    {editIndex === null ? "Add Task" : "Update Task"}
                </button>

            </div>

            <h2 className="text-xl font-bold mt-6 mb-3">
                Task List
            </h2>

            {tasks.map((task, index) => (

                <div key={index} className="border p-3 rounded mb-3">

                    <h3 className="font-bold">{task.taskName}</h3>
                    <p>{task.date}</p>
                    <p>{task.status}</p>

                    <button
                        onClick={() => handleEdit(index)}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
};

export default Formhandling;
