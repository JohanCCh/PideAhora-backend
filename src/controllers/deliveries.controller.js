import { client } from '../database'
import jwt from "jsonwebtoken";
import { SECRET } from '../config.js'

//obtiene todas las entregas
export const getDeliveries = async (req, resC) => {
    const query = 'SELECT * FROM delivery where employee is null';
    client.query(query, (err, res) => {
        if (err) {
            console.log('1: ' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea una entrega
export const createDelivery = async (req, resC) => {
    const { is_delivered, invoice, date, address } = req.body;
    const query = 'INSERT INTO delivery (is_delivered, invoice, date, address) VALUES ($1, $2, $3, $4)';
    const values = [is_delivered, invoice, date, address];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('2: ' + err.stack);
        } else {
            resC.json({
                message: 'Delivery Added successfully',
                body: {
                    delivery: {
                        is_delivered, invoice, date, address
                    }
                }
            });
        }
    });

}

//obtiene una entrega por id
export const getDeliveryById = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const query = 'SELECT * FROM delivery WHERE id = $1 AND is_delivered = false';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('3: ' + err.stack);
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
            console.log('4: ' + err.stack);
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
    const query = 'UPDATE delivery SET employee = $1 WHERE id = $2 RETURNING *';
    const values = [employee, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('5: ' + err.stack);
        } else {
            const id = res.rows[0].id;
            const is_delivered = res.rows[0].is_delivered;
            const invoice = res.rows[0].invoice;
            const date = res.rows[0].date;
            const address = res.rows[0].address;
            resC.json({
                message: 'Delivery Updated successfully',
                body: {
                    delivery: {
                        id, is_delivered, employee, invoice, date, address
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
            console.log('6: ' + err.stack);
        } else {
            resC.json({
                message: 'Delivery deleted successfully',
                body: {
                    delivery: {
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
            console.log('7: ' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//obtener mi entrega
export const getMyDelivery = async (req, resC) => {
    const id = parseInt(req.params.deliveryId);
    const query = 'SELECT * FROM delivery WHERE employee = $1 AND is_delivered = false';
    client.query(query, [id], (err, res) => {
        if (err) {
            console.log('8: ' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

