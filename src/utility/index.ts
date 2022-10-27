const fixNumber = (n: number) => {
    let raw = n.toString().split("."), a = raw[0], b = raw[1] ? "." + raw[1] : "", c = 1, e = "";

    if (a.startsWith("-")) {
        a = a.slice(1);
        e = "-";
    }

    for (let i = a.length - 1; i >= 0; i--, c++) {
        if (c === 3 && i !== 0) {
            c = 0;
            a = `${a.substring(0, i)},${a.substring(i)}`
        }
    }

    return e + a + b;
};

var SI_SYMBOL = ["", "K", "M", "B", "T", "P", "E"];

function formatNumber(number: number) {
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier == 0) return number;

    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    var scaled = number / scale;

    return scaled.toFixed(2) + suffix;
}

export {
    fixNumber,
    formatNumber
}

export const CLIENT_ID = "722071202654322688"; 