document.addEventListener("DOMContentLoaded", () => {
    const partyCheckboxes = document.getElementById("party-checkboxes");
    const themeCheckboxes = document.getElementById("theme-checkboxes");

    const statements = document.getElementById("statements");

    const showPartyNames = document.getElementById("show-parties");

    const selectAllParties = document.getElementById("select-all-parties"); 
    const selectAllThemes = document.getElementById("select-all-themes"); 

    // Extract unique parties and themes
    const parties = [...new Set(data.map(item => item.results.map(result => result.party)).flat())];

    parties.sort((a, b) => {
        let val_a = seats[a] ? seats[a] : 0;
        let val_b = seats[b] ? seats[b] : 0;
        return val_b-val_a
    });

    const themes = [...new Set(data.map(item => item.theme))];

    // Selected items
    let selectedParties
    try {
        selectedParties = new Map(JSON.parse(localStorage.getItem("selectedParties")))
        let invariant = true
        parties.forEach((party) => invariant = invariant && !selectedParties.get(party))
        if (invariant) for (let party of currentParties) selectedParties.set(party, true)
    } catch (error) {
        selectedParties = new Map();
    }

    let selectedThemes
    try {
        selectedThemes = new Map(JSON.parse(localStorage.getItem("selectedThemes")))
    } catch (error) {
        selectedThemes = new Map();
    }

    let selectedStatements
    try {
        selectedStatements = new Map(JSON.parse(localStorage.getItem("selectedStatements")))
    } catch (error) {
        selectedStatements = new Map();
    }

    // Populate the party checkboxes
    parties.forEach((party) => {
        partyCheckboxes.innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedParties.get(party) ? 'checked' : ''} type="checkbox" class="party d-none" id="${party}">
                <label for="${party}" class="ms-2 my-1 toggle-text btn btn-outline-dark">${party}</label>
            </div>
        `;
    });

    // Populate the theme checkboxes
    themes.forEach(theme => {
        themeCheckboxes.innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedThemes.get(theme) ? 'checked' : ''} type="checkbox" class="theme d-none" id="${theme}">
                <label for="${theme}" class="ms-2 my-1 toggle-text btn btn-outline-dark">${theme}</label>
            </div>
        `;
    });

    // Load the form
    let loadStatementForm = () => {
        statements.innerHTML = "";
        

        statements.innerHTML += "<div id='no-parties-or-themes' style='display: none;'><p>Please select at least one party and one theme.</p></div>";

        data.forEach(themeData => {
            let statementItems = ''
            themeData.results.forEach(result => {
                let agree = selectedStatements.get(result.party + "-" + themeData.theme + "-agree");
                let disagree = selectedStatements.get(result.party + "-" + themeData.theme + "-disagree");
                let none = !agree && !disagree;
                statementItems += `
                    <li class="list-group-item bg-transparent my-4 border-0" id="item-${result.party}-${themeData.theme}" style="display: none;">
                        <p>"${result.statement.replaceAll(result.party, `<span class="show-party-names" style="display:none">${result.party}</span><span class="hide-party-names" style="font-style: italic; display:none">PARTY</span>`)}" <span class="show-party-names" style="display:none"><br/> - ${result.party}</span></p>
                        <div class="d-flex justify-content-center btn-group mx-5" role="group" aria-label="Basic radio toggle button group">
                            <input ${disagree ? "checked" : ""} type="radio" class="btn-check ${result.party}-disagree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-disagree" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center" for="${result.party}-${themeData.theme}-disagree"><span class="bi bi-hand-thumbs-down-fill px-1"></span> <span>disagree</span></label>

                            <input ${none ? "checked" : ""} type="radio" class="btn-check ${result.party}-none" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-none" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center" for="${result.party}-${themeData.theme}-none"><span>undecided</span></label>

                            <input ${agree ? "checked" : ""} type="radio" class="btn-check ${result.party}-agree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-agree" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center" for="${result.party}-${themeData.theme}-agree"><span class="bi bi-hand-thumbs-up-fill px-1"></span> <span>agree</span></label>
                        </div>
                    </li>
                `;
            });

            statements.innerHTML += `
                <div class="m-5 p-5" id="item-${themeData.theme}" style="max-width: 500px; display: none">
                    <div class="card-header">
                        <h4 class="d-flex justify-content-center"> ${themeData.theme} </h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-transparent border-0">
                            <b>${themeData.title}</b><i> ${themeData.info} </i>
                        </li>
                        ${statementItems}
                    </ul>
                </div>
            `
        });

        for (let elem of document.getElementsByClassName('show-party-names')) {
            elem.style.display = showPartyNames.checked ? "inline" : "none";
        }

        for (let elem of document.getElementsByClassName('hide-party-names')) {
            elem.style.display = showPartyNames.checked ? "none" : "inline";
        }
        

    }

    // Load the form
    let reloadStatementForm = () => {

        let party_count = 0;
        let statement_count = 0;

        data.forEach(themeData => {

            themeData.results.forEach(result => {
                const this_party_block = document.getElementById(`item-${result.party}-${themeData.theme}`);
                if (selectedParties.get(result.party)) {
                    party_count += 1; 
                } else {  
                }

            });

            const this_statement_block = document.getElementById(`item-${themeData.theme}`);

            if (selectedThemes.get(themeData.theme)) {
                statement_count += 1;
            } else {
            }
      
        });

        if (party_count === 0 || statement_count === 0) {
            let no_party_or_theme_message = document.getElementById("no-parties-or-themes");
            no_party_or_theme_message.style.display = "block";

            data.forEach(themeData => {

                themeData.results.forEach(result => {
                    const this_party_block = document.getElementById(`item-${result.party}-${themeData.theme}`);
                    this_party_block.style.display = "none";    

                });

                const this_statement_block = document.getElementById(`item-${themeData.theme}`);
                this_statement_block.style.display = "none";

            });

        } else {
            let no_party_or_theme_message = document.getElementById("no-parties-or-themes");
            no_party_or_theme_message.style.display = "none";

            data.forEach(themeData => {

                themeData.results.forEach(result => {
                    const this_party_block = document.getElementById(`item-${result.party}-${themeData.theme}`);
                    if (selectedParties.get(result.party)) {
                        this_party_block.style.display = "block";
                    } else {
                        this_party_block.style.display = "none";   
                    }

                });

                const this_statement_block = document.getElementById(`item-${themeData.theme}`);

                if (selectedThemes.get(themeData.theme)) {
                    this_statement_block.style.display = "block";
                } else {
                    this_statement_block.style.display = "none";   
                }
        
            });

        }
    }

    let reloadResults = () => {
        const partyAgreeCounts = {};
        const partyDisagreeCounts = {};

        for (let [party, selected] of selectedParties) {
            if (selected) {
                partyAgreeCounts[party] = 0;
                partyDisagreeCounts[party] = 0;
            }
        }

        for (let [party, selected] of selectedParties) {
            if (selected) {
                for (let statement of document.getElementsByClassName(`${party}-agree`)) {
                    if(statement.checked) {
                        partyAgreeCounts[party] += 1
                    }
                }
                for (let statement of document.getElementsByClassName(`${party}-disagree`)) {
                if(statement.checked) {
                    partyDisagreeCounts[party] += 1
                }
            }
            }
            
        }

        let finalPartyResults = [];

        for (const party in partyAgreeCounts) {
        const agrees = partyAgreeCounts[party] || 0;
        const disagrees = partyDisagreeCounts[party] || 0;
        const total = agrees + disagrees;

        const ao = agrees - disagrees;                 // primary score
        const raw = total === 0 ? 0 : agrees / total;                    // tie-breaker (0..1)
        const rawPercent = Math.round(raw * 100);      // for display

        finalPartyResults.push({
            party,
            agrees,
            disagrees,
            total,
            ao,
            raw,             // keep as number for sorting
            rawPercent,      // for display
        });
        }

        finalPartyResults.sort((a, b) =>
        (b.ao - a.ao) ||
        (b.raw - a.raw) ||
        (b.total - a.total) ||
        (b.agrees - a.agrees) ||
        a.party.localeCompare(b.party)
        );

        const partyResults = document.getElementById("party-results");
        let results = '';

        finalPartyResults.forEach((res) => {
        results += `
            <p class="p-hand"
                data-bs-toggle="tooltip" 
                data-bs-placement="top"
                title="agreed for ${res.rawPercent}% with ${res.agrees} agrees and ${res.disagrees} disagrees (total of ${res.total})">
                ${res.ao >= 0 ? '+' : ''}${res.ao} for <b>${res.party}</b>
            </p>
            `;
        });

        let count_themes = 0;
        for (let [theme, selected] of selectedThemes) {
            if (selected) {
                count_themes++;
            }
        }

        if (results === '' || count_themes === 0) {
            partyResults.innerHTML = ''
        } else {
            partyResults.innerHTML = `
                <hr id="topLine">

                <div class="d-flex justify-content-center">
                    <div class="m-2" style="width: 300px">
                        <div class="card-header">
                            <h4>Results</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex">
                                <div>
                                    ${results}
                                </div>
                            </div>
                            <div class="d-flex flex-wrap align-items-baseline">
                                <button class="btn btn-sm m-1" type="button" id="reset-button">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>  
            `

            const resetButton = document.getElementById("reset-button");
            resetButton.addEventListener("click", () => {
                localStorage.setItem("selectedThemes", [].toString());
                localStorage.setItem("selectedParties", [].toString());
                localStorage.setItem("selectedStatements", [].toString());
                location.reload();
            });
        }

           
    }

    loadStatementForm();
    reloadStatementForm();
    reloadResults();

    showPartyNames.addEventListener("change", () => {
        for (let elem of document.getElementsByClassName('show-party-names')) {
            elem.style.display = showPartyNames.checked ? "inline" : "none";
        }

        for (let elem of document.getElementsByClassName('hide-party-names')) {
            elem.style.display = showPartyNames.checked ? "none" : "inline";
        }
    })

    selectAllParties.addEventListener("click", () => {

        let val = parties.filter((party) => !selectedParties.get(party)).length != 0;

        parties.forEach((party) => {
            selectedParties.set(party, val);
            document.getElementById(party).checked = val;
        });
        
        localStorage.setItem("selectedParties", JSON.stringify(Array.from(selectedParties.entries())))
        reloadStatementForm();
        reloadResults();
    });

    selectAllThemes.addEventListener("click", () => {

        let val = themes.filter((theme) => !selectedThemes.get(theme)).length != 0;

        themes.forEach((theme) => {
            selectedThemes.set(theme, val);
            document.getElementById(theme).checked = val;
        });
        
        localStorage.setItem("selectedThemes", JSON.stringify(Array.from(selectedThemes.entries())))
        reloadStatementForm();
        reloadResults();
    });


    // Handle checkboxes of parties
    partyCheckboxes.addEventListener("change", (event) => {
        if (event.target.checked) {
            selectedParties.set(event.target.id, true)
        } else {
            selectedParties.set(event.target.id, false)
        }

        localStorage.setItem("selectedParties", JSON.stringify(Array.from(selectedParties.entries())))
        reloadStatementForm();
        reloadResults();
    });

    // Handle checkboxes of themes
    themeCheckboxes.addEventListener("change", (event) => {
        if (event.target.checked) {
            selectedThemes.set(event.target.id, true)
        } else {
            selectedThemes.set(event.target.id, false)
        }

        localStorage.setItem("selectedThemes", JSON.stringify(Array.from(selectedThemes.entries())))
        reloadStatementForm();
        reloadResults();
    });

    // Handle radios of statements
    statements.addEventListener("change", (event) => {
        let partyTheme = event.target.id.substring(0, event.target.id.lastIndexOf("-"))
        selectedStatements.delete(partyTheme + "-none")
        selectedStatements.delete(partyTheme + "-agree")
        selectedStatements.delete(partyTheme + "-disagree")
        selectedStatements.set(event.target.id, true)

        localStorage.setItem("selectedStatements", JSON.stringify(Array.from(selectedStatements.entries())))

        reloadResults();
    });
});

