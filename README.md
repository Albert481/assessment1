# Assessment 1 Q1

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Assessment 1 Q2

Using AWS Lamda function to fetch API response

Reference: https://docs.aws.amazon.com/lambda/latest/dg/lambda-python.html

1. Login into AWS account
2. Navigate to AWS Lamda
3. Create a Lamda function in python

```
import json
import requests

def lambda_handler(event, context):
    response = requests.get("https://jsonplaceholder.typicode.com/users")
    users = response.json()
    return {
        "statusCode": 200,
        "body": json.dumps(users)
    }
```

4. Invoke the Lambda function by HTTP curl to the API Gateway endpoint associated (curl -X GET https://api-gateway-endpoint-url)