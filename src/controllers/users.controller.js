import { client } from '../database'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import { SECRET } from '../config.js'

//obtiene todos los usuarios
export const getUsers = async (req, resC) => {
    const query = 'SELECT * FROM users';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea un usuario
export const createUser = async (req, resC) => {
    const { name, email, password } = req.body;
    const cryptPassword = await bcrypt.hash(password, 10);
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            //resC.json(res.rows);
            if (res.rows.length > 0) {
                resC.json({
                    message: 'User already exists',
                    body: {
                        user_exists: true
                    }
                });
            } else {
                const queryUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
                const valuesUser = [name, email, cryptPassword];
                client.query(queryUser, valuesUser, (err, res) => {
                    if (err) {
                        console.log(err.stack);
                    } else {
                        resC.json({
                            message: 'User Added successfully',
                            body: {
                                User: {
                                    name, email, cryptPassword
                                }
                            }
                        });
                    }
                });
            }
        }
    });
}

//obtiene un usuario por id
export const getUserById = async (req, resC) => {
    const id = parseInt(req.params.userId);
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza un usuario por id
export const updateUser = async (req, resC) => {
    const id = parseInt(req.params.userId);
    const { name, password } = req.body;
    const cryptPassword = await bcrypt.hash(password, 10);
    const query = 'UPDATE users SET name = $1, password = $2 WHERE id = $3';
    const values = [name, cryptPassword, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'User Updated successfully',
                body: {
                    User: {
                        name, cryptPassword
                    }
                }
            });
        }
    });
}

//elimina un usuario por id
export const deleteUser = async (req, resC) => {
    const id = parseInt(req.params.userId);
    const query = 'DELETE FROM users WHERE id = $1';
    client.query(query, [id], (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'User Deleted successfully',
                body: {
                    User: {
                        id
                    }
                }
            });
        }
    });
}

//obtener un usuario por token
export const getUserByToken = async (req, resC) => {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, SECRET);
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [decoded.id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}