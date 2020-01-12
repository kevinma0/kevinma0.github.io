---
layout: project-natural
permalink: /canarypdp
title: "Canary PDP + Shopping Cart"
type: "UX"
description: "Canary's e-commerce experience needed to be updated to accomodate its "
img: "thumb_audio.jpg"
banner: "banner_audio.jpg"
format: "custom"
case-study: true
hide: true
---

<div class="pv5 cf">
<div class="w-100">
<h1 class="fw7 f1 tc w-100 mt2 mb3 font-primary font-dark lh-title">{{ page.title }}</h1>
</div>
</div>

<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20% style="background-image: url(/assets/img/canarypdp/test.jpg);"></div>
</div>



Over its lifetime, Canary's business model gradually transitioned from hardware-only sales to  a software subscription service. Our existing e-commerce experience, including the PDP, did not accommodate our new emphasis on premium software features, or our decision to promote hardware-software bundles.

I worked with project manager Mach as the sole designer on a number of initiatives within the e-commerce experience. Our challenge was the lay the groundwork for a new PDP that could be extended in the future with various software plans. Additionally, we examined user data to optimize every step of the shopping cart checkout experience.



### Understanding the problem

I conducted qualitative interviews with audiobook and podcast listeners who enjoyed audio segments of different genres, to understand their motives and contexts of listening.

I asked questions about what they got out of listening, where and when they listened and for how long. I also asked about some of the frustrations they ran into when listening.

<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20%;
"><img src="{{site.baseurl}}/assets/img/audio/insights.png"></div>

At this point, I wondered whether my initial problem, engaging with audio, was the actual problem. One insight was that users who were listening to textbooks or educational material mentioned that they rewinded the most.

I shifted my problem space from the general question of engagement to the problem of learning.

## Learning about learning

I wanted a better understanding of the relationship between learning and engagement. To this end, I conducted a study by asking users to record notes in small diaries whenever they performed an action. The actions were:

- Day A: Artifact Creation
- Day B: Artifact Revisiting

![]({{site.baseurl}}/assets/img/audio/stickies2.jpg)

Insights:
- People use passive reminders to help them remember
- Some people create artifacts even if they don't revisit them. The artifact creation helps them learn
- Some artifacts are useful only when they are created. Others have repeat use for later.

## People problem

###### I'm trying to learn from an audiobook. It's difficult to revisit parts to aid my understanding.

I synthesized my research insights into design goals. I hoped to build something that would:
- Encourage active engagement
- Allow for fast revisiting during, and after listening
- Tell me what I haven't revisited

## Initial Exploration
I brainstormed different interactions that would affect the relationship between people and the material they were listening to, and help them get more out of it.

<div class="mhn2" style="
    margin-left: -20%;
    margin-right: -20%;
"><img src="{{site.baseurl}}/assets/img/audio/iterations.png"></div>

I was excited at the initial possibilities and admittedly, I spent a lot of time thinking about lofty ideas of questionable value. I eagerly solidified these earlier ideas with mockups, but with each mockup, I was moving away from a high level concept.

I took a step back and focused on creating a flow for engagement during listening, the most important interaction of the app.

<img src="{{site.baseurl}}/assets/img/audio/pass_1.png">

Testing with users led to several interaction changes. For example, users found the bookmarks disconnected from the audio player. I tried some versions before arriving at the successful paged version.

<div style="margin-left: -30%; margin-right: -30%;">


<video loop width="100%" name="Demo" src="{{site.baseurl}}/assets/img/audio/paged_demo.mp4" autoplay="autoplay"></video>
</div>

Why this works: if I want users to be able to revisit during listening, they should be able to see the status of the main audio player at all times.

## Bookmark Cells
Bookmarks are at the heart of Audiobit.

Getting them right was a challenge. I established an information hierarchy for a bookmark cell based on my design goals, and then I proceeded to design and test different cell actions.

<img src="{{site.baseurl}}/assets/img/audio/bookmarking_iterations.png">



<img src="{{site.baseurl}}/assets/img/audio/bookmarking_actions.png">

Why this works: Putting revisiting first means emphasizing playability and editing. Secondary features, such as sharing can be safely put in an options menu.


## Doubling Down on Previews

What's in an effective preview? I experimented with various ways of showing the most recent bookmark on the audio player.

<div style="
    margin-left: -40%;
    margin-right: -40%;
"><img src="{{site.baseurl}}/assets/img/audio/player_iterations.png"></div>

Some interactions, while appealing, proved to be too complex for actual listening. I went forward with a previewing upon that minimized cognitive load.

![]({{site.baseurl}}/assets/img/audio/previewing.png)

Why this works: if users are multitasking, a preview should provide minimal information at the top level.

## Features
![]({{site.baseurl}}/assets/img/audio/feature_1.jpg)

### Listen
The audio player: built around bookmarking without obstructing the experience of listening.

![]({{site.baseurl}}/assets/img/audio/feature_2.jpg)

### Engage
Editing a bookmark is immersive and easy - add notes or change the audio duration on the go.

![]({{site.baseurl}}/assets/img/audio/feature_3.jpg)

### Repeat, anytime
Bookmarks are a swipe away. Come back to them during listening, or afterwards.

## Next steps
I'm proud of some of the thinking that went into this project, but there are things that I wished I did differently. Bookmarks belong to chapters - this made sense when I thought about extremely episodic content like a lecture, but less so when chapters build upon previous chapters. I would have liked to go into how people access bookmarks from different chapters.

I'm interested now in whether or not bookmarks can add a social component - discussions might form around audio segments the same way they would in the margins of a book.
