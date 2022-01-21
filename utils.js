var inArray = function(needle, haystack) {
    for(var i in haystack) {
        if(haystack[i] == needle) return true;
    }
    return false;
};

var indexOfObject = function(needle, haystack) {
    for(var i in haystack) {
        if(haystack[i] == needle) return i;
    }
}

var getDayString = function() {
    var date = new Date();
    return date.getDate()+date.getMonth()+date.getYear();
}

var shuffle = function (array) {
    let currentIndex = array.length,  randomIndex;
    Math.seedrandom(getDayString());
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }