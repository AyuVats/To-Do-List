// creating a close button and appending it to each item

var mylist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < mylist.length; i++) {
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    mylist[i].appendChild(span);
}

// click on a close button to hide the current list item

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        this.parentElement.style.display = 'none';
    }
}

// add a checked symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// creating a new list item when clicking on the add button

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('todobox').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('You must write something!');
    } else {
        document.getElementById('todolist').appendChild(li);
    }
    document.getElementById('todobox').value = "";

    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            this.parentElement.style.display = 'none';
        }
    }
}

function clearbtn(){
    var list = document.getElementById('todolist');
    list.innerHTML = "";
}