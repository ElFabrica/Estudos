function acharMenorCombinação(nums: number[], total: number): number[] | null {
    const dp: (number[] | null)[] = Array(total + 1).fill(null);
    
    dp[0] = [];
  
    for (let i = 0; i <= total; i++) {
      if (dp[i] !== null) {
        for (const num of nums) {
          const nextSum = i + num;
          if (nextSum <= total) {
            if (dp[nextSum] === null || (dp[nextSum] && dp[nextSum]!.length > dp[i]!.length + 1)) {
              dp[nextSum] = [...dp[i]!, num];
            }
          }
        }
      }
    }
  
    return dp[total];
  }
  
  console.log(`Valores mandados :2 3 5 7\nTotal: 10\n${acharMenorCombinação([3, 5, 6, 7, 8, 9], 17)}`);
  // Possível saídas: [8, 9] 
  //Feito em ts, compilado para js