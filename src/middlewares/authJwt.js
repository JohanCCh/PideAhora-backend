import jwt from "jsonwebtoken";
import config from '../config.js'
import { client } from '../database.js'

export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "No token provided" });
    const decoded = jwt.verify(token, config.SECRET);

    const query = 'SELECT id, email FROM users WHERE id = $1';
    const values = [decoded.id];

    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            if (res.rows.length > 0) {
                req.userId = decoded.id;
                next();
            } else {
                return res.status(404).json({ message: "No user found" });
            }
        }
    });
}