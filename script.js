$(document).ready(function(){

    // $('*').css('background-color','white');
    // $('*').css('color','black');

    $('.Gee').css('color','red');
    $('#Geeks').css('background-color','yellow');
    $('#Geeks').css('color','black');

    $('.GEKSS').css('background-color','grey');
    $('.GEKSS').css('color','black');

    $('.geks, .for, .geksForgeks').css(
        'background-color', 'green');

        $('.jok').css('border','5px solid gold');
        $('.jok').css('color','black');

        $('#pro:first').css('background-color','red');
        $('#prof:last').css('background-color','violet');
    

        $('#bee').click(function() {
            $('.boxx').animate({
                width: '300px'
        });
        $('.boxx').animate({
            height: '300px'
    });
    $('.boxx').css('background-color', 'blue');

 });

    $('#btn').click(function(){
    $('#Outer').fadeIn(5000);
    $('#Outer').css('background-color', 'red');
 });

    $('#btr1').click(function(){
    $('#loss').fadeOut(3000);
 });
    $('#btr2').click(function(){
    $('#loss').fadeIn(5000);
 });

$('#pot').click(function() {
    $(this).fadeTo('slow',0.33);
    });

    $('#btb').click(function() {
        $('.lob').fadeToggle(1000);
        
    });

    $('.b1').click(function(){
        $('.pars').hide();
    });
    $('.b2').click(function(){
        $('.pars').show();
    });

    $('.btntoggle').click(function(){
        $('.par').toggle();
    });

    $('p').last().addClass('selected');
    // $('#bet').css('background-color', 'blue');


});