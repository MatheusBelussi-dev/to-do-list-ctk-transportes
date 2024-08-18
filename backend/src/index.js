import express from 'express';
import cors from 'cors'; // Importe o pacote CORS
import routes from './routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000' // Substitua pela URL do seu frontend
}));


app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

