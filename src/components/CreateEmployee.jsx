import { useState, useEffect } from 'react';
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { useFormik } from 'formik'

const CreateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id !== '_add') {
      EmployeeService.getEmployeeById(id).then((res) => {
        let employee = res.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmail(employee.email);
      });
    }
  }, [id]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  })

  console.log(formik.values);
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = { firstName, lastName, email };
    console.log('employee => ' + JSON.stringify(employee));

    if (id === '_add') {
      EmployeeService.createEmployee(employee).then((res) => {
        navigate('/employee');
      });
    } else {
      EmployeeService.updateEmployee(employee, id).then((res) => {
        navigate('/employee');
      });
    }

  };

  const cancel = () => {
    navigate('/employee');
  };

  const getTitle = () => {
    if (id === '_add') {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => {
                      formik.handleChange(e); 
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label> Email Id: </label>
                  <input
                    placeholder="Email Address"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      formik.handleChange(e); 
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
