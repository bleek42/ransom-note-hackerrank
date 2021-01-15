/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

For example, the note is "Attack at dawn". The magazine contains only "attack at dawn". The magazine has all the right words, but there's a case mismatch. The answer is No.

The first line contains two space-separated integers, m and n, the numbers of words in the magazine and the note...

The second line contains m space-separated strings, each magazine[i].
The third line contains n space-separated strings, each note[i].
*/

function checkMagazine(magazine, note) {
    const hashMap = new Map();

    for (let i = 0; i < magazine.length; i++) {
        if (hashMap.has(magazine[i])) {
            hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1);
        }
        else {
            hashMap.set(magazine[i], 1);
        }
    }

    for (let i = 0; i < note.length; i++) {
        if (!hashMap.has(note[i]) || hashMap.get(note[i]) === 0) {
            console.log(hashMap);
            return 'false';
        }
        hashMap.set(note[i], hashMap.get(note[i]) - 1);
    }
    console.log(hashMap);
    return 'yes';
}

const myMagazine = ['arielle', 'has', 'some', 'a', 'lovely', 'bunch', 'of', 'coconuts', 'giggidy', 'goo'];
const myNote = ['arielle', 'has', 'a', 'lovely', 'bunch', 'of', 'coconuts'];

console.log(checkMagazine(myMagazine, myNote));