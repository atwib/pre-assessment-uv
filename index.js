function groupAnagrams(words) {
    var result = [];
    var checked = {};

    for (var i = 0; i < words.length; i++) {
        if (checked[words[i]]) {
            continue;
        }

        var group = [words[i]];
        checked[words[i]] = true;

        for (var j = i + 1; j < words.length; j++) {
            if (isAnagram(words[i], words[j])) {
                group.push(words[j]);
                checked[words[j]] = true;
            }
        }
        result.push(group);
    }

    return result;
}

function isAnagram(word1, word2) {
    return sortString(word1) === sortString(word2);
}

function sortString(word) {
    var chars = word.split('');
    for (var i = 0; i < chars.length; i++) {
        for (var j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                var temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    return chars.join('');
}

var words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(groupAnagrams(words));
