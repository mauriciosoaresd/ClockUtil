let actualTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
const layoutClasses = document.body.classList

function setSelectTimezones() {
	let select = document.getElementById("timeZoneSelect");
	actualTz = Intl.DateTimeFormat().resolvedOptions().timeZone;


	Intl.supportedValuesOf('timeZone').forEach(x => {
		if (x == actualTz) {
			select.add(new Option(x, x, true))

		}
		else {
			select.add(new Option(x, x, false))

		}
	})

	select.value = actualTz;
	setClock(select.value);
}

function setTimezoneSelectObserver() {
	let select = document.getElementById("timeZoneSelect");
	select.addEventListener("change", ev => actualTz = select.value)
}

function setClock() {
	let time = new Date().toLocaleTimeString("us-EN", { timeZone: actualTz });

	document.getElementById("clockDiv").innerHTML = time;
	setTimeout(setClock, 1000);

	if (time.substring(0, 2) >= 18 || time.substring(0, 2) < 6) {
		layoutClasses.remove("lightMode");
		layoutClasses.add("darkMode");
	} else {
		layoutClasses.remove("darkMode");
		layoutClasses.add("lightMode");
	}
	time = null;

}

function checkZeros(n) {
	if (n < 10) {
		return "0" + n;
	}
	return n;
}

function run() {
	setSelectTimezones();
	setClock();
	setTimezoneSelectObserver();
}

