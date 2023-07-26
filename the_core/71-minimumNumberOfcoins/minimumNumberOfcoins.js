/* Question : You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.

              The coin values available in Bananaland are stored in a sorted array coins. coins[0] = 1, and for each i (0 < i < coins.length) coins[i] is divisible by coins[i - 1]. 
              Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price. */ 

// URL : https://app.codesignal.com/arcade/code-arcade/well-of-integration/sGwCfM5FzX7LhLcdk


function minimumNumberOfCoins(coins, price) {
    for(var i = coins.length-1, count = 0; i >= 0; i--){
        count += parseInt(price/coins[i])
        price = price % coins[i]
   }
   return count;
}
