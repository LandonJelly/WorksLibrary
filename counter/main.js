/**
 * Created by Administrator on 2016/9/10 0010.
 */
$(function () {
    var $input = $('input[name=input]');
    var lastInput;
    var lastSecondInput;
    $('button.number').on('click', function () {
        var value = $(this).text();
        var number = parseInt(value);
        if (lastOperator) {
            var inputValue2;
            if (lastSecondInput) {
                inputValue2 = lastSecondInput + '' + number;
            } else {
                inputValue2 = number;
            }
            $input.val(inputValue2);
            lastSecondInput = inputValue2;
        } else {
            var inputValue;
            if (lastInput) {
                inputValue = lastInput + '' + number;
            } else {
                inputValue = number;
            }
            $input.val(inputValue);
            lastInput = inputValue;
        }

    });
    var lastOperator;
    $("button.operators").on('click', function () {
        var operator = $(this).text();
        lastOperator = operator;
        $input.val('');
    });
    var result;
    $('button.result').on('click', function () {
        lastInput = +lastInput;
        lastSecondInput = +lastSecondInput;
        switch (lastOperator) {
            case '+':
                result = lastInput + lastSecondInput;
                break;
            case  '-':
                result = lastInput - lastSecondInput;
                break;
            case  '*':
                result = lastInput * lastSecondInput;
                break;
            case  '/':
                result = lastInput / lastSecondInput;
                break;
        }
        $input.val(result);
        lastInput = result;
        lastSecondInput = 0;
    });
    $('button.clear').on('click', function () {
        lastInput = '';
        lastOperator = '';
        lastSecondInput = '';
        $input.val('');
        result = 0;
        console.log(lastInput);
    });
});