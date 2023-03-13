import { client } from '../database';
import jwt from "jsonwebtoken";
import { SECRET } from '../config.js'

//obtiene todas las facturas
export const getInvoices = async (req, resC) => {
    const query = 'SELECT * FROM invoice';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea una factura
export const createInvoice = async (req, resC) => {
    const token = req.headers["x-access-token"];
    const decoded = jwt.verify(token, SECRET);
    const { delivery_commission, total, date } = req.body;
    const query = 'INSERT INTO invoice (invoice_user, delivery_commission, total, date) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [decoded.id, delivery_commission, total, date];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            const id = res.rows[0].id;
            const user_id = decoded.id;
            resC.json({
                message: 'Invoice Added successfully',
                body: {
                    invoice: {
                        id, user_id, delivery_commission, total, date
                    }
                }
            });
        }
    });
}

//obtiene una factura por id
export const getInvoiceById = async (req, resC) => {
    const id = parseInt(req.params.invoiceId);
    const query = 'SELECT * FROM invoice WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza una factura por id
export const updateInvoiceById = async (req, resC) => {
    const id = parseInt(req.params.invoiceId);
    const { invoice_user, delivery_commission, total, date } = req.body;
    const query = 'UPDATE invoice SET invoice_user = $1, delivery_commission = $2, total = $3, date = $4 WHERE id = $5';
    const values = [invoice_user, delivery_commission, total, date, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Invoice Updated successfully',
                body: {
                    Invoice: {
                        invoice_user, delivery_commission, total, date
                    }
                }
            });
        }
    });
}

//elimina una factura por id
export const deleteInvoiceById = async (req, resC) => {
    const id = parseInt(req.params.invoiceId);
    const query = 'DELETE FROM invoice WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Invoice deleted successfully',
                body: {
                    Invoice: {
                        id
                    }
                }
            });
        }
    });
}