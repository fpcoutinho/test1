function cipher(string, shift) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
    } else {
      result += string.charAt(i);
    }
  }
  return result;
}

module.exports = cipher;
