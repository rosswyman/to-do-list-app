function newItem(){


  //1. Adding a new item to the list of items: 
  // //javascript   
  // let li = document.createElement("li");
  // let inputValue = document.getElementById("input").value;
  // let text = document.createTextNode(inputValue);
  // li.appendChild(text);

  // if (inputValue === '') {
  //   alert("You must write something!");
  // } else {
  //   let list = document.querySelector('#list');
  //   list.appendChild(li);
  // }

  // jQuery
  let inputValue=$('#input').val;
  let list=$('#list');
  let li=$('<li></li>');

  // Assign value of input field to new li
  li.append(inputValue);

  // Check for empty input
  if(inputValue===''){
    alert('You forgot to add a task.  Please enter a new item.')
  } else {
  // add new item to list
  list.append(li);
  }

  //2. Crossing out an item from the list of items:
  //javascript
  // function crossOut() {
  //       li.classList.toggle("strike");
  //   }

  //   li.addEventListener("dblclick",crossOut);

  //jquery
  function crossOut(){
    li.toggleClass('strike');
  }
  
  li.on('dblclick', crossOut);

  //3(i). Adding the delete button "X": 
  // //javascript
  // let crossOutButton = document.createElement("crossOutButton");
  //   crossOutButton.appendChild(document.createTextNode("X"));
  //   li.appendChild(crossOutButton);

  //   crossOutButton.addEventListener("click", deleteListItem);
  
  //jquery
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);


  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  //javascript
  // function deleteListItem(){
  //       li.classList.add("delete")
  //   }
  
  //jquery
  function deleteListItem(){
		li.addClass("delete")
  }

  crossOutButton.on("click", deleteListItem);
  // 4. Reordering the items: 
  $('#list').sortable();
    
}
    
// // jquery
// // 1. Adding a new item to the list of items
// function newItem(){
  

// }
    
    
    
    
    
    
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
    
    
    
    
    
    
    
    
    
    
    