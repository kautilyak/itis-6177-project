import express from "express";
import { TextAnalysisClient, AzureKeyCredential } from "@azure/ai-language-text";
import "./config.js"

const router = express.Router();
const endpoint = process.env.ENDPOINT
const credential = new AzureKeyCredential(process.env.KEY);

router.get('/', async (req, res, next) => {

    // validation for no query
    if (! req.query.t) {
        res.status(400);
        res.json({
            error: "No text sent in!",
            code: 400
        });

        return;
    }

    
    const text = req.query.t;
    const client = new TextAnalysisClient(endpoint, credential);
    const result = await client.analyze("SentimentAnalysis", [text]);

    if (result.error) {
        res.status(500);
        res.json({error: "Something went wrong, try again!", code: 500});
        return;
    }
    
    // destructure the result to send a single response
    const {sentiment, confidenceScores} = result[0];

    const responseDocument = {
        text,
        sentiment,
        confidenceScores
    };
    res.status(200);
    res.json(responseDocument);

});

export default router;