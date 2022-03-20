export function romanToInteger(str) {
    let result = 0;
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 1; i < str.length; i++) {
        if (dict[str[i - 1]] >= dict[str[i]]) result += dict[str[i - 1]];
        else {
            result += dict[str[i]] - dict[str[i - 1]];
            i++;
        }

        if (i + 1 === str.length) result += dict[str[i]];
    }
    return result;
}
