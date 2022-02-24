module.exports = function toReadable (number) {
    let n = number + '',
        result = '';
    let l = n.length
    if (l === 3){
        result = dict[`${n[0]}`] + ' hundred '
        l--;
        n= n.slice(1);
        if (n == 0) {

            return  result.slice(0,  result.length -1);
        }
    }
    if (l <= 2)
    {
        let temp = +n;
        if (temp == 15 || temp == 18){
            return result + dict[temp]
        }
        if (temp >= 20)
        {
            result = result + '' + dict[`${n[0] + 0}`]
            if (0 < `${n[1]}`) result = result + " " + dict[`${n[1]}`]
            return result
        }
        if (temp > 13)
        {
             return  result + dict[`${n[1]}`] + 'teen'
        }
        else {
            return result+dict[temp]
        }

    }
    if (l == 1){
        return dict[`${number}`]
    }
}

let dict = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    15: 'fifteen',
    18: 'eighteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
    1000: 'thousand',
    1000000: 'million',
    1000000000: 'billion',
    tens : x => {if ( x> 2 )  return `${dict[x]}teen`}

}
