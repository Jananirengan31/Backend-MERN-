import { useState } from "react";

const StudentRecords = () => {

    const [students, setStudents] = useState([
        { id: 1, name: "Arun", marks: 75 },
        { id: 2, name: "Bala", marks: 85 },
        { id: 3, name: "Kumar", marks: 65 }
    ]);

    const addStudent = () => {

        const newStudent = { id: 4, name: "Priya", marks: 90 };

        const alreadyExists = students.some(
            (student) => student.id === newStudent.id
        );

        if (!alreadyExists) {
            setStudents([...students, newStudent]);
        }
    }

    const updateStudent = () => {

        setStudents(
            students.map((student) =>
                student.id === 2
                    ? { ...student, marks: 95 }
                    : student
            )
        );
    }

    const deleteStudent = () => {

        setStudents(
            students.filter((student) => student.id !== 3)
        );
    }

    return (
        <div className="min-h-screen bg-purple-50 p-8">

            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">

                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">
                    Student Records
                </h1>

                <div className="grid gap-4">

                    {students.map((student) => (

                        <div key={student.id} className="bg-purple-100 p-4 rounded-lg flex justify-between">

                            <div>
                                <h2 className="font-bold text-gray-800">
                                    {student.name}
                                </h2>

                                <p className="text-gray-600">
                                    ID: {student.id}
                                </p>
                            </div>

                            <p className="font-bold text-purple-700">
                                Marks: {student.marks}
                            </p>

                        </div>

                    ))}

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">

                    <button
                        onClick={addStudent}
                        className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
                    >
                        Add Student
                    </button>

                    <button
                        onClick={updateStudent}
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Update Bala
                    </button>

                    <button
                        onClick={deleteStudent}
                        className="bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
                    >
                        Delete Kumar
                    </button>

                </div>

            </div>

        </div>
    )
}

export default StudentRecords;