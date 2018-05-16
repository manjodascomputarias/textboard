const regex = />.*/g;
const str = $('p').text();
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        var repl = `<span class="greentext">${match}</span>`;
        //$('p').html( $('p').text().replace(regex, repl) );
    });
}
