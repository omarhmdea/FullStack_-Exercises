const $input = $('input')
const print_template = $('#print-template')
const $disapyText = $('#printText')

let wisdom = []
let idCounter = 0

let userStuff = JSON.parse(localStorage.wisdom || "[]" )
userStuff.forEach(element => {
   $disapyText.append(`<div id=${element.id}> <span class="delete-text">x </span> ${element.text}</div>`)
});


$('#submit').click(function(){

    const inputText = $input.val()
    $disapyText.append(`<div>${inputText}</div>`)

    wisdom.push({text:inputText,id:idCounter++})
    if (wisdom.length % 2 == 0)
        localStorage.wisdom = JSON.stringify(wisdom)
        
})

$('#clear').click(function(){
    localStorage.clear() 
})

$('.container').on('click','.delete-text',function(){
    const id = $(this).closest('div').attr('id')

    userStuff.forEach(element => {
        if (element.id == id){
            const index = userStuff.indexOf(element);
            if (index > -1) {
                userStuff.splice(index, 1);
                localStorage.wisdom = JSON.stringify(userStuff)
            }
        }
     });
})