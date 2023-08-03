const verb1 = ['walked', 'practically floated', 'charged'];
const noun2 = ['room', 'lobby', 'elevator', 'bathroom stall', 'pantry', 'attic', 'clubhouse', 'basement', 'closet', 'shower'];
const exclamation3 = ['Wow', 'Boy oh boy', 'My goodness', 'Holy moly'];
const adjective4 = ['big', 'beautiful', 'luxurious', 'good', 'huge'];
const noun5 = noun2;
const noun6 = noun2;
const noun7 = ['woke mob', 'liberals', 'leftists', 'crazies', 'bad hombres', 'lamestream media'];
const noun8 = ['Everyone', 'The whole country', 'The whole world', 'Even Joe Rogan', 'Stone Cold Steve Austin'];
const adjective9 = ['embarassing', 'pitiful', 'un-American', 'anti-American'];
const adjective10 = ['Bumbling', 'Bummer', 'Buzzkill', 'Boring', 'Backward'];
const adjective11 = ['tough', 'brave', 'patriotic', 'bold', 'American', 'principled'];

const messageGenerator = () => {
    const randomVarElement = variable => {
        return variable[Math.floor(Math.random() * variable.length)];
    };
    const usedVerb1 = randomVarElement(verb1);
    const usedNoun2 = randomVarElement(noun2);
    const usedExclamation3 = randomVarElement(exclamation3);
    const usedAdjective4 = randomVarElement(adjective4);
    const usedNoun5 = usedNoun2;
    const usedNoun6 = () => {
        if (usedNoun2[usedNoun2.length - 1] === 'y') {
            let cutYNoun2 = usedNoun2.slice(0, usedNoun2.length - 1);
            let pluralizedYNoun2 = cutYNoun2 + 'ies';
            return pluralizedYNoun2;
        } else if (usedNoun2[usedNoun2.length - 2] === 'u' && usedNoun2[usedNoun2.length - 1] === 
        's') {
            let cutUSNoun2 = usedNoun2.slice(0, usedNoun2.length - 2);
            let pluralizedUSNoun2 = cutUSNoun2 + 'ii';
            return pluralizedUSNoun2;
        } else {
            return usedNoun2 + 's';
        };
    };
    const usedNoun7 = randomVarElement(noun7);
    const usedNoun8 = randomVarElement(noun8);
    const usedAdjective9 = randomVarElement(adjective9);
    const usedAdjective10 = randomVarElement(adjective10);
    const usedAdjective11 = randomVarElement(adjective11);

    return `I ${usedVerb1} into the ${usedNoun2}, I said, "${usedExclamation3}, this is a ${usedAdjective4} ${usedNoun5}, they don't make ${usedNoun6()} like this anymore. You can't, the ${usedNoun7} won't let you. Believe me, I know better than anyone. ${usedNoun8} is saying how ${usedAdjective9} it is. And you know ${usedAdjective10} Biden isn't ${usedAdjective11} enough to do anything about it.`;
    //Initial complicated attempt at generating the message: return `I ${verb1[randomIndexFunc(verb1)]} into the ${noun2[randomIndexFunc(noun2)]}, I said, "${exclamation3[randomIndexFunc(exclamation3)]}, this is a ${adjective4[randomIndexFunc(adjective4)]}.`;
};

console.log(messageGenerator());

/*const test = ['penguin', 'sloth', 'pony'];
let testWord = test[2];
const testWordFinalIndex = testWord[3];
testWord = testWord.slice(0, testWord.length - 1);
const pluralizedTestWord = testWord + 'ies';
console.log(pluralizedTestWord);
console.log(testWord[testWord.length - 1]);
const testToSpliced = testWord.toSpliced(testWord.length - 1, 1, 'ies'); */