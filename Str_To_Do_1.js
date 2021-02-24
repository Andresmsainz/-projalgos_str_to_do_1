// Remove Blanks
str = "Pl ayTha tF u nkyM usi c"
newstr = '';
for (let i = 0; i < str.length; i++) {
    // if char is not blank then it goes into new string
    if(str[i] != ' ') {
        newstr = newstr + str[i]
    }
}

console.log('Remove Blanks = ', newstr);

// Get Digits
str = "0s1a3y5w7h9a2t4?6!8?0"
newstr = '';
for (let i = 0; i < str.length; i++) {
    // if char is a number type then it goes into new string
    if (isNaN(str[i]) == false) {
        newstr = newstr + str[i]
      }
}

console.log('Get Digits = ', newstr);

//Acronyms
str = "there's no free lunch - gotta pay yer way."
newstr = '';
bflag = true;
for (let i = 0; i < str.length; i++) {
    // if space flag is true then it goes into new string
    if (bflag === true) {
        newstr = newstr + str[i];
        bflag = false
    }
    if(str[i] == ' ') {
        bflag = true; 
    }
}

console.log('Acronyms = ', newstr.toUpperCase());

//Count Non-Spaces
str = "Honey pie, you are driving me crazy"
icount = 0;
for (let i = 0; i < str.length; i++) {
    // if char is not blank then we add one to count
    if(str[i] != ' ') {
        icount = icount + 1
    }
}

console.log('Count Non-Spaces = ', icount);


//Remove Shorter Strings
function removeshorterstrings(arr) {
    newarr = [];
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        //if string length is equal or greater then we add to new array
        if (arr[i].length >= arr.length) {
            newarr.push(arr[i])
        }
    }   
    return newarr;
}
let ar = ['Kiwi','Apple','Banana','Grapes','Blueberries','Strawberries']
  console.log('Remove Shorter Strings',removeshorterstrings(ar));
  // expected output: 12