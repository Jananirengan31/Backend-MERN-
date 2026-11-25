
import { useState, useRef, useEffect } from "react";

const StudentForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);

    const [students, setStudents] = useState([]);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleAdd = () => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const age = ageRef.current.value;

        const newStudent = {
            id: Date.now(),
            name: name,
            email: email,
            age: age
        };

        setStudents([...students, newStudent]);

        nameRef.current.value = "";
        emailRef.current.value = "";
        ageRef.current.value = "";

        nameRef.current.focus();
    };

    return (
        <div>
            <h2>Student Form</h2>

            <input type="text" placeholder="Enter Name" ref={nameRef} />
            <br /><br />

            <input type="email" placeholder="Enter Email" ref={emailRef} />
            <br /><br />

            <input type="number" placeholder="Enter Age" ref={ageRef} />
            <br /><br />

            <button onClick={handleAdd}>Add</button>

            <h2>Student Details</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <p>Name: {student.name}</p>
                    <p>Email: {student.email}</p>
                    <p>Age: {student.age}</p>
                    <hr />
                </div>
            ))}

        </div>
    );
};

export default StudentForm;
