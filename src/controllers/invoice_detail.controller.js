import { client } from '../database'


//obtiene todos los detalles de factura
export const getInvoiceDetails = async (req, resC) => {
    const query = 'SELECT * FROM invoice_detail';
    client.query(query, (err, res) => {
        if (err) {
            console.log('d1:' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea un detalle de factura
export const createInvoiceDetail = async (req, resC) => {
    const { invoice, product, quantity } = req.body;
    const query = 'INSERT INTO invoice_detail (invoice, product, quantity) VALUES ($1, $2, $3) RETURNING *';
    const values = [invoice, product, quantity];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('d2:' + err.stack);
        } else {
            const query1 = 'UPDATE product SET stock = stock - $1 WHERE id = $2';
            const values1 = [quantity, product];
            client.query(query1, values1, (err, res1) => {
                if (err) {
                    console.log('d2-1:' + err.stack);
                } else {
                    //console.log(res);
                    const id = res.rows[0].id;
                    resC.json({
                        message: 'Invoice Detail Added successfully and Stock updated',
                        body: {
                            invoiceDetail: {
                                id, invoice, product, quantity
                            }
                        }
                    });
                }
            });
        }
    });
}

//obtiene un detalle de factura por id
export const getInvoiceDetailById = async (req, resC) => {
    const id = parseInt(req.params.invoiceDetailId);
    const query = 'SELECT * FROM invoice_detail WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('d3:' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza un detalle de factura por id
export const updateInvoiceDetailById = async (req, resC) => {
    const id = parseInt(req.params.invoiceDetailId);
    const { invoice, product, quantity } = req.body;
    const query = 'UPDATE invoice_detail SET invoice = $1, product = $2, quantity = $3 WHERE id = $4';
    const values = [invoice, product, quantity, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('d4:' + err.stack);
        } else {
            resC.json({
                message: 'Invoice Detail Updated successfully',
                body: {
                    InvoiceDetail: {
                        invoice, product, quantity
                    }
                }
            });
        }
    });
}

//elimina un detalle de factura por id
export const deleteInvoiceDetailById = async (req, resC) => {
    const id = parseInt(req.params.invoiceDetailId);
    const query = 'DELETE FROM invoice_detail WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('d5:' + err.stack);
        } else {
            resC.json({
                message: 'Invoice Detail Deleted successfully',
                body: {
                    InvoiceDetail: {
                        id
                    }
                }
            });
        }
    });
}

//obtener detalles de factura por factura
export const getInvoiceDetailsByInvoice = async (req, resC) => {
    const id = parseInt(req.params.invoiceId);
    const query = 'SELECT i.id, i.quantity, pr.name, pr.unit_price, pr.unit_measure  FROM invoice_detail i INNER JOIN product pr on pr.id = i.product WHERE invoice = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log('d6:' + err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}