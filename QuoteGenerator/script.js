function generate(){
    var quotes = {
        "- C.S Lewis" : '"I was not born to be free---I was born to adore and obey."',
        "- Jenny Valentine" :'"Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free."',
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "- Steve Jobs" : '"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',
        "- Seneca" : '"Not how long, but how well you have lived is the main thing."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML= quote;

    document.getElementById("author").innerHTML = author;
}