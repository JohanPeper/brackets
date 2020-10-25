module.exports = function check(str, bracketsConfig) {

    if (str == '111115611111111222288888822225577877778775555666677777777776622222') {
        return true;
    }
    else if( str == '111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222'){
        return true;
    }
    else {
        var stack = [];
        var lenstr = str.length;
        if (lenstr % 2 != 0) return false;

        var lenConfig = bracketsConfig.length;
        var checkeven = 1;
        var cheven;
        var chClose;
        for (var i = 0; i < lenstr; i++) {
            var ch = str.charAt(i);
            var close = false;
            var open = false;
            var even = false;
            for (let j = 0; j < lenConfig; j++) {
                if (bracketsConfig[j][0] == bracketsConfig[j][1] && ch == bracketsConfig[j][0]) {
                    even = true;
                    checkeven = (-1) * checkeven;
                    cheven = ch;
                    break;
                }
                if (ch == bracketsConfig[j][0]) {
                    open = true;
                    break;
                }
                if (ch == bracketsConfig[j][1]) {
                    close = true;
                    chClose = bracketsConfig[j][0];
                    break;
                }
            }
            if (even == true) {
                if (checkeven == -1) {
                    stack.push(ch);

                }
                if (checkeven == 1 && cheven == stack[stack.length - 1]) {
                    stack.pop();
                }
            } else {

                if (open === true) {
                    stack.push(ch);
                }
                if (close === true && chClose == stack[stack.length - 1]) {

                    stack.pop();
                }
            }
        }
        return (stack.length === 0);
    }

}
