module.exports = function toReadable(number) {
    number = number.toString();
    const numbersFrom0To20 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    const numbersTo100 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number <= 20) {
        return numbersFrom0To20[number];
    } else if (number > 20 && number < 100) {
        if (number[1] == 0) {
            return numbersTo100[number[0]];
        }
        return `${numbersTo100[number[0]]} ${numbersFrom0To20[number[1]]}`;
    } else if (number >= 100) {
        if (number[1] == 0 && number[2] == 0) {
            return `${numbersFrom0To20[number[0]]} hundred`;
        } else if (number[1] < 2) {
            if (number[1] == 0) {
                return `${numbersFrom0To20[number[0]]} hundred ${
                    numbersFrom0To20[number[2]]
                }`;
            }
            return `${numbersFrom0To20[number[0]]} hundred ${
                numbersFrom0To20[number[1] + number[2]]
            }`;
        } else if (number[1] >= 2 && number[2] == 0) {
            return `${numbersFrom0To20[number[0]]} hundred ${
                numbersTo100[number[1]]
            }`;
        } else {
            return `${numbersFrom0To20[number[0]]} hundred ${
                numbersTo100[number[1]]
            } ${numbersFrom0To20[number[2]]}`;
        }
    }
};
