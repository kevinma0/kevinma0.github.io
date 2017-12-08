---
layout: project
permalink: /emotar
title: "Emotar"
type: "UX"
description: "As an intern at HTC Research & Development, I helped redefine core features of an photo and entertainment app."
img: "thumb-htc.jpg"
banner: "banner-htc.jpg"
case-study: true
format: "custom"
introduction: "Emotar takes a photo of you and then converts it into a 3D model to be used in GIFs. Uncanny valley? Yep. Loads of fun? Definitely."
---

<div class="pv5 cf">
<div class="w-100 w-50-ns fn fl-ns">
<h1 class="fw7 f1 fl w-100 mt2 mb3 font-primary font-dark lh-title">{{ page.title }}</h1>
</div>

<div class="w-100 w-50-ns fn fl-ns">
<p>{{page.introduction}}</p>
<a class="button" href="https://medium.com/@kevinyma/redesigning-htcs-emotar-4a7e719f87c3">Full Case Study</a>
</div>
</div>

Emotar is a mobile app by HTC R&D, that aims to help users create personalized stickers for instant messaging apps. I worked with a project manager and 2 developers on shipping the next version.

<!-- <video loop  name="Sticker" src="{{site.baseurl}}/assets/img/htc/sticker.mp4" autoplay="autoplay"></video> -->


<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20%;
"><img src="{{site.baseurl}}/assets/img/htc/before_after.png"></div>

## On stickers

At the onset of the project, our team asked ourselves: why do people use stickers? There are the obvious reasons — convenience and humor.

Then there are more subtle motivations.

![Polished wireframes]({{site.baseurl}}/assets/img/htc/sticker_example.png)

Example: WeChat. Stickers are used to communicate subtext. An “angry” sticker doesn’t necessarily mean (and is rarely if ever used when) the user is angry. Rather, it conveys minor annoyance, or feigned annoyance for comedic effect. Like their static friends emojis, stickers allow for nuanced sub-communication to be added to the message.

Emotar’s goal is to help users communicate that subtlety with a personal touch. Sending a sticker with one’s own face is a reminder of the relationship between the sender and receiver. It’s saying: “I’m crying on the floor.”

###### People don’t want to discover stickers randomly. They want to quickly compare context-specific stickers and choose one for whatever it is they want to communicate.

I prioritized the use cases for Emotar:


<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20%;
"><img src="{{site.baseurl}}/assets/img/htc/priority_features.png"></div>


<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20%;
"><img src="{{site.baseurl}}/assets/img/htc/initial_explorations.jpg"></div>

I tried to brainstorm news ways that a sticker could be easily edited, as well as compared to its alternatives. I went with the third because it establishes the home page as a space for comparing stickers rather than creating them from scratch.

<div class="mhn2" style="
    margin-left: -40%;
    margin-right: -40%;
"><img src="{{site.baseurl}}/assets/img/htc/cell_comparison.jpg"></div>

I chose to go forward with Option C:
- Paged scrolling would be advantageous over vertical scrolling because of the limited vertical size of the window.
- A scroll from the last page in a set could transition into the next set, which would be consistent with the horizontal sticker pack model.
- The primary action — selecting a sticker is clear, and sticker packs are easy to change.

## Shipped features

<video loop width="100%" height="600" name="Video Name" src="{{site.baseurl}}/assets/img/htc/selection-animation-compressed.mp4" autoplay="autoplay"></video>

The home menu focuses on choosing and sharing, rather than creation and discovery.

<video loop width="100%" height="600" name="Video Name" src="{{site.baseurl}}/assets/img/htc/sharing-animation-compressed.mp4" autoplay="autoplay"></video>

Sharing centers around the messaging services that our users used the most.

![Polished wireframes]({{site.baseurl}}/assets/img/htc/wireframe2.png)

In addition to redesigning the selection model, I worked on a visual redesign. Initially the design language of the app was extremely decorative, featuring large, detailed icons and background illustrations. I thought this took away from the highly visual content, so I simplified iconography, type, and layout.

I also worked on streamlining the on-boarding process, sharing feature, and photo-taking feature.

Emotar shipped Fall 2015.
