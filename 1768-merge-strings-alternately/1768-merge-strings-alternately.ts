function mergeAlternately(word1: string, word2: string): string {
    let res = ''
    const arr1 = word1.split('')
    const arr2 = word2.split('')

    for (let i = 0; i < arr1.length + arr2.length; i++) {
        if (arr1[i]) {
            res += arr1[i]
        }

        if (arr2[i]) {
            res += arr2[i]
        }
    }
    
    return res
};