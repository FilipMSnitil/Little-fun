
/* Index.html*/

let headerName = document.querySelector('.header-ponny-name');
let input = document.querySelector('.input-name');
let ponnyName = document.querySelector('.ponny-name');
let btnCreate = document.querySelector('.create-ponny');
let btnDelete = document.querySelector('.delete-ponny');

let nameFromInput;

// get name and fill name to header
input.addEventListener('input', function(event){

    headerName.textContent = "My Ponny Name is " + event.target.value;
    
    headerName.classList.add('.name-active');
})



btnCreate.addEventListener('click', function(){
    ponnyName.textContent = headerName.textContent ;
})


btnDelete.addEventListener('click', function(){
    ponnyName.textContent = "";
})

