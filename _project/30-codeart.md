---
layout: free
permalink: /toys
title: "Toys Lol"
subtitle: ""
description: "Experiments with hardware, software, interactivity and identity."
type: "case-study"
year: "2013-2016"
img: "codeart.png"
banner: "group.png"
case-study: true
hide: false
action: "check em out"
special: "codeart"
---

  <section id="intro" class="cf mb5 w-100">
    <header class="fn fl-l w-50-l w-100">
      <h1 class="f-subheadline fw4 lh-solid baskerville mt0">Toys Lol</h1>
    </header>
    <div class="fn fl-l w-50-l w-100"><p class="mt0-ns f3 lh-copy">Experiments with software, hardware, interactivity and brand.</p></div>
  </section>
  <section>
    <canvas resize="true" id="canvasThumbnail" style="background:#ea5a41"></canvas>
    <p class="f3 fw5 mt4 graphik">Needles <span class="black-20">2015</span> <span class="fw4">simulating a magnetic field.</span></p>
  </section>
  <section id="starfield" class="cf mv5 bb--black">
  <div class="cf">
  <div class="fn fl-l w-50-l cover pr4-l">
    
    <img src="{{site.baseurl}}/assets/img/starfield/a1.gif" width="100%">

  </div>
  <div class="fn fl-l w-50-l cover">
      <img src="{{site.baseurl}}/assets/img/starfield/maps.png" width="100%">
  </div>
    <img src="{{site.baseurl}}/assets/img/starfield/a4.gif" width="100%">

  </div>
      <p class="f3 fw5 mt4 graphik">Starfield <span class="black-20">2015</span> <span class="fw4">pseudo random terrain maps</span></p>

</section>

<section id="invaders" class="cf mv5 bb--black">
  <div class="cf"><canvas data-processing-sources="{{ site.baseurl }}/assets/spaceinvaders/spaceinvaders.pde"></canvas></div>
  <p class="f3 fw5 mt4 graphik">Invaders <span class="black-20">2016</span> <span class="fw4">Randomly generated invaders inspired by <a href="http://www.complexification.net/gallery/" class="black underline">Jared Tarbell.</a> Try clicking!</span></p>
</section>

  <section id="snake" class="cf mv5 bb--black">
  <div class="embed-container">
  <iframe src="https://player.vimeo.com/video/282559899?background=0"   class="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <p class="f3 fw5 mt4 graphik">Snake3D <span class="black-20">2016</span> <span class="fw4">The nokia classic now in an extra dimension.</span></p>
  </section>

<section>
    <div class="medium"><canvas resize="true" id="canvasMedium" style="background:#000"></canvas></div>
    <p class="f3 fw5 mt4 graphik">Medium <span class="black-20">2017</span> <span class="fw4">Identity work for Medium, Cornell's design collective.</span></p>
      
</section>



<script src="{{ site.baseurl }}/assets/js/processing.min.js"></script>

<!-- <script type="text/paperscript" src="/assets/js/windmills.js" canvas=canvasThumbnail></script> -->


<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>

<script type="text/paperscript" src="{{site.baseurl}}/assets/js/medium.js" canvas="canvasMedium">









