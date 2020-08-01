var quotes = [
    'whe way get started is to quit talking and begin doing. -wait disney',
    'the pessimist sees difficulty in every opportunity. the optimist sees the opportunity
    'Don\'t let yesterday take up too much of today.  -will rogers',
    'you learn more from failure than from failure than from success. don\'t let it stop you. failure builds
    'it\'s not whether you get knocked down, it\'s mother you get up.
]

function newquote(){
    var randomNumber = Math.floor(Math.random() = (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}