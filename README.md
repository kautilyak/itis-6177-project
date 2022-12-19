# itis-6177-project
# Sentiment analysis using azure cognitive language API
### Version: 1.1


Cognitive Service for Language is a managed service to add high-quality natural language capabilities, from sentiment analysis and entity extraction to automated question answering. 

**Testing Resource**: Postman

In this project we will look at the Sentiment Analysis API that categorizes text as either positive, negative or neutral.

Sentiment analysis and opinion mining are features offered by Azure Cognitive Service for Language, a collection of machine learning and AI algorithms in the cloud for developing intelligent applications that involve written language. These features help you find out what people think of your brand or topic by mining text for clues about positive or negative sentiment, and can associate them with specific aspects of the text.

To use this app:
- Open Postman
- Type in the API URL in the URL box [GET]


- API URL: http://137.184.149.104:3001/sentiment
- Query Parameter - `t` (String)

- Note: Make sure you add in the /sentiment to the url before adding in the params


![image](https://user-images.githubusercontent.com/28112225/208474578-6cc56398-0fc7-4deb-b6bc-2e1f6bb22166.png)

- Make sure you give it the query parameter ‘t’, either in the URL, following a ‘?’ or in the params section like so
![image](https://user-images.githubusercontent.com/28112225/208479400-4d449398-f842-4fbf-afda-2926d6555ad7.png)

- Output response Type (JSON)
- Output Example:

```
{
    "text": "I loved the food",
    "sentiment": "positive",
    "confidenceScores": {
        "positive": 1,
        "neutral": 0,
        "negative": 0
    }
}
```


## Errors

1. No Text Sent in - `400`
- Error Sample: 
```
{
error: "No text sent in!",
code: 400
}
```
