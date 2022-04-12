/* Q: Check if all digits of the given integer are even. */

// URL : https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function evenDigitsOnly(n) {
    var array = String(n).split(''), flag = true
    for (var i = 0; i < array.length && flag; i++){
        if (array[i] % 2 != 0)
            flag = false
    }
    return flag
}

exports.evenDigitsOnly = evenDigitsOnly;
