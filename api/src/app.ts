import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {UserRoutes} from "./user-router";
import mongoose = require('mongoose');
import {TestRoutes} from "./test-router";
import {TestAtteptRoutes} from "./test-attempt-router";

class App {

    public express: express.Application;
    public mongoose;
    constructor() {
        this.express = express();
        this.mongoose = mongoose.connect('mongodb://localhost/poc');
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req, res, next) => {
            res.json({
                info: 'Tech Stack POC',
                version: '1.0.0',
                endpoints: [
                    {
                        url: '/users'
                    },
                    {
                        url: '/tests'
                    },
                    {
                        url: '/attempts'
                    }
                ]
            });
        });
        this.express.use('/users',UserRoutes);
        this.express.use('/tests',TestRoutes);
        this.express.use('/attempts',TestAtteptRoutes);
        this.express.use('/', router);
    }
}

export default new App().express;