import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import authRoutes from './routes/auth.routes';
import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import invoicesRoutes from './routes/invoices.routes';
import deliveriesRoutes from './routes/deliveries.routes';
import categories from './routes/categories.routes';

const app = express();

app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());

//información de la app
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

//Rutas
app.use('/auth', authRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/invoices', invoicesRoutes);
app.use('/deliveries', deliveriesRoutes);
app.use('/categories', categories);

export default app;


// //middlewares
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// //Rutas
// app.use(require('./routes/index'));

// app.listen(3000);
// console.log('Server on port 3000');