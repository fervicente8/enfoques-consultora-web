import express from 'express';
import morgan from 'morgan';
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Configurar el transporte para enviar correos a través de Gmail
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'enfoquesconsultoracvs@gmail.com',
    pass: 'wjpcfvkryqpydmnj',
  },
});

// Configuraciones
const allowList = ['https://enfoques-consultora.vercel.app']
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(cors(corsOptionsDelegate));
app.set("port", 3001);

// Ruta para enviar correos electrónicos CV
app.post('/send-email-cv', upload.single('cv'), (req, res) => {
  const { to, subject } = req.body;

  const mailOptions = {
    from: 'enfoquesconsultoracvs@gmail.com',
    to,
    subject,
    attachments: [
      {
        filename: req.file.originalname,
        content: req.file.buffer,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico.');
    } else {
      res.status(200).send('Correo enviado con éxito.');
    }
  });
});

// Ruta para enviar correos electrónicos formulario
app.post('/send-email-form', (req, res) => {
  const { to, subject, contactName, contactEmail, contactPhone, text } = req.body;

  const htmlContent = `
  <p>Nombre completo: ${contactName}</p>
  <p>Teléfono: ${contactPhone}</p>
  <p>Email: ${contactEmail}</p>
  <p>Mensaje: ${text}</p>`

  const mailOptions = {
    from: 'enfoquesconsultoracvs@gmail.com',
    to,
    subject,
    html: htmlContent
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico.');
    } else {
      res.status(200).send('Correo enviado con éxito.');
    }
  });
});

export default app;