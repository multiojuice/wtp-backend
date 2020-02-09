import '@babel/polyfill';
import express from "express";
import cors from 'cors';

import router from './handlers'
import './mongo';

const app = express();
app.use(express.json());
app.use(cors())
app.use('/', router);

app.listen('3002', () => {console.warn('WE up!')});