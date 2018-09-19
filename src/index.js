module.exports = function longestConsecutiveLength(array) {
    // your solution here
    const set = new Set(array);
    let longStringNumbers = 0;

    set.forEach(el => {
        let currentNumber = 1;

        while (set.has(el + 1) ) {
            el++;
            currentNumber += 1;
        }
    
        longStringNumbers = Math.max(currentNumber, longStringNumbers);
    });

    return longStringNumbers;
};
