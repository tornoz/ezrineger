
var view = {

    updateSelection: function (value) {

        document.querySelectorAll('span[data-value="'+value+'"]').forEach(function(element) {
            element.classList.add('selected');
        });
        document.querySelectorAll('.key').forEach(function(element) {
            element.classList.add('clickable');
        });
    },
    unselect: function () {
        document.querySelectorAll('.letter.selected').forEach(function(element) {
            element.classList.remove('selected');
            
        });
        document.querySelectorAll('.key').forEach(function(element) {
            element.classList.remove('clickable');
        });
    },
    removeLetter: function(letter) {
        document.querySelectorAll('.letter').forEach(function(letterElement) {
            if(letterElement.textContent === letter) {
                letterElement.textContent = '_';
                letterElement.classList.remove('filled');
            }
        });
    },
    activateLetter: function(letter) {
        var currentLetter = document.querySelector('span[data-value="'+letter+'"]').textContent;
        if(currentLetter !== '_') {
            document.querySelectorAll('.key').forEach(function(el) {
               if(el.textContent === currentLetter) {
                   el.classList.remove('added');
               }
           });
        }
    },
    showLetter: function(letter) {
        document.querySelectorAll('.letter.selected').forEach(function(letterElement) {
            if(letter === '⍉') {
                letterElement.textContent = '_';
                letterElement.classList.remove('filled');
            } else {
                letterElement.textContent = letter;
                letterElement.classList.add('filled');
            }
        });
    }
}