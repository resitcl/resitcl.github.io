import $ from 'jquery';
import { Slick } from 'slick-carousel';

import './index.scss';

import { Map } from './js/map';

const map = new Map('map');
map.init();

const $body = $('body');
const $window = $(window);

$(document).ready(() => {

  $('.variable-width').not('.slick-initialized').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  });

  $('.tecs').not('.slick-initialized').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    centerMode: true,
    variableWidth: true,
  });

  $('.slick-next').css('background-color', '#373737');
});

$window.on('load', () => { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $body.delay(450).removeClass('preload'); // Animate CSS after page load
});
