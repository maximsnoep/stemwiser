document.addEventListener("DOMContentLoaded", () => {
    const partyCheckboxes = document.getElementById("party-checkboxes");
    const themeCheckboxes = document.getElementById("theme-checkboxes");
    const settingsCheckboxes = document.getElementById("settings-checkboxes");

    const statements = document.getElementById("statements");

    const resetButton = document.getElementById("reset-button");
    const showPartyNames = document.getElementById("show-parties");

    const selectAllParties = document.getElementById("select-all-parties"); 

    const selectTKParties = document.getElementById("select-tk-parties"); 
    const selectLeftParties = document.getElementById("select-left-parties"); 
    const selectCentreParties = document.getElementById("select-centre-parties"); 
    const selectRightParties = document.getElementById("select-right-parties"); 
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
                <input ${selectedParties.get(party) ? 'checked' : ''} type="checkbox" class="party" id="${party}">
                <label for="${party}" class="ms-2 my-1">${party}</label>
            </div>
        `;
    });

    // Populate the theme checkboxes
    themes.forEach(theme => {
        themeCheckboxes.innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedThemes.get(theme) ? 'checked' : ''} type="checkbox" class="theme" id="${theme}">
                <label for="${theme}" class="ms-2 my-1">${theme}</label>
            </div>
        `;
    });

    // Load the form
    let loadStatementForm = () => {
        statements.innerHTML = "";
        document.getElementById('topLine').style.display = 'none'

        data.forEach(themeData => {
            document.getElementById('topLine').style.display = 'inherit'

            let statementItems = ''
            themeData.results.forEach(result => {
                let agree = selectedStatements.get(result.party + "-" + themeData.theme + "-agree");
                let disagree = selectedStatements.get(result.party + "-" + themeData.theme + "-disagree");
                let none = !agree && !disagree;

                statementItems += `
                    <li class="list-group-item bg-transparent my-4 border-0" id="item-${result.party}-${themeData.theme}" style="display: none;">
                        <p>"${result.statement.replaceAll(result.party, `<span class="show-party-names" style="display:none">${result.party}</span><span class="hide-party-names" style="display:none">[ politieke partij naam ]</span>`)}" <span class="show-party-names" style="display:none"><br/> - ${result.party}</span></p>
                        <div class="d-flex justify-content-center btn-group mx-5" role="group" aria-label="Basic radio toggle button group">
                            <input ${agree ? "checked" : ""} type="radio" class="btn-check ${result.party}-agree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-agree" autocomplete="off" checked>
                            <label class="btn btn-outline-dark" for="${result.party}-${themeData.theme}-agree"><span class="bi bi-hand-thumbs-up-fill"></span> <span>eens</span></label>
                        
                            <input ${none ? "checked" : ""} type="radio" class="btn-check ${result.party}-none" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-none" autocomplete="off">
                            <label class="btn btn-outline-dark" for="${result.party}-${themeData.theme}-none"><span>geen mening</span></label>
                        
                            <input ${disagree ? "checked" : ""} type="radio" class="btn-check ${result.party}-disagree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-disagree" autocomplete="off">
                            <label class="btn btn-outline-dark" for="${result.party}-${themeData.theme}-disagree"><span class="bi bi-hand-thumbs-down-fill"></span> <span>oneens</span></label>
                        </div>
                    </li>
                `;
            });

            statements.innerHTML += `
                <div class="mx-2 mb-2" id="item-${themeData.theme}" style="max-width: 500px; display: none">
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

    let reloadResults = () => {
        const partyAgreeCounts = {};
        const partyDisagreeCounts = {};
        for (let key of parties) {
            partyAgreeCounts[key] = 0;
            partyDisagreeCounts[key] = 0;
        }

        for (let party of parties) {
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

        let finalPartyResults = [];

        for (const party in partyAgreeCounts) {
            let total = partyAgreeCounts[party] + partyDisagreeCounts[party];
            let perc = total === 0 ? 0 : ((partyAgreeCounts[party] / total) * 100);

            finalPartyResults.push({
                'party': party,
                'agrees': partyAgreeCounts[party],
                'disagrees': partyDisagreeCounts[party],
                'total': total,
                'perc': perc,
                'score': partyAgreeCounts[party] - partyDisagreeCounts[party],
            });
        }

        finalPartyResults.sort((a, b) => (b.score + b.agrees * 0.0005) - (a.score + a.agrees * 0.0001));

        const partyResults = document.getElementById("party-results");
        let results = '';


        // Display the results
        finalPartyResults.forEach((res) => {
            if (res.agrees === 0 && res.disagrees == 0) return;
            results += `
            <p><b>${res.party}</b>: ${res.score}, ${res.perc}%, (+${res.agrees}, -${res.disagrees})</p>
        `;
        });

        if (results == '') {
            results = `<p>Geen resultaten beschikbaar.</p>` 
        }        

        partyResults.innerHTML = `
                <div id="settings-checkboxes">
                    ${results}
                </div>
            `
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

    selectTKParties.addEventListener("click", () => {

        parties.forEach((party) => {
            let val = currentParties.includes(party);
            selectedParties.set(party, val);
            document.getElementById(party).checked = val;
        });
        
        localStorage.setItem("selectedParties", JSON.stringify(Array.from(selectedParties.entries())))
        reloadStatementForm();
        reloadResults();
    });

    selectLeftParties.addEventListener("click", () => {

        parties.forEach((party) => {
            let val = leftParties.includes(party);
            selectedParties.set(party, val);
            document.getElementById(party).checked = val;
        });
        
        localStorage.setItem("selectedParties", JSON.stringify(Array.from(selectedParties.entries())))
        reloadStatementForm();
        reloadResults();
    });

    selectCentreParties.addEventListener("click", () => {

        parties.forEach((party) => {
            let val = centreParties.includes(party);
            selectedParties.set(party, val);
            document.getElementById(party).checked = val;
        });
        
        localStorage.setItem("selectedParties", JSON.stringify(Array.from(selectedParties.entries())))
        reloadStatementForm();
        reloadResults();
    });

    selectRightParties.addEventListener("click", () => {

        parties.forEach((party) => {
            let val = rightParties.includes(party);
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

    // Handle checkboxes of settings
    settingsCheckboxes.addEventListener("change", () => {
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

    resetButton.addEventListener("click", () => {
        localStorage.setItem("selectedThemes", [].toString());
        localStorage.setItem("selectedParties", [].toString());
        localStorage.setItem("selectedStatements", [].toString());
        location.reload();
    });
});

