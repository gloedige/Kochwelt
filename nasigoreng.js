// <function bruchZuZahl(bruch) {
//     if (!bruch) return 0;
//     if (bruch.includes('/')) {
//         const [zaehler, nenner] = bruch.split('/');
//         return parseFloat(zaehler) / parseFloat(nenner);
//     }
//     return parseFloat(bruch);
// }

// function zahlZuBruchString(zahl) {
//     if (zahl % 1 === 0) { return zahl.toString();}; // Ganze Zahl

//     const ganz = Math.floor(zahl);
//     const rest = zahl - ganz;

//     const naheFraktionen = [
//         { bruch: "1/4", wert: 0.25 },
//         { bruch: "1/3", wert: 1 / 3 },
//         { bruch: "1/2", wert: 0.5 },
//         { bruch: "2/3", wert: 2 / 3 },
//         { bruch: "3/4", wert: 0.75 }
//     ];

//     let naechste = naheFraktionen.reduce((prev, curr) =>
//         Math.abs(curr.wert - rest) < Math.abs(prev.wert - rest) ? curr : prev
//     );

//     return ganz > 0 ? `${ganz} ${naechste.bruch}` : naechste.bruch;
// }

// function aktualisiereZutaten(event) {
//     event.preventDefault();
//     const portionen = parseInt(document.getElementById("input-portion").value);
//     const zutaten = document.querySelectorAll("td[data-menge]");

//     if (portionen<1){console.log('Wert muss größer gleich 1 sein')}
//     else {
//     zutaten.forEach(td => {
//         const mengeRaw = td.getAttribute("data-menge");
//         const einheit = td.getAttribute("data-einheit") || "";
//         const zutat = td.getAttribute("data-zutat") || "";

//         const mengeProPortion = bruchZuZahl(mengeRaw);
//         const neueMenge = mengeProPortion * portionen;

//         const text = isNaN(neueMenge)
//             ? `${mengeRaw} ${einheit} ${zutat}` // Falls Umrechnung fehlschlägt
//             : `${zahlZuBruchString(neueMenge)} ${einheit} ${zutat}`;
        
//         td.innerText = text.trim();
//     });
//     };
// }
function fractionToNumber(fraction) {
    if (!fraction) return 0;
    if (fraction.includes('/')) {
        const [numerator, denominator] = fraction.split('/');
        return parseFloat(numerator) / parseFloat(denominator);
    }
    return parseFloat(fraction);
}

function numberToFractionString(number) {
    if (number % 1 === 0) { return number.toString(); } // Whole number

    const whole = Math.floor(number);
    const decimal = number - whole;

    const commonFractions = [
        { fraction: "1/4", value: 0.25 },
        { fraction: "1/3", value: 1 / 3 },
        { fraction: "1/2", value: 0.5 },
        { fraction: "2/3", value: 2 / 3 },
        { fraction: "3/4", value: 0.75 }
    ];

    let closest = commonFractions.reduce((prev, curr) =>
        Math.abs(curr.value - decimal) < Math.abs(prev.value - decimal) ? curr : prev
    );

    return whole > 0 ? `${whole} ${closest.fraction}` : closest.fraction;
}

function updateIngredients(event) {
    event.preventDefault();
    const servings = parseInt(document.getElementById("input-portion").value);
    const ingredients = document.querySelectorAll("td[data-menge]");

    if (servings < 1) {
        console.log('Value must be greater than or equal to 1');
    } else {
        ingredients.forEach(td => {
            const rawAmount = td.getAttribute("data-menge");
            const unit = td.getAttribute("data-einheit") || "";
            const ingredient = td.getAttribute("data-zutat") || "";

            const amountPerServing = fractionToNumber(rawAmount);
            const newAmount = amountPerServing * servings;

            const text = isNaN(newAmount)
                ? `${rawAmount} ${unit} ${ingredient}`
                : `${numberToFractionString(newAmount)} ${unit} ${ingredient}`;

            td.innerText = text.trim();
        });
    }
}
