const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
  const { name, email, birthdate, message } = req.body;

  console.log('Datos del formulario recibidos:');
  console.log('Nombre:', name);
  console.log('Correo electrónico:', email);
  console.log('Fecha de nacimiento:', birthdate);
  console.log('Mensaje:', message);

  // Redirige al usuario a la página de confirmación
  res.sendFile(path.join(__dirname, 'public', 'confirmacion.html'));
});
app.get('/', (req, res) => {
  // Renderiza el archivo index.html cuando se accede a la raíz del sitio
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
