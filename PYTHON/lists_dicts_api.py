import requests
import json

response = requests.get('https://jsonplaceholder.typicode.com/posts')
data = response.json()

formatted = json.dumps(data, indent=4)

print(formatted)

