function addItem(){
    event.preventDefault();
    let input = document.getElementById('item-input').value;
    
    if (input) {
        let i = document.createElement('i');
        let button = document.createElement("button")
        button.className = "remove-item btn-link text-red"
        i.className = "fa-solid fa-xmark"
        button.appendChild(i)
        let newItem = document.createElement("li");
        newItem.textContent = input;
        newItem.appendChild(button)
        let ul = document.getElementById("item-list");
        ul.appendChild(newItem);
        button.addEventListener('click', function() {
            removeItem(button);
        });
    } 
}

function removeItem(button) {
    let li = button.parentElement;
    li.remove();
}

const buttons = document.querySelectorAll('.remove-item.btn-link.text-red');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        removeItem(button);
    });
});


function clearAll(){
    const buttons = document.querySelectorAll('.remove-item.btn-link.text-red');
    buttons.forEach(button => {
        let li = button.parentElement;
        li.remove();
    });
}

function filterItems(){
    let filter = document.getElementById("filter")
    let val = filter.value.toLowerCase();
    const listItems = itemList.getElementsByTagName('li');

    Array.from(listItems).forEach(function(item) {
        const itemText = item.textContent.toLowerCase();
        if (itemText.includes(val)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });  
}

let clearButton = document.getElementById("clear")
clearButton.addEventListener("click", clearAll)


const itemList = document.getElementById('item-list');
let filter = document.getElementById("filter")
filter.addEventListener("input", filterItems)


