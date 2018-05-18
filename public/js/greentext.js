const regexGreentext = /^&gt;(?!&gt;).*$/gm;
const regexReply = /^&gt;&gt;(?!&gt;).*$/gm;
const str = document.getElementsByTagName('pre');

for (var i=0; i<str.length; i++) {
    var inner = str[i].innerHTML;
    var result = inner.replace(regexGreentext, '<span class="greentext">$&</span>');
    var result = result.replace(regexReply, '<a class="reply" href="#.$&">$&</a>');
    var result = result.replace('.&gt;&gt;','');
    str[i].innerHTML = result;
}

