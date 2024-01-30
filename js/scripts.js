function newItem () {

// adding a new item to the list of items
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert('You must write something!');
} else {
  let list = $('#list');
  list.append(li);
}

// crossing out an item from the list of items
li.on("dblclick", function () {
  li.toggleClass('strike');
});

// adding the delete button "X": 
let crossOutButton = ('<crossOutButton></crossOutButton>');
$('crossOutButton').append('X');
li.append(crossOutButton);

// adding class 'delete' to list items when "X" button is clicked
crossOutButton.on('click', function () {
  li.addClass('delete');
});

// making the items reorderable by dragging and dropping them 
$('#list').sortable();

// making inputValue blank after the user adds the last list item
$('#input').val('');

}