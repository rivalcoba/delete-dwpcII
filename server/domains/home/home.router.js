// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador de la Home
import homeController from './home.controller';

// Creando una instancia del enroutador
const router = new Router();

// Agregando las rutas

// GET "/"
// GET "/index"
// Get "/home"
router.get(['/', '/home', '/index'], homeController.home);

// Exportando el router
export default router;
