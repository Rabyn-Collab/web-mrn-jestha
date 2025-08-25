import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//mvc


const app = express();
const port = 5000;

// const names = ['ram', 'shyam', 'Rita'];
// const search = 'rita';

//  const result = names.some((name) => name.toLowerCase() === search.toLowerCase());


mongoose.connect('mongodb+srv://psg017597:pass900@cluster0.yqujtfd.mongodb.net/Shop').then(() => {
  app.listen(port, () => {
    console.log('database connect and server is running');
  });
}).catch((err) => {
  console.log(err);
});
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173']
}));
app.use(express.static('uploads'));
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.use(express.json());


app.get('/', (req, res) => {
  // console.log(req.cookies.jwt);
  return res.status(200).json({ message: 'hello' });
});

app.use(productRoutes);
app.use(userRoutes);










