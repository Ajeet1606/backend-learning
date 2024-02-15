/**
the process of type conversion.
1. Implicit Conversion: when JS does it automatically.
    -> Abstract Operations: a better way to understand the internal working of algorithms behind implicit conversion.
        -> ToPrimitive(input, {preferredType}): converting non primitive(object) to primitive.
        input: mandatory value whose type will be converted.
        preferredType: your choice, optional
        JS' default choice is number.

        now it calls OrdinaryToPrimitive ( O, preferredType )

        if preferredType == number:
            call valueOf() 
            if it didn't get a primitve, call toString()
            still not, throw typeError Exception
        if preferredType == string:
            call toString()
            not yet done, call valueOf()
            still not done, throw typeError exception.

2. Explicit Conversion;
------------------------------------------------------------------------------------------------------
P.S: here we're studying abstract ops, ToString() != toString(){it is not abstract}


--------------------- ToNumber() ---------------------------
    applied on operands of - operation:
    - calls ToNumber() on both operands, both get converted to number
    any string is converted to number if digit by digit they form a number else NaN.

    ToNumber working:

    ''      ->   0
    '0'     ->   0
    '0.'    ->   0
    '-0'    ->   -0
    '3.1'   ->   3.1
    '.'     ->   NaN
    '123'   ->   123
    '1+2'   ->   NaN
    'abc'   ->   NaN
    'false' ->   NaN
    false   ->   0
    ['12']  ->   12
    [undefined] ->   0
    [] gets ignored

    undefined       ->      NaN
    null            ->      +0
    Boolean(true)   ->      1
    Boolean(false)  ->      0
    string          ->      string of 0-9 will give proper num anything else NaN
    objects:        ->      ToNumber(ToPrimitive(arg, {hint: number}))
    10 - {'a': 10, valueOf(){return 10}} -> output: 0
    10 - {'a': 10, valueOf(){return {}}, toString(){return '5'}} output: 5

----------------------  ToString()  -------------------------------------------
---------------------   + operation uses this operate on data   -----------

    + operation: calls ToPrimitive on both operands then:
-> if any one of the operands is string, calls ToString on both and does concatenation.
-> else calls ToNumber on both and adds them.

    ToString() working:

    input           output

    undefined       "undefined"
    null            "null"
    true            "true"
    false           "false"
    number          NumberToString(num)
    object          toString(ToPrimitive(arg, {hint:string}))




 */
