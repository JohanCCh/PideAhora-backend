import { client } from '../database'
import jwt from "jsonwebtoken";
import { SECRET } from '../config.js'

//obtiene todas las entregas
export const getDeliveries = async (req, resC) => {
    const query = 'SELECT * FROM delivery where employee is null';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea una entrega
export const createDelivery = async (req, resC) => {
    const { is_delivered, invoice, date } = req.body;
    const query = 'INSERT INTO delivery (is_delivered, invoice, date) VALUES ($1, $2, $3)';
    const values = [is_delivered, invoice, date];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Delivery Added successfully',
                body: {
                    delivery: {
                        is_delivered, invoice, date
                    }
                }
            });
        }
    });

}

//obtiene una entrega por id
export const getDeliveryById = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const query = 'SELECT * FROM delivery WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza una entrega por id
export const updateDeliveryById = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const { is_delivered, employee, invoice, date } = req.body;
    const query = 'UPDATE delivery SET is_delivered = $1, employee = $2, invoice = $3, date = $4 WHERE id = $5';
    const values = [is_delivered, employee, invoice, date, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Delivery Updated successfully',
                body: {
                    Delivery: {
                        is_delivered, employee, invoice, date
                    }
                }
            });
        }
    });
}

//actualizar el estado de una entrega
export const updateDeliveryState = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const { is_delivered } = req.body;
    const query = 'UPDATE delivery SET is_delivered = $1 WHERE id = $2';
    const values = [is_delivered, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Delivery Updated successfully',
                body: {
                    Delivery: {
                        is_delivered
                    }
                }
            });
        }
    });
}

//elegir una entrega
export const selectDelivery = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const { employee } = req.body;
    const query = 'UPDATE delivery SET employee = $1 WHERE id = $2';
    const values = [employee, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Delivery Updated successfully',
                body: {
                    Delivery: {
                        employee
                    }
                }
            });
        }
    });
}

//elimina una entrega por id
export const deleteDeliveryById = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const query = 'DELETE FROM delivery WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Delivery deleted successfully',
                body: {
                    Delivery: {
                        id
                    }
                }
            });
        }
    });
}

//obtener los pedidos de un usuario
export const getDeliveriesByUser = async (req, resC) => {
    const token = req.headers['x-access-token'];
    const decoded = jwt.verify(token, SECRET);
    const query = 'SELECT d.id, d.is_delivered, d.employee, i.id as invoice, d.date as date FROM delivery d INNER JOIN invoice i ON d.invoice = i.id WHERE i.invoice_user = $1';
    const values = [decoded.id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            console.log(res.rows);
            resC.json(res.rows);
        }
    });
}

//obtener mi entrega
export const getMyDelivery = async (req, resC) => {
    const  id = parseInt(req.params.employeeId);
    const query = 'SELECT d.id, d.is_delivered, d.employee, i as invoice, d.date as date FROM delivery d INNER JOIN invoice i ON d.invoice = i.id WHERE d.employee = $1 AND d.is_delivered = false';

}

