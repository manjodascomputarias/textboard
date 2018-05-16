const regex = /^&gt;.*$/gm;
const str = document.getElementsByTagName('pre');

for (var i=0; i<str.length; i++) {
    var inner = str[i].innerHTML;
    var result = inner.replace(regex, '<span class="greentext">$&</span>');
    str[i].innerHTML = result;
}