/**
 * Created by User on 12/19/2016.
 */
"use strict";
$(function() {


    $(".one, .two, .three, .four, .five, .six").on("click", function(e) {

        // prevent default click
        e.preventDefault();

        // find if #lightbox exists
        if ($('#lightbox').length > 0) {
            // if #lightbox exists
            $('#lightbox').fadeIn(300);
            // if #lightbox does not exist - create and insert #lightbox

        } else {

            // fill lightbox with AJAX info inside #imageSet
            $(".one").on("click", function() {
                var pBlack = '<p class="black">';
                var urlOne = "http://www.omdbapi.com/?t=Star+Wars+Episode+I+The+Phantom+Menace&y=&plot=short&r=json";

                $.getJSON(urlOne, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode I - The Phantom Menace" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });


                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });

            $(".two").on("click", function(){
                var pBlack = '<p class="black">';
                var urlTwo = "http://www.omdbapi.com/?t=Star+Wars+Episode+II+Attack+of+the+Clones&y=&plot=short&r=json";

                $.getJSON(urlTwo, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode II - Attack of the Clones" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });

                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });

            $(".three").on("click", function(){
                var pBlack = '<p class="black">';
                var urlThree = "http://www.omdbapi.com/?t=Star+Wars+Episode+III+Revenge+of+the+Sith&y=&plot=short&r=json";

                $.getJSON(urlThree, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode III - Revenge of the Sith" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });

                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });

            $(".four").on("click", function(){
                var pBlack = '<p class="black">';
                var urlFour = "http://www.omdbapi.com/?t=Star+Wars+Episode+IV+A+New+Hope&y=&plot=short&r=json";

                $.getJSON(urlFour, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode IV - A New Hope" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });

                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });

            $(".five").on("click", function(){
                var pBlack = '<p class="black">';
                var urlFive = "http://www.omdbapi.com/?t=Star+Wars+Episode+V+The+Empire+Strikes+Back&y=&plot=short&r=json";

                $.getJSON(urlFive, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode V - The Empire Strikes Back" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });

                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });

            $(".six").on("click", function(){
                var pBlack = '<p class="black">';
                var urlSix = "http://www.omdbapi.com/?t=Star+Wars+Episode+VI+Return+of+the+Jedi&y=&plot=short&r=json";

                $.getJSON(urlSix, function(response){
                    $('#slideshow').empty().append(
                            '<div>' +
                            '<img src="' + response.Poster + '" alt="Star Wars Episode V - Return of the Jedi" />' +
                            '<p id="back"><strong>Click window to go back</strong></p>' +
                            pBlack + response.Title + '</p>' +
                            pBlack + 'Year: ' + response.Year + '</p>' +
                            pBlack + response.Plot + '</p>' +
                            '</div>'
                    );
                }).fail(function(jqXHR){
                    window.alert(jqXHR.status);
                });

                if ($('#lightbox').length > 0) {
                    // if #lightbox exists
                    $('#lightbox').fadeIn(300);
                    // if #lightbox does not exist - create and insert #lightbox

                } else {

                    var lightbox =
                        '<div id="lightbox">' +
                        '<div id="slideshow">' +
                        '</div>' +
                        '</div>';

                    //append the lightbox HTML to page
                    $('body').append(lightbox);

                }
            });
        }
    });
    //Click on #lightbox to remove lightbox window
    $('body').on('click', '#lightbox', function() {
        $('#lightbox').fadeOut(300);
    });
});
