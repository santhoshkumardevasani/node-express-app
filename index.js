
import express from "express";
import cors from 'cors';
const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/message',(req, res) => {
    res.json({
        "message": "nodejs is working!!!"
    });
});


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});