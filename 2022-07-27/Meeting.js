/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
*/
const meeting = s => {
    //turn string uppercase
    return s.toUpperCase()
          //replace all : with a blank space
          .replace(/:/g,' ')
          //turn into an array and then split each name into an array
          .split(';').map(x=>x.split(' '))
          //reverse last and first
          .map(x=>'('+x[1]+', '+x[0]+')')
          //sort alpha and return
          .sort().join('')
}