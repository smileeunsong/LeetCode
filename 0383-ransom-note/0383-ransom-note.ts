function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let i = 0; i < ransomNote.length; i++) {
        const l = ransomNote[i]
        const idx = magazine.indexOf(l)

        if (idx === -1) {
            return false
        }

        magazine = magazine.slice(0, idx) + magazine.slice(idx + 1)
    }

    return true
};