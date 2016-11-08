# Calm.js

Check if person is calm or not in javascript.

## Inspired By:

Loud irate people everywhere!!

## Usage:

Include script and call `isCalm(text, threshold);`

Parameters are `text` and `threshold`

Threshold sets how strict you want to be with people's execessive use of FUCKING CAPS.

Default `threshold` is 5

```js
	// AHHHHHHHHHHHHHHHHHHHHHHHH
    isCalm("I AM TALKING LIKE AN ANGRY PERSON"); // returns false

	// threshold of 2 all caps words in a row
    isCalm("LOUD NOISES", 2); // returns false;

	// this person is calm enough
    isCalm("I love the GIANTS"); // returns true;

	// real world example:
	var isNegativeNancy = isCalm("I AM TALKING LIKE AN ANGRY PERSON");
	if(isNegativeNancy) {
		alert("WOAH CHILL OUT MAN");
	}

```