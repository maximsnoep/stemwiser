document.addEventListener("DOMContentLoaded", () => {

    // encode any JS value
    function packForUrl(value) {
        const json = JSON.stringify(value);
        return LZString.compressToEncodedURIComponent(json);
    }

    // decode back to the original value
    function unpackFromUrl(s) {
        const json = LZString.decompressFromEncodedURIComponent(s);
        return JSON.parse(json);
    }

    const statements = document.getElementById("statements");

    // Extract unique parties and themes
    const parties = [...new Set(data.map(item => item.results.map(result => result.party)).flat())];
    parties.sort((a, b) => {
        let val_a = seats[a] ? seats[a] : 0;
        let val_b = seats[b] ? seats[b] : 0;
        return val_b-val_a
    });
    const themes = [...new Set(data.map(item => item.theme))];

    let selectedParties = [];
    let selectedThemes = [];
    let selectedStatements = new Map();

    // Extract from URL
    const urlParams = new URLSearchParams(window.location.search);
    const url_data = urlParams.get('d');
    if (url_data) {
        try {
            const unpackedData = unpackFromUrl(url_data);
            selectedParties = unpackedData.selectedParties || [];
            selectedThemes = unpackedData.selectedThemes || [];
            selectedStatements = new Map(unpackedData.selectedStatements || []);
        } catch (error) {}
    } else {
        // Get stored data from local storage
        try {
            selectedParties = JSON.parse(localStorage.getItem("selectedParties")) || [];
            for (let party of selectedParties) {
                if (!parties.includes(party)) {
                    selectedParties.splice(selectedParties.indexOf(party), 1);
                }
            }
        } catch (error) {}
        try {
            selectedThemes = JSON.parse(localStorage.getItem("selectedThemes")) || [];
            for (let theme of selectedThemes) {
                if (!themes.includes(theme)) {
                    selectedThemes.splice(selectedThemes.indexOf(theme), 1);
                }
            }
        } catch (error) {}
        let selectedStatements
        try {
            selectedStatements = new Map(JSON.parse(localStorage.getItem("selectedStatements")))
        } catch (error) {}
    }

    

    // Populate the party checkboxes
    parties.forEach((party) => {
        document.getElementById("party-checkboxes").innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedParties.includes(party) ? 'checked' : ''} type="checkbox" class="party d-none" id="${party}">
                <label for="${party}" class="ms-2 my-1 toggle-text btn btn-outline-dark">${party}</label>
            </div>
        `;
    });

    // Populate the theme checkboxes
    themes.forEach(theme => {
        document.getElementById("theme-checkboxes").innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedThemes.includes(theme) ? 'checked' : ''} type="checkbox" class="theme d-none" id="${theme}">
                <label for="${theme}" class="ms-2 my-1 toggle-text btn btn-outline-dark">${theme}</label>
            </div>
        `;
    });

    // Load the form
    let loadStatementForm = () => {
        statements.innerHTML = "";
        statements.innerHTML += "<div id='no-parties-or-themes' style='display: none;' class='small'><p><i>Please select at least one party and one theme.</i></p></div>";

        data.forEach(themeData => {
            let statementItems = ''
            themeData.results.forEach(result => {
                let agree = selectedStatements.get(result.party + "-" + themeData.theme + "-agree");
                let disagree = selectedStatements.get(result.party + "-" + themeData.theme + "-disagree");
                let none = !agree && !disagree;
                statementItems += `
                    <li class="list-group-item mx-4 my-4 p-4 small" id="item-${result.party}-${themeData.theme}" style="border-radius: 5px; border: 1px solid #e6e6e6ff; background: none; display: none;">
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
                <div class="m-2 p-2 flex-column justify-content-start align-items-center" id="item-${themeData.theme}" style="max-width: 500px; display: none;">
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
            elem.style.display = document.getElementById("show-parties").checked ? "inline" : "none";
        }
        for (let elem of document.getElementsByClassName('hide-party-names')) {
            elem.style.display = document.getElementById("show-parties").checked ? "none" : "inline";
        }
    }

    // Load the form
    let reloadStatementForm = () => {
        if (selectedParties.length === 0 || selectedThemes.length === 0) {
            document.getElementById("no-parties-or-themes").style.display = "inline";  
            data.forEach(themeData => {
                themeData.results.forEach(result => {
                    document.getElementById(`item-${result.party}-${themeData.theme}`).style.display = "none";    
                });
                document.getElementById(`item-${themeData.theme}`).style.display = "none";  
            });
        } else {
            document.getElementById("no-parties-or-themes").style.display = "none";  
            data.forEach(themeData => {
                themeData.results.forEach(result => {
                    if (selectedParties.includes(result.party)) {
                        document.getElementById(`item-${result.party}-${themeData.theme}`).style.display = "block";  
                    } else {
                        document.getElementById(`item-${result.party}-${themeData.theme}`).style.display = "none";   
                    }
                });
                if (selectedThemes.includes(themeData.theme)) {
                    document.getElementById(`item-${themeData.theme}`).style.display = "flex";  
                } else {
                    document.getElementById(`item-${themeData.theme}`).style.display = "none";  
                }
            });
        }
    }

    let reloadResults = () => {
        if (selectedParties.length === 0 && selectedThemes.length === 0) {
            // If no parties or themes are selected, hide all results
            document.getElementById("party-results").innerHTML = '';
            // Store the URL data in url
            history.replaceState(null, '', '?');
            return;
        }

        // turn it into a string
        let url_data = packForUrl({
            selectedParties,
            selectedThemes,
            selectedStatements: Array.from(selectedStatements.entries())
        });

        // Store the URL data in url
        history.replaceState(null, '', `?d=${url_data}`);

        const partyAgreeCounts = {};
        const partyDisagreeCounts = {};

        for (let party of selectedParties) {
            partyAgreeCounts[party] = 0;
            partyDisagreeCounts[party] = 0;
        }

        for (let party of selectedParties) {
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
        const agrees = partyAgreeCounts[party] || 0;
        const disagrees = partyDisagreeCounts[party] || 0;
        const total = agrees + disagrees;

        const ao = agrees - disagrees;
        const raw = total === 0 ? 0 : agrees / total;
        const rawPercent = Math.round(raw * 100);

        finalPartyResults.push({
            party,
            agrees,
            disagrees,
            total,
            ao,
            raw,
            rawPercent,
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

        if (results === '' || selectedThemes.length === 0 || selectedParties.length === 0) {
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
            `;

            const resetButton = document.getElementById("reset-button");
            resetButton.addEventListener("click", () => {
                localStorage.setItem("selectedThemes", [].toString());
                localStorage.setItem("selectedParties", [].toString());
                localStorage.setItem("selectedStatements", [].toString());
                history.replaceState(null, '', '?');
                location.reload();
            });
        }           
    }

    loadStatementForm();
    reloadStatementForm();
    reloadResults();

    ///// Event Listeners :

    // Show/hide party names
    document.getElementById("show-parties").addEventListener("change", () => {
        for (let elem of document.getElementsByClassName('show-party-names')) {
            elem.style.display = document.getElementById("show-parties").checked ? "inline" : "none";
        }
        for (let elem of document.getElementsByClassName('hide-party-names')) {
            elem.style.display = document.getElementById("show-parties").checked ? "none" : "inline";
        }
    })

    // Select all parties
    document.getElementById("select-all-parties").addEventListener("click", () => {
        let nothing_selected = selectedParties.length === 0;
        parties.forEach((party) => {
            selectedParties.set(party, nothing_selected);
            document.getElementById(party).checked = nothing_selected;
        });
        localStorage.setItem("selectedParties", JSON.stringify(selectedParties))
        reloadStatementForm();
        reloadResults();
    });

    // Select all themes
    document.getElementById("select-all-themes").addEventListener("click", () => {
        let nothing_selected = selectedThemes.length === 0;
        themes.forEach((theme) => {
            selectedThemes.set(theme, nothing_selected);
            document.getElementById(theme).checked = nothing_selected;
        });
        localStorage.setItem("selectedThemes", JSON.stringify(selectedThemes))
        reloadStatementForm();
        reloadResults();
    });

    // Handle checkboxes of parties
    document.getElementById("party-checkboxes").addEventListener("change", (event) => {
        if (event.target.checked) {
            selectedParties.push(event.target.id)
        } else {
            selectedParties.splice(selectedParties.indexOf(event.target.id), 1)
        }
        localStorage.setItem("selectedParties", JSON.stringify(selectedParties))
        reloadStatementForm();
        reloadResults();
    });

    // Handle checkboxes of themes
    document.getElementById("theme-checkboxes").addEventListener("change", (event) => {
        if (event.target.checked) {
            selectedThemes.push(event.target.id)
        } else {
            selectedThemes.splice(selectedThemes.indexOf(event.target.id), 1)
        }
        localStorage.setItem("selectedThemes", JSON.stringify(selectedThemes))
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

