---
title: "MVB Installation Script"
---
```javascript
/*******
To install the custom columns:

1) request an install of MVB Integrator app (30-day free trial) from the Imagine help desk.
2) after app is installed, copy and paste this script into app editor in imagine and run
3) the following columns are now available to add to your portfolio:

 MV-B (SPX) - Beta of holding with regards to .SPX
 MV-B ($Idx)- Beta of holding with regards to .DXY
 MV-B (Crude) - Beta of holding with regards to CLc1

 MV-$ (SPX) - Beta Adjusted $ Value of holding with regards to .SPX
 MV-$ ($Idx)- Beta Adjusted $ Value of holding with regards to .DXY
 MV-$ (Crude) - Beta Adjusted $ Value of holding with regards to CLc1

 MV-ESP (SPX) - Beta Adjusted ESP Value of holding with regards to .SPX
 MV-ESP ($Idx)- Beta Adjusted ESP Value of holding with regards to .DXY
 MV-ESP (Crude) - Beta Adjusted ESP Value of holding with regards to CLc1

 MV-Count - Count of Factors

Additional columns related to additional factors and scenarios can easily be created using this
script as a template.Contact Scouras Consulting Support for more information.

******/


/***********************************************************************************************************************
 *
 * sc.MVB.cc.Install.js
 *
 * Scouras Consulting Multivariate Beta Custom Column installer
 *
 * Author: Dino Scouras (DAS) - Scouras Consulting
 * Copyright (c) 2013 - Scouras Consulting - All rights reserved
 * Version 1.0 - February 4, 2013
 *
 *DateAuthorModification
 *
 *
 *DISCLAIMER: The installation program herein is provided on an "as is" basis, without warranty of any kind
 *to the fullest extent permitted by law.
 *
 *Scouras Consulting shall not be liable for any direct, indirect or consequential damages or costs of any type
 *arising out of any usage of this program.
 *
 ***********************************************************************************************************************/


var ioservices = require('ioservices');


var GLOBAL_JS_SCRIPT = 'sc.MVB.cc.TEST.js';

// Now for the various scenarios...
var GLOBAL_CRT_NAME = 'SC_MVB_DATA';
var GLOBAL_SCENARIO_SUFFIX = '';

var GLOBAL_COL_PREFIX = 'MV-B';


var GLOBAL_FACTOR_BETA_SUFFIX = 'B';
var GLOBAL_FACTOR_BETA_PIC = '\\###@####';
var GLOBAL_FACTOR_BETA_DISPLAY = 'Floating Point';
var GLOBAL_FACTOR_BETA_GROUP = 'Holding';
var GLOBAL_FACTOR_BETA_TOTAL = 'No Total';

var GLOBAL_FACTOR_BETATOT_SUFFIX = '$';
var GLOBAL_FACTOR_BETATOT_PIC = '\\############';
var GLOBAL_FACTOR_BETATOT_DISPLAY = 'Floating Point';
var GLOBAL_FACTOR_BETATOT_GROUP = 'Holding';
var GLOBAL_FACTOR_BETATOT_TOTAL = 'Total As Currency';


var GLOBAL_FACTOR_BETAESP_SUFFIX = 'ESP';
var GLOBAL_FACTOR_BETAESP_PIC = '\\############';
var GLOBAL_FACTOR_BETAESP_DISPLAY = 'Floating Point';
var GLOBAL_FACTOR_BETAESP_GROUP = 'Holding';
var GLOBAL_FACTOR_BETAESP_TOTAL = 'Total As Currency';

var GLOBAL_FACTOR_COUNT_SUFFIX = 'Count';
var GLOBAL_FACTOR_COUNT_PIC = '\\999';
var GLOBAL_FACTOR_COUNT_DISPLAY = 'Whole Number';

var GLOBAL_FACTOR_COUNT_GROUP = 'Holding';
var GLOBAL_FACTOR_COUNT_TOTAL = 'No Total';




var GLOBAL_FACTORS = [
{factor: '.SPX', display: '(SPX)'},
{factor: '.DXY', display: '($Idx)'},
{factor: 'CLc1', display: '(Crude)'}
];


var objArray = []; //To build the inputs for the IO call

for (let i = 0; i < GLOBAL_FACTORS.length; i++) {
let name = GLOBAL_COL_PREFIX + GLOBAL_FACTOR_BETA_SUFFIX + ' ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let comment = 'Scouras Consulting - MVB Factor Beta ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let formula = "app('" + GLOBAL_JS_SCRIPT + "', 'SC_MVBFactorBeta', '" +
GLOBAL_FACTORS[i].factor + "', '" + GLOBAL_CRT_NAME + "')";
let obj = {}; // First make the indicative

obj.Action = 'insertOrUpdate';
obj.Name = name;
obj.Group = GLOBAL_FACTOR_BETA_GROUP;
obj.DisplayAs = GLOBAL_FACTOR_BETA_DISPLAY;
obj.Picture = GLOBAL_FACTOR_BETA_PIC;
obj.Formula = formula;
obj.CalculateTotals = GLOBAL_FACTOR_BETA_TOTAL;
obj.UserComment = comment;

system.out.println('Custom Column Name: ' + name);
system.out.println('Custom Column Formula:' + formula);
system.out.println('Custom Column Comment:' + comment);

objArray.push(obj);

let name2 = GLOBAL_COL_PREFIX + GLOBAL_FACTOR_BETATOT_SUFFIX + ' ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let comment2 = 'Scouras Consulting - MVB Factor Beta Total ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let formula2 = "col('" + name + "')*col('$ Value')";



let obj2 = {}; // And then make the holdings total

obj2.Action = 'insertOrUpdate';
obj2.Name = name2;
obj2.Group = GLOBAL_FACTOR_BETATOT_GROUP;
obj2.DisplayAs = GLOBAL_FACTOR_BETATOT_DISPLAY;
obj2.Picture = GLOBAL_FACTOR_BETATOT_PIC;
obj2.Formula = formula2;
obj2.CalculateTotals = GLOBAL_FACTOR_BETATOT_TOTAL;
obj2.UserComment = comment2;

system.out.println('Custom Column Name: ' + name2);
system.out.println('Custom Column Formula:' + formula2);
system.out.println('Custom Column Comment:' + comment2);

objArray.push(obj2);


let name3 = GLOBAL_COL_PREFIX + GLOBAL_FACTOR_BETAESP_SUFFIX + ' ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let comment3 = 'Scouras Consulting - MVB Factor Beta ESP ' +
GLOBAL_FACTORS[i].display + GLOBAL_SCENARIO_SUFFIX;
let formula3 = "col('" + name + "')*col('ESP')";



let obj3 = {}; // And then make the holdings ESP total

obj3.Action = 'insertOrUpdate';
obj3.Name = name3;
obj3.Group = GLOBAL_FACTOR_BETAESP_GROUP;
obj3.DisplayAs = GLOBAL_FACTOR_BETAESP_DISPLAY;
obj3.Picture = GLOBAL_FACTOR_BETAESP_PIC;
obj3.Formula = formula3;
obj3.CalculateTotals = GLOBAL_FACTOR_BETATOT_TOTAL;
obj3.UserComment = comment3;

system.out.println('Custom Column Name: ' + name3);
system.out.println('Custom Column Formula:' + formula3);
system.out.println('Custom Column Comment:' + comment3);

objArray.push(obj3);



}


let cntname = GLOBAL_COL_PREFIX + GLOBAL_FACTOR_COUNT_SUFFIX + ' ' +
GLOBAL_SCENARIO_SUFFIX;
let cntcomment = 'Scouras Consulting - MVB Factor Count ' +
GLOBAL_SCENARIO_SUFFIX;
let cntformula = "app('" + GLOBAL_JS_SCRIPT + "', 'SC_MVBFactorCount', '" +
GLOBAL_CRT_NAME + "')";
let cntobj = {};

cntobj.Action = 'insertOrUpdate';
cntobj.Name = cntname;
cntobj.Group = GLOBAL_FACTOR_COUNT_GROUP;
cntobj.DisplayAs = GLOBAL_FACTOR_COUNT_DISPLAY;
cntobj.Picture = GLOBAL_FACTOR_COUNT_PIC;
cntobj.Formula = cntformula;
cntobj.CalculateTotals = GLOBAL_FACTOR_COUNT_TOTAL;
cntobj.UserComment = cntcomment;

system.out.println('Custom Column Name: ' + cntname);
system.out.println('Custom Column Formula:' + cntformula);
system.out.println('Custom Column Comment:' + cntcomment);


objArray.push(cntobj);


// Call the IO service
var ioresults;

ioresults = ioservices.uploadCustomColumns(objArray);

ioservices.displayResults(ioresults);
```