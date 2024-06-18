DOM PARSER FOR PODCAST:
https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
https://wbugenis.medium.com/podcasts-rss-feeds-and-javascript-fc1eef9c65f9
https://hackernoon.com/reactjs-tutorial-embed-your-youtube-and-medium-rss-feeds-into-your-website-9u6o37ge

PARSE RSS TO JSON FORMAT:
https://api.rss2json.com/v1/api.json

sample
$.ajax({
url: 'https://api.rss2json.com/v1/api.json',
method: 'GET',
dataType: 'json',
data: {
rss_url: 'https://news.ycombinator.com/rss',
api_key: '0000000000000000000000000000000000000000', // put your api key here
count: 2
}
}).done(function (response) {
if(response.status != 'ok'){ throw response.message; }

    console.log('====== ' + response.feed.title + ' ======');

    for(var i in response.items){
        var item = response.items[i];
        console.log(item.title);

    }

});

- react share dependency (facebook, twitter)
- google and facebook auth

icons: hero icons
fonts:
monospace: ibm plex mono
serif: poppins
sans-serif:

colors:
primary:
secondary:
accent:
typography:
h1:24px
h2:
p: 16 - 18 / -.03

TODO:
[] - error and success toast
[] - token expiration
[] - nav context

FIX:

# PORT ALREADY IN-USE:

## Find running process

    sudo lsof -i :3000

## Kill process

    kill -9 <PID>
