import { client } from "../database.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js'

//registra un usuario
export const register = async (req, resC) => {
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
                                user: {
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

//inicia sesión
export const login = async (req, resC) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    client.query(query, values, async (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            if (res.rows.length > 0) {
                const user = res.rows[0];
                const validPassword = await bcrypt.compare(password, user.password);
                if (validPassword) {
                    const token = jwt.sign({ id: user.id }, SECRET, {
                        expiresIn: 60 * 60 * 24
                    });
                    resC.json({ auth: true, token, user: user });
                } else {
                    resC.json({ auth: false, message: 'Invalid password' });
                }
            } else {
                resC.json({ auth: false, message: 'User not found' });
            }
        }
    });
}