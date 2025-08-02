function maximumWealth(accounts: number[][]): number {
    let max = 0

    for (let i = 0; i < accounts.length; i++) {
        let accountSum = 0
        
        for(let j = 0; j < accounts[i].length; j++) {
            accountSum += accounts[i][j]
        }

        if (max < accountSum) {
            max = accountSum
        }
    }

    return max
};