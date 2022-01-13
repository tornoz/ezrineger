var keyboardContainer = document.getElementById('keyboard');

var keys = [
    'A', 'B', 'CH', 'C’H', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'
];

var equivalences = {'N': 'Ñ', 'U': 'Ù', 'E': 'Ê'}

for(i in keys) {
    var element = document.createElement('span');
    element.className='key';
    element.textContent = keys[i];
    keyboardContainer.appendChild(element);
}

var element = document.createElement('span');
element.className='key';
element.textContent = '⍉';
keyboardContainer.append(element);