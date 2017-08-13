# JS Functions Supplemental Activity

Look at main.js for descriptions of each function along with my solutions.
In some cases, I need to write some additional helper functions -> for example,
to compare two arrays to see if they have the same strings.

My confidence level on this was 5. Most of these functions were pretty easy
to implement. A few of the descriptions that were given were a bit on the
cryptic side, but I did my best to figure out what was meant.

Also, in the examples we were provided, I don't think console.assert was being
used correctly. I checked the MDN documentation and the first argument to
console.assert should be a conditional expression. In the original file,
console.assert( sum(2,2), 3) was used. But I believe this will always return
true. Instead, based on the docs: console.assert( sum(2,2) === 3 ) will return
either true or false, depending on whether your sum function is written
correctly.
