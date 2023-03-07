import { client } from '../database'


//obtiene todos los productos
export const getProducts = async (req, resC) => {
    const query = 'SELECT * FROM product';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea un nuevo producto
export const createProduct = async (req, resC) => {
    const { name, stock, unit_price, unit_measure, category,
        total_purchases, date_expiration, image_url } = req.body;
    const query = 'INSERT INTO product (name, stock, unit_price, unit_measure, category, total_purchases, date_expiration, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [name, stock, unit_price, unit_measure, category, total_purchases, date_expiration, image_url];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Product Added successfully',
                body: {
                    Product: {
                        name, stock, unit_price, unit_measure, category, total_purchases, date_expiration, image_url
                    }
                }
            });
        }
    });
}

//obtiene un producto por id
export const getProductById = async (req, resC) => {
    const id = parseInt(req.params.productId);
    const query = 'SELECT * FROM product WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza un producto por id
export const updateProductById = async (req, resC) => {
    const id = parseInt(req.params.productId);
    const { name, stock, unit_price, unit_measure, category } = req.body;
    const query = 'UPDATE product SET name = $1, stock = $2, unit_price = $3, unit_measure = $4, category = $5 WHERE id = $6';
    const values = [name, stock, unit_price, unit_measure, category, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Product Updated successfully',
                body: {
                    Product: {
                        name, stock, unit_price, unit_measure, category
                    }
                }
            });
        }
    });
}

//elimina un producto por id
export const deleteProductById = async (req, resC) => {
    const id = parseInt(req.params.productId);
    const query = 'DELETE FROM product WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Product Deleted successfully',
                body: {
                    Product: {
                        id
                    }
                }
            });
        }
    });
}