/**
 * Calm.js JS SRC
 */

/*
usage:
    isCalm("I AM TALKING LIKE AN ANGRY PERSON"); // returns false
    isCalm("LOUD NOISES", 2); // returns false; threshold of 2 all caps words in a row
    isCalm("I love the FBI"); // returns true; this person is calm and wierd
*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.responsible = factory();
    }
})(this, function() {
    // polyfill
    if (!Array.isArray) {
      Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }
    /**
     * Check if person is calm or not
     * @param  {string}  text      String of text the user is inputting
     * @param  {number}  threshold How many all CAPS words to check for in a row. Default 5
     * @return {Boolean}           returns true if they are calm, false if they seem irate.
     */
    isCalm = function(text, threshold){
        text = (typeof text === "string") ? text.split(" ") : text,
        threshold = threshold || 5;

        var Check = text.map(function(word) {
            return word.match(/^[^a-z]+$/);
        });

        var prev = 0;
        for (var i = 0; i < Check.length; i++) {
            prev = (Array.isArray(Check[i])) ? prev + 1 : 0;

            if(prev >= threshold) {
                // Person is ANGRY
                return false;
            }
        }

        // Person is calm!
        return true;
    };

    return isCalm;

});