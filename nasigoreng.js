function bruchZuZahl(bruch) {
    if (!bruch) return 0;
    if (bruch.includes('/')) {
        const [zaehler, nenner] = bruch.split('/');
        return parseFloat(zaehler) / parseFloat(nenner);
    }
    return parseFloat(bruch);
}

function zahlZuBruchString(zahl) {
    if (zahl % 1 === 0) { return zahl.toString();}; // Ganze Zahl

    const ganz = Math.floor(zahl);
    const rest = zahl - ganz;

    const naheFraktionen = [
        { bruch: "1/4", wert: 0.25 },
        { bruch: "1/3", wert: 1 / 3 },
        { bruch: "1/2", wert: 0.5 },
        { bruch: "2/3", wert: 2 / 3 },
        { bruch: "3/4", wert: 0.75 }
    ];

    let naechste = naheFraktionen.reduce((prev, curr) =>
        Math.abs(curr.wert - rest) < Math.abs(prev.wert - rest) ? curr : prev
    );

    return ganz > 0 ? `${ganz} ${naechste.bruch}` : naechste.bruch;
}

function aktualisiereZutaten() {
    const portionen = parseInt(document.getElementById("input-portion").value);
    const zutaten = document.querySelectorAll("td[data-menge]");

    zutaten.forEach(td => {
        const mengeRaw = td.getAttribute("data-menge");
        const einheit = td.getAttribute("data-einheit") || "";
        const zutat = td.getAttribute("data-zutat") || "";

        const mengeProPortion = bruchZuZahl(mengeRaw);
        const neueMenge = mengeProPortion * portionen;

        const text = isNaN(neueMenge)
            ? `${mengeRaw} ${einheit} ${zutat}` // Falls Umrechnung fehlschlägt
            : `${zahlZuBruchString(neueMenge)} ${einheit} ${zutat}`;

        td.innerText = text.trim();
    });
}
