import express from 'express';
import ManagerFactory from '../persistance/FactoryManager.js';

import TransactionService from '../business/services/TransactionService.js';
import UserService from '../business/services/UserService.js';

import TransactionRouter from '../router/TransactionRouter.js';
import UserRouter from '../router/UserRouter.js';

function ExpressServer() {

    this.transactionManager = ManagerFactory.getTransactionManager();
    this.userManager = ManagerFactory.getUserManager();

    this.transactionService = new TransactionService(this.transactionManager);
    this.userService = new UserService(this.userManager);

    this.transactionRouter = new TransactionRouter(this.transactionService);
    this.userRouter = new UserRouter(this.userService);

    function crearServidor(port){
        const app = express();
        app.use(express.json());
        app.use('/transaction', this.transactionRouter);
        app.use('/users', this.userRouter);

        return new Promise((resolve, reject) => {
            const server = app.listen(port)
                .once('error', (err) => {
                    reject(new Error('Error cannot connect to server'))
                })
                .once('listening', () => {
                    console.log('Listening on port ' + server.address().port)
                    server.port = server.address().port
                    resolve(server)
                })
        })
    }
}

export default ExpressServer;