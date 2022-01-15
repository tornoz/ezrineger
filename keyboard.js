var keyboardContainer = document.getElementById('keyboard');


var keys = [
    ['C’H', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], 
    [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
     ['Z', 'CH', 'V', 'B', 'N', 'M']
];
var equivalences = {'N': 'Ñ', 'U': 'Ù', 'E': 'Ê'}

for(iRow in keys) {
    var rowElement = document.createElement('div');
    rowElement.className="row";
    for(iKey in keys[iRow]) {
        var element = document.createElement('button');
        var key = keys[iRow][iKey];
        element.className='key';
        element.textContent = key;
        if(key === "C’H" || key === "CH") {
            element.setAttribute('data-key', 'C');
        } else {
            element.setAttribute('data-key', key);
        }
        rowElement.appendChild(element);
    }
    if(iRow == 2) {
        var element = document.createElement('button');
        element.className='key';
        element.textContent = '⍉';
        rowElement.append(element);
    }
    keyboardContainer.appendChild(rowElement);
}
