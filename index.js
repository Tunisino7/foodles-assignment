export const countWords = (sentence, n) => {
    let pattern = /\w+/g;
        
    let matchedWords = sentence.match(pattern);

    if(matchedWords && n > 0) {
        let counts = matchedWords.reduce((stats, word) => {
            if(stats.hasOwnProperty(word)) {
                stats[word] = stats[word] + 1;
            } else {
                stats[ word ] = 1;
            }
            return stats;
    
        }, {} );
    
        const entries = Object.entries(counts);
    
        const sorted = entries.sort((a, b ) => {
             if(b[1] - a[1] != 0) {
                return b[1] - a[1];
            }
    
            if(a[0] < b[0]) { return -1; }
            if(a[0] > b[0]) { return 1; }
    
            return 0;
        });

        return sorted.slice(0, n);
    }

    return [];
};
