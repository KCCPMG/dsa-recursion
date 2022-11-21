const checkObj = {
  '{': '}',
  '[': ']',
  '(': ')'
}


function balancedBracket(str, openBrackets=[], index=0) {

  if (Object.keys(checkObj).includes(str[index])) {
    openBrackets.push(str[index]);
  } 
  else if (Object.values(checkObj).includes(str[index])) {
    const open = openBrackets.pop();
    if (checkObj[open] !== str[index]) return false;
  }
  if (index < str.length) return balancedBracket(str, openBrackets, index+1);

  if (openBrackets.length > 0) return false;
  else return true;
}

module.exports = balancedBracket;