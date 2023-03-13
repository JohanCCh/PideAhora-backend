import jwt from "jsonwebtoken";
import { client } from '../database';
import { SECRET } from '../config.js';

//obtiene todas los empleados
export const getEmployees = async (req, resC) => {
    const query = 'SELECT * FROM employee';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea un empleado
export const createEmployee = async (req, resC) => {
    const { user, role } = req.body;
    const query = 'INSERT INTO employee (user, role) VALUES ($1, $2)';
    const values = [user, role];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Employee Added successfully',
                body: {
                    Employee: {
                        user, role
                    }
                }
            });
        }
    });
}

//obtiene un empleado por id
export const getEmployeeByToken = async (req, resC) => {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, SECRET);
    const query = 'SELECT * FROM employee WHERE user_e = $1';
    const values = [decoded.id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza un empleado por id
export const updateEmployeeById = async (req, resC) => {
    const id = parseInt(req.params.employeeId);
    const { role } = req.body;
    const query = 'UPDATE employee SET role = $1 WHERE id = $2';
    const values = [role, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Employee Updated successfully',
                body: {
                    Employee: {
                        role
                    }
                }
            });
        }
    });
}

//elimina un empleado por id
export const deleteEmployeeById = async (req, resC) => {
    const id = parseInt(req.params.employeeId);
    const query = 'DELETE FROM employee WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Employee Deleted successfully',
                body: {
                    Employee: {
                        id
                    }
                }
            });
        }
    });
}
