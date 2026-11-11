const Employee =() => {

    let empName = "Priya";
    let empId = "EMP101";
    let designation = "React Developer";
    let salary = "35,000";
    let company = "TCS";

    return (
        <>
        <div>
        
            <h1>Employee Details</h1>
            <p>Employee ID: {empId}</p>
            <p>Name: {empName}</p>
            <p>Designation: {designation}</p>
            <p>Salary: {salary}</p>
            <p>Company: {company}</p>
        </div>
        </>
    );
}

export default Employee;