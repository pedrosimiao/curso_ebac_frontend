$(document).ready(function() {
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('riscaLinha');
    });

    $('#btnAdd').on('click', function(e){
        e.preventDefault();
        const inputTarefa = $('#input-tarefa').val(); 
        $('ul').append(`<li><p>${inputTarefa}</p></li>`);
        $('#input-tarefa').val('');
    });  
    
});