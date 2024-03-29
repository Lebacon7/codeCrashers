/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
function removeUrlAnchor(url){
    //acquire position of left-most anchor
    let position = url.indexOf('#')
    //return a slice if it contains an anchor, return full URL if it contains nothing
    return position>0? url.slice(0,position): url;
  }
  console.log(removeUrlAnchor('www.cnn.com/#goodstory'))