var letters = [
    'A', 'B', 'CH', 'C’H', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z'
];

var model = {

    state: {
        isSelected: false,
        selectedValue: '',
        goal: 0,
        score: 0
    },
    cipher: [],
    textArray: [],
    solution: [],



    selectLetter: function(letter) {
        if(model.state.selectedValue == letter) {
            model.state.selectedValue = '';
            model.state.isSelected = false;
        } else {
            model.state.isSelected = true;
            model.state.selectedValue = letter;
        }
    }
};