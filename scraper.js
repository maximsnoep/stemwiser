function wait(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
}

const MAX_PAGES = 100;

const THEME = ".statement__theme";
const TITLE = ".statement__title";

const INFO_BUTTON = ".statement__tab-button--more-info";
const INFO = ".statement__tab-text";

const SHOW_PARTIES = ".statement__tab-button--parties";
const PARTY_BUTTON = ".parties-column__party-header--with-explanation";
const PARTY_WRAPPER = ".parties-column__party";
const PARTY_EXPLANATION = ".parties-column__party-explanation";
const PARTY_NAME = ".parties-column__party-name";

const SKIP_BUTTON = ".statement__skip";

var all_statements = [];

for (var page = 1; page <= MAX_PAGES; page++) {
	await wait(1000);

	if (!document.querySelector(THEME)) {
		console.log("No more statements found, stopping.");
		break;
	}

	// THEME AND TITLE OF THE TOPIC
	var theme = document.querySelector(THEME).textContent.trim();
	var title = document.querySelector(TITLE).textContent.trim();

	console.log(`Processing page ${page}: ${theme} - ${title}`);

	// GET ADDITIONAL INFORMATION ABOUT THE TOPIC
	// var show_info_button = document.querySelector(INFO_BUTTON)[0];
	// show_info_button.click();
	// var info = document.querySelector(INFO).textContent.trim();
	var info = "";

	await wait(100);

	// GET THE STATEMENTS OF THE PARTIES
	document.querySelector(SHOW_PARTIES).click();

	await wait(100);
	var party_buttons = document.querySelectorAll(PARTY_BUTTON);
	for (var i = 0; i < party_buttons.length; i++) {
		party_buttons[i].click();
	}
	await wait(100);

	var result_per_party = [];

	document.querySelectorAll(PARTY_WRAPPER).forEach(function (partyElement) {
		var party = partyElement.querySelector(PARTY_NAME).textContent.trim();
		var statement = partyElement.querySelector(PARTY_EXPLANATION);
		if (statement) {
			statement = statement.textContent.trim();
		} else {
			statement = "";
		}
		result_per_party.push({
			party,
			statement,
		});
	});

	all_statements.push({
		theme: theme,
		title: title,
		info: info,
		results: result_per_party,
	});

	await wait(100);

	document.querySelector(SKIP_BUTTON).click();
}

console.log(all_statements);
