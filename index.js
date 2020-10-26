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
    hashMap.set('magazine', magazine);
    hashMap.set('note', note);
    for (let word of hashMap.values()) {
        if (hashMap.has(word)) {
            return 'Yes';
        }
        else {
            return 'No';
        }
    }
}