/**
 * Created by Administrator on 2016/12/6 0006.
 */

//var a=document.getElementsByTagName('music');
//var b=document.getElementsByTagName('com');
//var c=document.getElementsByTagName('drink');
//var d=document.getElementsByTagName('xiao');
//var e=document.getElementsByTagName('food');
//
window.onload=function() {
    //function son() {
    //    var arr = [a, b, c, d, e];
    //    for (var i = 0; i < arr.length; i++) {
    //        arr[0].onclick(function () {
    //            document.getElementById('an1').addClass('anan1');
    //            alert('an');
    //
    //        })
    //
    //    }
    //}
    //
    //son();


    $('.music').mouseover(function () {
        $('#an1').addClass('anan1');
        $('#anan1').addClass('anan2');
        $('#ananan1').addClass('anan3');
    })
    $('.music').mouseout(function () {
        $('#an1').removeClass('anan1');
        $('#anan1').removeClass('anan2');
        $('#ananan1').removeClass('anan3');
    })

    $('.com').mouseover(function () {
        $('#an2').addClass('anan1');
        $('#anan2').addClass('anan2');
        $('#ananan2').addClass('anan3');
    })
    $('.com').mouseout(function () {
        $('#an2').removeClass('anan1');
        $('#anan2').removeClass('anan2');
        $('#ananan2').removeClass('anan3');
    })

    $('.drink').mouseover(function () {
        $('#an3').addClass('anan1');
        $('#anan3').addClass('anan2');
        $('#ananan3').addClass('anan3');
    })
    $('.drink').mouseout(function () {
        $('#an3').removeClass('anan1');
        $('#anan3').removeClass('anan2');
        $('#ananan3').removeClass('anan3');
    })

    $('.xiao').mouseover(function () {
        $('#an4').addClass('anan1');
        $('#anan4').addClass('anan2');
        $('#ananan4').addClass('anan3');
    })
    $('.xiao').mouseout(function () {
        $('#an4').removeClass('anan1');
        $('#anan4').removeClass('anan2');
        $('#ananan4').removeClass('anan3');
    })

    $('.food').mouseover(function () {
        $('#an5').addClass('anan1');
        $('#anan5').addClass('anan2');
        $('#ananan5').addClass('anan3');
    })
    $('.food').mouseout(function () {
        $('#an5').removeClass('anan1');
        $('#anan5').removeClass('anan2');
        $('#ananan5').removeClass('anan3');
    })






}