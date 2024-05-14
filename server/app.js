// Preámbulo
// Ayuda a crear servidores web
import express from 'express';
// Habilita put y delete en los formularios
import methodOverride from 'method-override';
// Nucleo de node, ayuda al manejo de las rutas
import path from 'path';
// Ayuda al manejo de cookies
import cookieParser from 'cookie-parser';
// Maneja el log de peticiones http
import morgan from 'morgan';

// Importando las dependencias de webpack
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';

// Importando las rutas
import mongoose from 'mongoose';
import router from './router';

// Importando la configuración de webpack
import webpackConfig from '../webpack.dev.config';

// Importando la configuracion de las sesiones
import configSessions from './config/configSessions';

// Impornting winston logger
import log from './config/winston';

// Importing template-engine
import configTemplateEngine from './config/templateEngine';

const app = express();

// Obteniendo el modo de ejecucion de la app
const nodeEviroment = process.env.NODE_ENV || 'production';

// Configurando el entorno de desarrollo
if (nodeEviroment === 'development') {
  console.log('🛠️  Ejecutando en modo desarrollo');
  // Agregando el modo de ejecucion a la configuracion
  webpackConfig.mode = 'development';
  // Estableciendo el valor del puerto del servidor de desarrollo
  webpackConfig.devServer.port = process.env.PORT;
  // Configurando el HMR (Hot Module Replacement)
  webpackConfig.entry = [
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    webpackConfig.entry,
  ];
  // Agregar el plugin a la configuración de desarrollo
  // de webpack
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  // Generando el empaqueta (bundle) de webpack
  const bundle = webpack(webpackConfig);
  // Agregando el middleware de webpack
  app.use(
    WebpackDevMiddleware(bundle, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  // Agregando el middleware de HMR
  app.use(WebpackHotMiddleware(bundle));
} else {
  console.log('🚀 Ejecutando en modo producción');
}

// view engine setup
configTemplateEngine(app);

app.use(morgan('dev', { stream: log.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Enable PUT and DELETE methods
app.use(methodOverride('_method'));
// Configurando el manejo de sesiones y mensajes flash
configSessions(app);
// Servidor de archivos estaticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Checking database connection middleware
app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    log.info('✅ Pass database 🛢 connection checking');
    next();
  } else {
    log.error('🔥 Failed: database 🛢 connection checking');
    res.status(503).json({ message: 'Service Unavailable' });
  }
});

// Agregando las rutas
router.addRoutes(app);

export default app;
