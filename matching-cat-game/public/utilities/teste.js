
function prependNumber() {
    let single_digit = 1;
    let two_digits = 3;

    let prepended_out =
        String(single_digit).padStart(2, '0');
    let prepended_out2 =
        String(two_digits).padStart(2, '0');

    console.log(prepended_out += 1);
    console.log(prepended_out2);
}

prependNumber();

let num = 15;
let text = num.toString();
console.log(text)
const slice = text.slice(1, 2)
const number = parseInt(slice)
console.log(typeof text.slice(1, 2))
console.log(typeof number)
