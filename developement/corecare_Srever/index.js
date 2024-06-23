// index.js
import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patientRoutes.js';
import loginRoutes from './routes/loginRoutes.js'
import doctorRoutes from './routes/doctorRoutes.js'
import healthcareProviderRoutes from './routes/healthcareProviderRoutes.js';
import verification from './routes/verification.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/login', loginRoutes);
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/healthcareproviders', healthcareProviderRoutes);
app.use('/verification', verification);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
