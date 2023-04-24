import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = (props) => {

    const [employee, setEmployee] = useState([]);
     const navigate = useNavigate();

   
    useEffect(() => {
        EmployeeService.getEmployee().then((res) => {
            setEmployee(res.data);
        });
    }, []);

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(() => {
            setEmployee(employee.filter(employee => employee.id !== id));
        });
    }

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
    }

    const editEmployee = (id) => {
        navigate(`/add-employee/${id}`);
    }

    const addEmployee = () => {
        navigate('/add-employee/_add');
    }

    return (
        <div>
            <h2 className="text-center">Employee List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map(employee =>
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName}</td>
                                <td> {employee.email}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Edit </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent;
