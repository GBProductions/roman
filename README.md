# _Roman Numeral Converter_

#### _A program to convert a number into Roman Numerals._
#### _February 7th 2021_

#### By _**Garrett Brown** **Carlos Urquiza**_

## Description

_Program converts numbers into Roman Numerals._

## Specs

# Rules:

Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000

Rule #1: Add all numbers together (i.e. II is 2, VI is 6)
Rule #2: There can not be more than three of the same characters in a row. Switch to subtraction (i.e. 4 is IV not IIII)
Rule #3: Separate ones, tens, hundreds, and thousands.
Rule #4: You cannot count higher than 3,999 in Roman Numerals.


Describe: romanNumerals()

Test #1
Test: "When user enters '1', the program will return 'I'."
Expect(romanNumerals('1')).toEqual('I');

    * Test #1.1
        Test: "When user enters '5', the program will return 'V'."
        Expect(romanNumerals('5')).toEqual('V');
     * Test #1.2
        Test: "When user enters '10', the program will return 'X'."
        Expect(romanNumerals('10')).toEqual('X');
    * Test #1.3
        Test: "When user enters '50', the program will return 'L'."
        Expect(romanNumerals('50')).toEqual('L');
    * Test #1.4
        Test: "When user enters '100', the program will return 'C'."
        Expect(romanNumerals('100')).toEqual('C');
    * Test #1.5
        Test: "When user enters '500', the program will return 'D'."
        Expect(romanNumerals('500')).toEqual('D');
    * Test #1.6
        Test: "When user enters '1000', the program will return 'M'."
        Expect(romanNumerals('1000')).toEqual('M');

Test #2
Test: "When user enters '2', the program will return 'II'."
Expect(romanNumerals('2')).toEqual('II');

Test #3
Test: 
Expect:

Test #4
Test: 
Expect: 

Test #5
Test:
Expect:

Test #6
Test:
Expect:



## Setup/Installation Requirements


* _Open terminal and navigate to 'Desktop'._
* _In terminal, type 'git clone https://github.com/GBProductions/roman' and press enter._
* _In terminal, type 'cd roman' and press enter._
* _In terminal, type 'code .' and press enter to open project in VS Code._
* _Right click on 'index.html' and select 'Open with Live Server' to view page in your favorite web browser._


## Known Bugs

_There are currently no known bugs._

## Support and contact details

_For support, please contact Garrett Brown at <garrettpaulbrown@gmail.com> or Carlos Urquiza at <webquiza@gmail.com>_

## Technologies Used

* _HTML, CSS, JS_
* _Bootstrap, JQuery_
* _VS Code, GitHub_

### License

*Available under MIT Licensing*

Copyright (c) 2021 **_Garrett Brown_** **_Carlos Urquiza_**

Co-authored-by: Carlos Urquiza <webquiza@gmail.com>