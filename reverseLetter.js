function reverseLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let reverseStringArray = str.split("").reverse();
  for (i = 0; i < reverseStringArray.length; i++) {
    if (!letters.includes(reverseStringArray[i])) {
      reverseStringArray.splice(
        reverseStringArray.indexOf(reverseStringArray[i]),
        1
      );
      i--;
    }
  }

  return reverseStringArray.join("");
}
