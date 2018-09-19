---
title: "TechExtend Installation Script"
---

```javascript
/*******

To install the custom columns:

 

1) request an install of TechExtend app (30-day free trial) from the Imagine help desk.

2) after app is installed, copy and paste this script into app editor in imagine and run

3) the following columns are now available to add to your portfolio:

 

EMA(12) - 12 day exponential moving average

EMA(26) - 26 day exponential moving average

 

RSI(14) - 14 day relative strength indicator

RSI(21) - 21 day relative strength indicator

 

SMA(50) - 50 day simple moving average

SMA(100) - 100 day simple moving average

SMA(200) - 200 day simple moving average

 

MACD(26,12) - MACD of 26 and 12 day exponential moving average

MACD(26,12,9) - 9 day exponential average of MACD of 26 and 12 day exponential moving average

 

 

 

******/

 

/***********************************************************************************************************************

*

* TechExtend.CCInstall.sc.js

*

* Scouras Consulting Technical Extension Custom Column installer

*

* Author: Dino Scouras (DAS) - Scouras Consulting

* Copyright (c) 2013 - Scouras Consulting - All rights reserved

* Version 1.0 - January 30, 2013

*

* Date Author Modification

*

*

* DISCLAIMER: The installation program herein is provided on an "as is" basis, without warranty of any kind

* to the fullest extent permitted by law.

*

* Scouras Consulting shall not be liable for any direct, indirect or consequential damages or costs of any type

* arising out of any usage of this program.

*

***********************************************************************************************************************/

 

 

var ioservices = require('ioservices');

 

var objArray = []; //To build the inputs for the IO call

objArray.push({Action: 'insertOrUpdate', Name: 'EMA(12)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_EMA', 12)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 12 day EMA'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'EMA(26)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_EMA', 26)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 26 day EMA'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'RSI(14)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\###@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_RSI', 14)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 14 day RSI'});

 

 

objArray.push({Action: 'insertOrUpdate', Name: 'RSI(21)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\###@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_RSI', 21)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 21 day RSI'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'SMA(50)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_SMA', 50)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 50 day SMA'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'SMA(100)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_SMA', 100)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 100 day SMA'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'SMA(200)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_SimpleTechInd', 'SC_SMA', 200)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting 200 day SMA'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'MACD(26,12)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_MACDTechInd', 'SC_MACD', 26, 12, 1)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting MACD - 26 and 12'});

 

objArray.push({Action: 'insertOrUpdate', Name: 'MACD(26,12,9)',

Group: 'Holding',

DisplayAs: 'Floating Point',

Picture: '\\####@##',

Formula: "app('TechExtend.CC.sc.js', 'SC_MACDTechInd', 'SC_MACD', 26, 12, 9)",

CalculateTotals: 'No Total',

UserComment: 'Scouras Consulting MACD - 26 and 12, 9 day EMA'});

 

// And call the IO service

var ioresults;

 

ioresults = ioservices.uploadCustomColumns(objArray);

 

ioservices.displayResults(ioresults);
```