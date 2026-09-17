import {Router} from 'express';

const router = Router();
router.get('/', (req, res) => {res.render('index.ejs', { title: 'Mi primera app con Node.js'});});
router.get('/about', (req, res) => {res.render('about.ejs', { title: 'Sobre nosotros' });});
router.get('/contact', (req, res) => {res.render('contact.ejs', { title: 'Contacta con nosotros' });});

export default router;