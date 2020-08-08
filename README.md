# bible-chatbot-webhook

# Set up instrustions
1. clone repo
2. run ```npm install```
3. install ngrok ```npm i ngrok -g```
4. start app ``` node index```
5. expose app with ngrok to get an https public endpoint ```ngrok http 3004```
6. paste ngrok https link to dialogflow as fulfillment webhook url. 