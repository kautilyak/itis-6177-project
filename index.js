import express from "express";
import sentimentRouter from "./sentiment.js";


const app = express();
app.use("/sentiment", sentimentRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port ${process.env.PORT || 3000}`);
});


