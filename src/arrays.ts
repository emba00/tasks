/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return numbers;
    } else if (numbers.length == 1) {
        const newnumbers = [...numbers, ...numbers];
        return newnumbers;
    } else {
        const firstlast = [10, 4];
        firstlast.splice(0, 1, numbers[0]);
        firstlast.splice(1, 1, numbers[numbers.length - 1]);
        return firstlast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triply = numbers.map((ele: number): number => ele * 3);
    return triply;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let toint = numbers.map((ele: string): number => parseInt(ele));
    toint = toint.map((ele: number): number =>
        isNaN(ele) == true ? (ele = 0) : ele
    );
    return toint;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let nodolla = [...amounts];
    nodolla = nodolla.map((ele: string): string =>
        ele.startsWith("$") == true ? ele.replace("$", "") : ele
    );
    let toint = nodolla.map((ele: string): number => parseInt(ele));
    toint = toint.map((ele: number): number =>
        isNaN(ele) == true ? (ele = 0) : ele
    );
    return toint;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let loud = messages.map((ele: string): string =>
        ele.endsWith("!") == true ? ele.toUpperCase() : ele
    );
    loud = loud.filter((ele: string): boolean => !ele.endsWith("?"));
    return loud;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((ele: string): boolean => ele.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const colorsrgb = colors.filter(
        (ele: string): boolean =>
            ele == "red" || ele == "blue" || ele == "green"
    );
    if (colorsrgb.length == colors.length || colors.length == 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length == 0) {
        const nothing = "0=0";
        return nothing;
    }
    const sum = addends.reduce(
        (current: number, num: number) => current + num,
        0
    );
    let mademath = addends.map((ele: number): string => ele.toString());
    mademath = mademath.map((ele: string): string =>
        mademath.indexOf(ele) != addends.length - 1 ? ele + "+" : ele
    );
    let mathmade = sum + "=" + mademath;
    mathmade = mathmade.replaceAll(",", "");
    return mathmade;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const coolarr = [...values];
    const firstneg = coolarr.findIndex((ele: number): boolean => ele < 0);
    if (firstneg != -1) {
        const coolerarr = coolarr.filter(
            (ele: number): boolean => coolarr.indexOf(ele) < firstneg
        );
        const sum = coolerarr.reduce(
            (current: number, num: number) => current + num,
            0
        );
        coolarr.splice(firstneg + 1, 0, sum);
    } else {
        const sum = coolarr.reduce(
            (current: number, num: number) => current + num,
            0
        );
        coolarr.push(sum);
    }
    return coolarr;
}
