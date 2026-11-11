const StudentList =() => {

    let students = ["Arun", "Priya", "Karthik", "Divya", "Sanjay"];

    return (
        <>
        <div>
            <h1>Student List</h1>

            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default StudentList;