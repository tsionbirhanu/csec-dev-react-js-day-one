import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development"; // Default to development

app.listen(PORT, () => {
    console.log(` Server running in ${NODE_ENV} mode on port ${PORT}`);
});
