var count = 0;

function cc (card) {
  // Only change code below this line
  var g1 = [2, 3, 4, 5, 6]
  var g2 = [7, 8, 9]
  var g3 = [10, 'J', 'Q', 'K', 'A']
  if (g1.indexOf(card) !== -1) {
    count++
  } else if (g3.indexOf(card) !== -1) {
    count--
  }

  if (count <= 0) {
    return count + ' Hold'
  } else {
    return count + ' Bet'
  }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(4);
cc(5);
