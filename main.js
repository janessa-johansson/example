$(document).ready(function(){

    var validate = function() {
        var invalidFields = 0;


        if($('#question').val().length === 0){
            $('#question').prev().addClass('red');
            invalidFields++;
        } else {
            $('#question').prev().removeClass('red');

        }

        if($('#answer').val().length === 0){
            $('#answer').prev().addClass('red');
            invalidFields++;
        } else {
            $('#answer').prev().removeClass('red');

        }

            return invalidFields === 0;
    }


    $('.answer').hide();

    $(document).on('click', '.question', function(event){
        $(this).next().toggle();

    });

    $(document).on('submit', 'form', function(event){
        event.preventDefault();

        if(!validate()) {
            return;

        }

        var item = $('.item').first().clone();
        $(item).find('.question').html($('#question').val());
        $(item).find('.answer').html($('#answer').val());
        $('.accordian').append(item);
        $(this).find('input, textarea').val("");

    });

});