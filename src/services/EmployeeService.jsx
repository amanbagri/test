import axios from 'axios';
 const Employee_API_BASE_URL = "http://localhost:8182/api/employee"

 class EmployeeService {

    getEmployee(){
        return axios.get(Employee_API_BASE_URL);
    }
    createEmployee(employee){
        return axios.post(Employee_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(Employee_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(Employee_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(Employee_API_BASE_URL + '/' + employeeId);
    }
 }

 export default new EmployeeService();