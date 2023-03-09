import { client } from '../database'

//obtiene todas las categorías
export const getCategories = async (req, resC) => {
    const query = 'SELECT * FROM category';
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//crea una categoría
export const createCategory = async (req, resC) => {
    const { name } = req.body;
    const query = 'INSERT INTO category (name) VALUES ($1)';
    const values = [name];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Category Added successfully',
                body: {
                    Category: {
                        name
                    }
                }
            });
        }
    });
}

//obtiene una categoría por id
export const getCategoryById = async (req, resC) => {
    const id = parseInt(req.params.categoryId);
    const query = 'SELECT * FROM category WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json(res.rows);
        }
    });
}

//actualiza una categoría por id
export const updateCategoryById = async (req, resC) => {
    const id = parseInt(req.params.categoryId);
    const { name } = req.body;
    const query = 'UPDATE category SET name = $1 WHERE id = $2';
    const values = [name, id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Category Updated successfully',
                body: {
                    Category: {
                        name
                    }
                }
            });
        }
    });
}

//elimina una categoría por id
export const deleteCategoryById = async (req, resC) => {
    const id = parseInt(req.params.categoryId);
    const query = 'DELETE FROM category WHERE id = $1';
    const values = [id];
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
        } else {
            resC.json({
                message: 'Category Deleted successfully',
                body: {
                    Category: {
                        id
                    }
                }
            });
        }
    });
}