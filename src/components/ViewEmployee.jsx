import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const ViewEmployeeComponent = (props) => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    })
      .catch((err) => {
        console.log("not");
      });
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">View Employee Details</h3>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Employee First Name:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={employee.firstName} readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Employee Last Name:</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" value={employee.lastName} readOnly />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Employee Email ID:</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" value={employee.email} readOnly />
                </div>
              </div>

            </div>              <button onClick={() => navigate('/employee')} className="btn btn-info">Return to Home Page </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
