$.getJSON("data/main.json", function (data) {

        var amtCards = data.quotes.length;
        var randomCard = Math.floor(Math.random() * amtCards);

        document.getElementById("jsQuote").innerHTML = data.quotes[randomCard].quote;
        document.getElementById("jsAttribution").innerHTML = "- " + data.quotes[randomCard].attribution;

        document.getElementById("jsQuoteBtn").addEventListener('click', function () {

            var amtCards = data.quotes.length;
            var randomCard = Math.floor(Math.random() * amtCards);

            document.getElementById("jsQuote").innerHTML = data.quotes[randomCard].quote;
            document.getElementById("jsAttribution").innerHTML = "- " + data.quotes[randomCard].attribution;

        });

        // need to create the new random quote outside of quote button click
        $(document).ready(function () {
            var currentQuote = data.quotes[randomCard].quote,
                currentAuthor = data.quotes[randomCard].attribution;
            $('#jsTwitter').on('click', function () {
                if (!inIframe()) {
                    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
                }
            });
            $('#jsTumblr').on('click', function () {
                if (!inIframe()) {
                    openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(currentAuthor) + '&content=' + encodeURIComponent(currentQuote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
                }
            });
        });
    })

    .fail(function (err) {
        console.log(err.responseText);
    });

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.style.backgroundColor = randomColor();
document.getElementById("jsQuoteBtn").style.backgroundColor = document.body.style.backgroundColor;
document.getElementById("jsTwitter").style.backgroundColor = document.body.style.backgroundColor;
document.getElementById("jsTumblr").style.backgroundColor = document.body.style.backgroundColor;
document.getElementById("jsQuotation1").style.color = document.body.style.backgroundColor;
document.getElementById("jsQuotation2").style.color = document.body.style.backgroundColor;

document.getElementById("jsQuoteBtn").onclick = function () {
    document.body.style.backgroundColor = randomColor();
    document.getElementById("jsQuoteBtn").style.backgroundColor = document.body.style.backgroundColor;
    document.getElementById("jsTwitter").style.backgroundColor = document.body.style.backgroundColor;
    document.getElementById("jsTumblr").style.backgroundColor = document.body.style.backgroundColor;
    document.getElementById("jsQuotation1").style.color = document.body.style.backgroundColor;
    document.getElementById("jsQuotation2").style.color = document.body.style.backgroundColor;

}

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}