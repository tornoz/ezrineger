// var textIndex = 0
// if(window.localStorage.getItem('done') !== undefined) {
//     var doneTexts = JSON.parse(window.localStorage.getItem('done'));
//     var keys = texts.keys();
// }

var text = texts['default']['text'].toUpperCase();
for(var i in equivalences) {
    text = text.replaceAll(equivalences[i], i)
}
model.text = text;
model.lines = model.text.split('\n');
var textContainer = document.getElementById('text');

//   GET CIPHER
model.cipher = [...letters];
shuffle(model.cipher);


// INIT VIEW FROM MODEL
for(lineI in model.lines) {
    var line = model.lines[lineI];
    showLine(line, textContainer);
    textContainer.append(document.createElement('br'));
    showCypher(line, textContainer);
    textContainer.append(document.createElement('br'));
}


// SETUP CONTROLLERS
document.querySelectorAll('.letter').forEach(
    function(element) {
        element.addEventListener('click', 
        function(event) {
            select(event.target);
        })
    }
);

document.querySelectorAll('.key').forEach(
    function(element) {
        element.addEventListener('click', 
        function(event) {
            letter(event.target);
        })
    }
);

document.addEventListener('keypress', function(event) {
    if(model.state.isSelected) {
        var key = document.querySelector('.key[data-key="'+event.key.toUpperCase()+'"]');
        if(key !== null) {
            key.click();
        }
    }
})
const modal = new Modal(
    document.querySelector('.modal')
);
function select(element) {
    if(model.state.score !== model.state.goal) {
        var value = element.getAttribute('data-value');
        model.selectLetter(value);
        view.unselect();
        if(model.state.isSelected) {
            view.updateSelection(model.state.selectedValue);
        }
    }
}


function letter(keyElement) {
    if(model.state.isSelected) {
        //Check if letter is used elsewhere and remove it
        view.removeLetter(keyElement.textContent);
        
        //Reactivate key of previous letter
        view.activateLetter(model.state.selectedValue);
        
        //Display letter in the case
        view.showLetter(keyElement.textContent);
        if(keyElement.textContent !== '⍉') {
            keyElement.classList.add('added');
        }
        calculateScore();
        view.unselect();
        model.state.selectedValue = '';
        model.state.isSelected = false;
    }
    
}

function calculateScore() {
    model.state.score = 0;
    document.querySelectorAll('.letter').forEach(function(letterElement) {
        if(model.cipher.indexOf(letterElement.getAttribute('data-value')) === letters.indexOf(letterElement.textContent)) {
            model.state.score++;
        }
    });
    if(model.state.score === model.state.goal) {
        view.unselect();
        document.getElementById('textFound').innerHTML = model.text.replace('\n', '<br/>');
        modal.open();

    }
}

function showLine(line, textContainer) {
    for(var i = 0; i< line.length; i++) {
        var element = document.createElement('span');
        element.className='letter block';
        element.textContent = '_';
        element.setAttribute('data-index', i);
        if (line[i] === 'C') {
            if(line[i+1] === '’' && line[i+2] === 'H') {
                element.setAttribute('data-value', model.cipher[letters.indexOf('C’H')]);
                i = i+2;
                model.state.goal++;
            } else if(line[i+1] === 'H') {
                element.setAttribute('data-value', model.cipher[letters.indexOf('CH')]);
                i++;
                model.state.goal++;
            }
        }else if (inArray(line[i], letters)){
            element.setAttribute('data-value', model.cipher[letters.indexOf(line[i])]);
            model.state.goal++;
        } else {
            element.className='character';
            element.textContent = line[i];
        }
        textContainer.append(element);
    }

}

function showCypher(line, textContainer) {
    for(var i = 0; i< line.length; i++) {
        var element = document.createElement('span');
        element.className='cipher block';
        if (line[i] === 'C') {
            if(line[i+1] === '’' && line[i+2] === 'H') {
                element.textContent = model.cipher[letters.indexOf('C’H')];
                i = i+2;
            } else if(line[i+1] === 'H') {
                element.textContent = model.cipher[letters.indexOf('CH')];
                i++;
            }
        } else if (inArray(line[i], letters)){
            element.textContent = model.cipher[letters.indexOf(line[i])];
        } else {
            element.className='character';
            element.textContent = ' ';
        }
        textContainer.append(element);
    }

}

function replaceEquivalences(text) {

}

function save() {

}

function load() {
    
}