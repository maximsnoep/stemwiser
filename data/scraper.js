function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(ms) }, ms )
    })
}  

var all_statements = [];

for (var page = 1; page <= 30; page++ ) {

    await wait(1000);

    var show_info_button = document.getElementsByClassName('statement__tab-button--more-info');
    show_info_button[0].click();

    await wait(100);

    var info = document.querySelector('.statement__tab-text').textContent.trim();

    await wait(100);

    var show_parties_button = document.getElementsByClassName('statement__tab-button--parties');
    show_parties_button[0].click();
    
    await wait(100);
    
    var party_buttons = document.getElementsByClassName('parties-column__party-header--with-explanation');
    for(var i = 0; i < party_buttons.length; i++) { party_buttons[i].click(); }
    
    await wait(100);
    
    var theme = document.querySelector('.statement__theme').textContent.trim();
    var title = document.querySelector('.statement__title').textContent.trim();
    var result_per_party = [];
    
    document.querySelectorAll('.parties-column__party').forEach(function(partyElement) {
        result_per_party.push({
            'party': partyElement.querySelector('.parties-column__party-name').textContent.trim(),
            'statement': partyElement.querySelector('.parties-column__party-explanation').textContent.trim()
        });
    });
    
    all_statements.push({'theme': theme, 'title': title, 'info': info, 'results': result_per_party});

    await wait(100);

    var skip_button = document.getElementsByClassName('statement__skip');
    skip_button[0].click();

}

console.log(all_statements);