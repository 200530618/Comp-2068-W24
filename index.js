import dotenv from 'dotenv';
import app from './app.js'; // Assuming app.js is the entry point of your application

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
