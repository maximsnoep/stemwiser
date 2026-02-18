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

	// Election data
	elections = [
		{
			id: "26ein",
			tag: "Municipal elections 2026 (Eindhoven)",
			data: data_2026_eindhoven,
		},
		{
			id: "26arn",
			tag: "Municipal elections 2026 (Arnhem)",
			data: data_2026_arnhem,
		},
		{
			id: "25",
			tag: "General election 2025",
			data: data_2025_national,
		},
		{
			id: "24",
			tag: "European election 2024",
			data: data_2024_european,
		},
		{
			id: "23",
			tag: "General election 2023",
			data: data_2023_national,
		},
	];

	// Extract from URL
	const urlParams = new URLSearchParams(window.location.search);
	var url_dataset = urlParams.get("s");
	if (!url_dataset) {
		url_dataset = "26ein";
	}
	const url_data = urlParams.get("d");

	// GET DATA
	var data = data_2026_eindhoven;

	if (elections.some((election) => election.id === url_dataset)) {
		data = elections.find((election) => election.id === url_dataset).data;
	}

	const statements = document.getElementById("statements");

	// Extract unique parties and themes
	const parties = [
		...new Set(
			data
				.map((item) => item.results.map((result) => result.party))
				.flat(),
		),
	];
	const themes = [...new Set(data.map((item) => item.theme))];

	// shuffle the parties and themes
	parties.sort(() => Math.random() - 0.5);
	themes.sort(() => Math.random() - 0.5);

	let selectedParties = [];
	let selectedThemes = [];
	let selectedStatements = new Map();

	// POPULATE IF STORED IN URL
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
			selectedParties =
				JSON.parse(
					localStorage.getItem("selectedParties_" + url_dataset),
				) || [];
			for (let party of selectedParties) {
				if (!parties.includes(party)) {
					selectedParties.splice(selectedParties.indexOf(party), 1);
				}
			}
		} catch (error) {}
		try {
			selectedThemes =
				JSON.parse(
					localStorage.getItem("selectedThemes_" + url_dataset),
				) || [];
			for (let theme of selectedThemes) {
				if (!themes.includes(theme)) {
					selectedThemes.splice(selectedThemes.indexOf(theme), 1);
				}
			}
		} catch (error) {}
		try {
			selectedStatements = new Map(
				JSON.parse(
					localStorage.getItem("selectedStatements_" + url_dataset),
				) || [],
			);
		} catch (error) {}
	}

	console.log(url_dataset);

	// Populate the elections checkboxes
	elections.forEach((election) => {
		document.getElementById("election-checkboxes").innerHTML += `
			<div class="d-flex align-items-baseline">
                <input ${url_dataset === election.id ? "checked" : ""} type="checkbox" class="election btn-check" id="${election.id}" autocomplete="off">
                <label for="${election.id}" data-election="${election.id}" class="election-label ms-2 my-1 toggle-text btn btn-outline-dark" style="border-radius: 0px;">${election.tag}</label>
            </div>
        `;
	});

	// Navigate when clicking an election label. Remove/clean the `d` parameter so progress is lost, and set only `s`.
	document
		.getElementById("election-checkboxes")
		.addEventListener("click", (e) => {
			const label =
				e.target && e.target.closest
					? e.target.closest(".election-label")
					: null;
			if (label) {
				const s = label.dataset.election;
				// Navigate to same page with only s parameter (clean d)
				window.location.search = `?s=${encodeURIComponent(s)}`;
			}
		});

	// Small Reset All button: create styled fixed button bottom-left with hover
	(function addResetAllButton() {
		const btn = document.createElement("span");
		btn.id = "reset-all-button";
		// keep Bootstrap danger look, but position via CSS below
		btn.className = "btn btn-dark ms-2 my-1";
		btn.textContent = "Reset";

		// Add CSS for fixed position and hover behaviour
		const style = document.createElement("style");
		style.textContent = `
				#reset-all-button {
					position: fixed;
					left: 12px;
					bottom: 12px;
					z-index: 99999;
					font-size: 0.85rem;
					border-radius: 0;
				}

				/* On small screens, reduce bottom offset so it doesn't overlap UI too much */
				@media (max-width: 480px) {
					#reset-all-button {
						left: 8px;
						bottom: 8px;
						font-size: 0.8rem;
						padding: 0.3rem 0.55rem;
					}
				}
		`;
		// append style and button to body so fixed positioning works reliably
		document.head.appendChild(style);
		document.body.appendChild(btn);

		btn.addEventListener("click", () => {
			// Clear everything in localStorage and reset URL to path-only
			localStorage.clear();
			history.replaceState(null, "", location.pathname);
			// Reload so UI reflects cleared state
			location.reload();
		});
	})();

	// Populate the party checkboxes
	parties.forEach((party) => {
		document.getElementById("party-checkboxes").innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedParties.includes(party) ? "checked" : ""} type="checkbox" class="party d-none" id="${party}">
                <label for="${party}" class="ms-2 my-1 toggle-text btn btn-outline-dark" style="border-radius: 0px;">${party}</label>
            </div>
        `;
	});

	// Populate the theme checkboxes
	themes.forEach((theme) => {
		document.getElementById("theme-checkboxes").innerHTML += `
            <div class="d-flex align-items-baseline">
                <input ${selectedThemes.includes(theme) ? "checked" : ""} type="checkbox" class="theme d-none" id="${theme}">
                <label for="${theme}" class="ms-2 my-1 toggle-text btn btn-outline-dark" style="border-radius: 0px;">${theme}</label>
            </div>
        `;
	});

	// Load the form
	let loadStatementForm = () => {
		statements.innerHTML = "";
		statements.innerHTML +=
			"<div id='no-parties-or-themes' style='display: none;' class='small'><p><i>Please select at least one party and one theme.</i></p></div>";

		data.forEach((themeData) => {
			let statementItems = "";
			themeData.results.forEach((result) => {
				let agree = selectedStatements.get(
					result.party + "-" + themeData.theme + "-agree",
				);
				let disagree = selectedStatements.get(
					result.party + "-" + themeData.theme + "-disagree",
				);
				let none = selectedStatements.get(
					result.party + "-" + themeData.theme + "-none",
				);
				statementItems += `
                    <li class="list-group-item mx-4 my-4 p-4 small" id="item-${result.party}-${themeData.theme}" style="border-radius: 0px; border: 1px solid #e6e6e6ff; background: none; display: none;">
                        <p>"${result.statement.replaceAll(result.party, `<span class="show-party-names" style="display:none">${result.party}</span><span class="hide-party-names" style="font-style: italic; display:none">PARTY</span>`)}" <span class="show-party-names" style="display:none"><br/> - ${result.party}</span></p>
                        <div class="d-flex flex-wrap justify-content-center mx-5 btn-group">
                            <input ${disagree ? "checked" : ""} type="radio" class="btn-check ${result.party}-disagree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-disagree" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center mx-1 my-1" style="border-radius: 0px;" for="${result.party}-${themeData.theme}-disagree"><span class="bi bi-hand-thumbs-down-fill px-1"></span> <span>disagree</span></label>

                            <input ${none ? "checked" : ""} type="radio" class="mx-2 btn-check ${result.party}-none" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-none" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center mx-1 my-1" style="border-radius: 0px;" for="${result.party}-${themeData.theme}-none"><span>undecided</span></label>

                            <input ${agree ? "checked" : ""} type="radio" class="mx-2 btn-check ${result.party}-agree" name="${result.party}-${themeData.theme}" id="${result.party}-${themeData.theme}-agree" autocomplete="off">
                            <label class="btn btn-outline-dark btn-sm d-flex justify-content-center mx-1 my-1" style="border-radius: 0px;" for="${result.party}-${themeData.theme}-agree"><span class="bi bi-hand-thumbs-up-fill px-1"></span> <span>agree</span></label>
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
            `;
		});

		for (let elem of document.getElementsByClassName("show-party-names")) {
			elem.style.display = document.getElementById("show-parties").checked
				? "inline"
				: "none";
		}
		for (let elem of document.getElementsByClassName("hide-party-names")) {
			elem.style.display = document.getElementById("show-parties").checked
				? "none"
				: "inline";
		}
	};

	// Load the form
	let reloadStatementForm = () => {
		// Populate the party checkboxes
		parties.forEach((party) => {
			document.getElementById(party).checked =
				selectedParties.includes(party);
		});

		// Populate the theme checkboxes
		themes.forEach((theme) => {
			document.getElementById(theme).checked =
				selectedThemes.includes(theme);
		});

		if (selectedParties.length === 0 || selectedThemes.length === 0) {
			document.getElementById("no-parties-or-themes").style.display =
				"inline";
			data.forEach((themeData) => {
				themeData.results.forEach((result) => {
					document.getElementById(
						`item-${result.party}-${themeData.theme}`,
					).style.display = "none";
				});
				document.getElementById(
					`item-${themeData.theme}`,
				).style.display = "none";
			});
			document.getElementById("statement-count-message").style.display =
				"none";
		} else {
			document.getElementById("no-parties-or-themes").style.display =
				"none";
			let total_statement_count = 0;
			data.forEach((themeData) => {
				let this_theme_count = 0;
				themeData.results.forEach((result) => {
					if (selectedParties.includes(result.party)) {
						document.getElementById(
							`item-${result.party}-${themeData.theme}`,
						).style.display = "block";
						this_theme_count++;
					} else {
						document.getElementById(
							`item-${result.party}-${themeData.theme}`,
						).style.display = "none";
					}
				});
				if (selectedThemes.includes(themeData.theme)) {
					document.getElementById(
						`item-${themeData.theme}`,
					).style.display = "flex";
					total_statement_count += this_theme_count;
				} else {
					document.getElementById(
						`item-${themeData.theme}`,
					).style.display = "none";
				}
			});
			document.getElementById("statement-count-message").style.display =
				"block";
			document.getElementById("current-statements").innerText =
				selectedStatements.size;
			document.getElementById("total-statements").innerText =
				total_statement_count;
		}
	};

	let reloadResults = () => {
		document.getElementById("current-statements").innerText =
			selectedStatements.size;

		// turn it into a string
		var url_data = packForUrl({
			selectedParties,
			selectedThemes,
			selectedStatements: Array.from(selectedStatements.entries()),
		});

		if (selectedParties.length === 0 && selectedThemes.length === 0) {
			// If no parties or themes are selected, hide all results
			document.getElementById("party-results").innerHTML = "";
			url_data = "";
		}

		// Store the URL data in url
		history.replaceState(null, "", `?s=${url_dataset}&d=${url_data}`);

		const partyAgreeCounts = {};
		const partyDisagreeCounts = {};

		for (let party of selectedParties) {
			partyAgreeCounts[party] = 0;
			partyDisagreeCounts[party] = 0;
		}

		for (let party of selectedParties) {
			for (let statement of document.getElementsByClassName(
				`${party}-agree`,
			)) {
				if (statement.checked) {
					partyAgreeCounts[party] += 1;
				}
			}
			for (let statement of document.getElementsByClassName(
				`${party}-disagree`,
			)) {
				if (statement.checked) {
					partyDisagreeCounts[party] += 1;
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

		finalPartyResults.sort(
			(a, b) =>
				b.ao - a.ao ||
				b.raw - a.raw ||
				b.total - a.total ||
				b.agrees - a.agrees ||
				a.party.localeCompare(b.party),
		);

		const partyResults = document.getElementById("party-results");
		let results = "";

		finalPartyResults.forEach((res) => {
			results += `
            <p>
                ${res.ao >= 0 ? "+" : ""}${res.ao} for <b>${res.party}</b> <span class="mx-2 small" style="color: #888888">(${res.rawPercent}% agreed)</span>
            </p>
            `;
		});

		if (
			results === "" ||
			selectedThemes.length === 0 ||
			selectedParties.length === 0
		) {
			partyResults.innerHTML = "";
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
                        </div>
                    </div>
                </div>`;
		}
	};

	loadStatementForm();
	reloadStatementForm();
	reloadResults();

	///// Event Listeners :

	// Show/hide party names
	document.getElementById("show-parties").addEventListener("change", () => {
		for (let elem of document.getElementsByClassName("show-party-names")) {
			elem.style.display = document.getElementById("show-parties").checked
				? "inline"
				: "none";
		}
		for (let elem of document.getElementsByClassName("hide-party-names")) {
			elem.style.display = document.getElementById("show-parties").checked
				? "none"
				: "inline";
		}
	});

	// Select all parties
	document
		.getElementById("select-all-parties")
		.addEventListener("click", () => {
			if (selectedParties.length === parties.length) {
				selectedParties = [];
			} else {
				selectedParties = [...parties];
			}
			localStorage.setItem(
				"selectedParties_" + url_dataset,
				JSON.stringify(selectedParties),
			);
			reloadStatementForm();
			reloadResults();
		});

	// Select all themes
	document
		.getElementById("select-all-themes")
		.addEventListener("click", () => {
			if (selectedThemes.length === themes.length) {
				selectedThemes = [];
			} else {
				selectedThemes = [...themes];
			}
			localStorage.setItem(
				"selectedThemes_" + url_dataset,
				JSON.stringify(selectedThemes),
			);
			reloadStatementForm();
			reloadResults();
		});

	// Handle checkboxes of parties
	document
		.getElementById("party-checkboxes")
		.addEventListener("change", (event) => {
			if (event.target.checked) {
				selectedParties.push(event.target.id);
			} else {
				selectedParties.splice(
					selectedParties.indexOf(event.target.id),
					1,
				);
			}
			localStorage.setItem(
				"selectedParties_" + url_dataset,
				JSON.stringify(selectedParties),
			);
			reloadStatementForm();
			reloadResults();
		});

	// Handle checkboxes of themes
	document
		.getElementById("theme-checkboxes")
		.addEventListener("change", (event) => {
			if (event.target.checked) {
				selectedThemes.push(event.target.id);
			} else {
				selectedThemes.splice(
					selectedThemes.indexOf(event.target.id),
					1,
				);
			}
			localStorage.setItem(
				"selectedThemes_" + url_dataset,
				JSON.stringify(selectedThemes),
			);
			reloadStatementForm();
			reloadResults();
		});

	// Handle radios of statements
	statements.addEventListener("change", (event) => {
		let partyTheme = event.target.id.substring(
			0,
			event.target.id.lastIndexOf("-"),
		);
		selectedStatements.delete(partyTheme + "-none");
		selectedStatements.delete(partyTheme + "-agree");
		selectedStatements.delete(partyTheme + "-disagree");
		selectedStatements.set(event.target.id, true);
		localStorage.setItem(
			"selectedStatements_" + url_dataset,
			JSON.stringify(Array.from(selectedStatements.entries())),
		);
		reloadResults();
	});
});
