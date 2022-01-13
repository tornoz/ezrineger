// var textIndex = 0
// if(window.localStorage.getItem('done') !== undefined) {
//     var doneTexts = JSON.parse(window.localStorage.getItem('done'));
//     var keys = texts.keys();
// }

var text = texts[0].toUpperCase();
for(var i in equivalences) {
    text = text.replaceAll(equivalences[i], i)
}
var lines = text.split('\n');
var textContainer = document.getElementById('text');
var state = {
    isSelected: false,
    selectedValue: '',
    goal: 0,
    score: 0
}

//   GET CIPHER
var cipher = [...keys];
shuffle(cipher);

for(lineI in lines) {
    var line = lines[lineI];
    showLine(line, textContainer);
    textContainer.append(document.createElement('br'));
    showCypher(line, textContainer);
    textContainer.append(document.createElement('br'));
}

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

function select(element) {
    if(state.score !== state.goal) {
        var value = element.getAttribute('data-value');

        unselect();
        if(value === state.selectedValue) {
            state.selectedValue = '';
            state.selected = false;
            document.querySelectorAll('.key').forEach(function(element) {
                element.classList.remove('clickable');
            });
        } else {
            state.selectedValue = value;
    
            //Select everything
            document.querySelectorAll('span[data-value="'+state.selectedValue+'"]').forEach(function(element) {
                element.classList.add('selected');
            });
            document.querySelectorAll('.key').forEach(function(element) {
                element.classList.add('clickable');
            });
        
        
            state.selected = true;
        }
    }
}

function unselect() {
    document.querySelectorAll('span[data-value="'+state.selectedValue+'"]').forEach(function(element) {
        element.classList.remove('selected');
    });
}

function letter(keyElement) {
    if(state.selected) {
        //Check if letter is used elsewhere and remove it
        document.querySelectorAll('.letter').forEach(function(letterElement) {
            if(letterElement.textContent === keyElement.textContent) {
                letterElement.textContent = '_';
            }
        });
        
        //Reactivate key of previous letter
        var currentLetter = document.querySelector('span[data-value="'+state.selectedValue+'"]').textContent;
        if(currentLetter !== '_') {

            document.querySelectorAll('.key').forEach(function(el) {
               if(el.textContent === currentLetter) {
                   el.classList.remove('added');
               }
           });
        }
        
        //Display letter in the case
        document.querySelectorAll('.letter.selected').forEach(function(letterElement) {
            if(keyElement.textContent === '⍉') {
                letterElement.textContent = '_';
            } else {
                letterElement.textContent = keyElement.textContent;
                
            }
        });
        if(keyElement.textContent !== '⍉') {
            keyElement.classList.add('added');
        }
        calculateScore();
    }
    
}

function calculateScore() {
    state.score = 0;
    document.querySelectorAll('.letter').forEach(function(letterElement) {
        if(cipher.indexOf(letterElement.getAttribute('data-value')) === keys.indexOf(letterElement.textContent)) {
            state.score++;
        }
    });
    if(state.score === state.goal) {
        unselect();
        document.getElementById('textFound').innerHTML = texts[0].replace('\n', '<br/>');
        document.getElementById('victory').style.display = 'block';

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
                element.setAttribute('data-value', cipher[keys.indexOf('C’H')]);
                //element.textContent = 'C’H';
                i = i+2;
                state.goal++;
            } else if(line[i+1] === 'H') {
                element.setAttribute('data-value', cipher[keys.indexOf('CH')]);
                //element.textContent = 'CH';
                i++;
                state.goal++;
            }
        }else if (inArray(line[i], keys)){
            element.setAttribute('data-value', cipher[keys.indexOf(line[i])]);
            state.goal++;
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
                element.textContent = cipher[keys.indexOf('C’H')];
                i = i+2;
            } else if(line[i+1] === 'H') {
                element.textContent = cipher[keys.indexOf('CH')];
                i++;
            }
        } else if (inArray(line[i], keys)){
            element.textContent = cipher[keys.indexOf(line[i])];
        } else {
            element.className='character';
            element.textContent = ' ';
        }
        textContainer.append(element);
    }

}

function replaceEquivalences(text) {

}

