---
layout: project
permalink: /audiobooks
title: "audioBit"
subtitle: A passion project exploring some of my favorite topics
description: "Before Audible released something similar, I designed and built an app that let people create and edit bookmarks while listening to audiobooks.<br><br>It died in the water, partially because I didn't understand that I had to actually tell people about what I made."
type: "case-study"
dated: "2017"
year: 2017
img: "audio-large.png"
banner: "audio-large.png"
case-study: true
hide: false
action: none
---

[//]: Make it clear this is just a feature, 

I was listening to a lot of audiobooks this summer. I loved that I didn't have to carry books around everywhere, but at the same time felt like my experience was somehow diminished. Like I was getting less.

I realized why: I wasn't paying attention.

Audiobooks are a tricky in that way. They're consumed when you're doing something else. Unlike a book, they don't capture your full attention. Unlike a song, they can't be played for enjoyment with zero focus.

I wondered if this could be an opportunity for software design. At the same time, I had been thinking about doing a small project to practice my user-thinking chops. Thus, Audiobit was born.

Here's how I went about the process. You can also read [a more detailed writeup](https://medium.com/@kevin8ma/towards-a-more-interactive-audiobook-experience-aece33814122).


### Understanding the problem

I conducted qualitative interviews with audiobook and podcast listeners who enjoyed audio segments of different genres, to understand their motives and contexts of listening.

I asked questions about what they got out of listening, where and when they listened, and for how long. I also asked about some of the frustrations they ran into when listening.

![]({{site.baseurl}}/assets/img/audio/insights.png)


At this point, I wondered whether my initial problem, engaging with audio, was the actual problem. One insight was that users who were listening to textbooks or educational material used the "Rewind 30 seconds" feature the most.

I shifted my problem space from the general question of interactivity to the problem of learning.

### Learning about learning

I wanted a better understanding of the relationship between learning and engagement. To this end, I conducted a study by asking users to record notes in small diaries whenever they performed an action. The actions were:

**Day A:** Artifact Creation

**Day B:** Artifact Revisiting


![]({{site.baseurl}}/assets/img/audio/stickies2.jpg)

Insights:
- People used passive reminders to help them remember.
- Some people created artifacts even if they didn't revisit them. The artifact creation helps them learn.
- Some artifacts were only useful when they are created. Others have repeat use for later.

### A People Problem

> I'm trying to learn from an audiobook. It's difficult to revisit parts to aid my understanding.

I synthesized my research insights into design goals. I hoped to build something that would:
- Encourage active engagement
- Allow for fast revisiting during and after listening
- Tell me what I haven't revisited

### Initial Exploration
I brainstormed different interactions that would affect the relationship between people and the material they were listening to, and help them get more out of it.

<figure class="mw8 center"><img src="{{site.baseurl}}/assets/img/audio/iterations.png"></figure>

I was excited at the initial possibilities. I eagerly solidified my earlier ideas with mockups, but with each mockup, I was moving away from a high level concept.

I took a step back and focused on creating a flow for engagement during listening, the most important interaction of the app.

<img src="{{site.baseurl}}/assets/img/audio/pass_1.png">

User testing led to several interaction changes. For example, users found the bookmarks disconnected from the audio player. I tried some versions before arriving at the successful paged version, as shown below:


<figure class="mw7 center">
<video loop width="100%" name="Demo" src="{{site.baseurl}}/assets/img/audio/paged_demo.mp4" autoplay="autoplay"></video>
</figure>

[//]: explain the why, instead of what u did below.


Why this works: if I want users to be able to revisit during listening, they should be able to see the status of the main audio player at all times.

### Bookmark Cells
Bookmarks are at the heart of Audiobit.

Getting them right was a challenge. I established an information hierarchy for a bookmark cell based on my design goals, and then I proceeded to design and test different cell actions.

<img src="{{site.baseurl}}/assets/img/audio/bookmarking_iterations.png">

[//]: something to connect these two: which would actually work 


<img src="{{site.baseurl}}/assets/img/audio/bookmarking_actions.png">

[//]:

Why this works: Putting revisiting first means emphasizing playability and editing. Secondary features, such as sharing can be safely put in an options menu.


### Doubling Down on Previews

What's in an effective preview? I experimented with various ways of previewing the most recent bookmark.

<figure class="mw8 center"><img src="{{site.baseurl}}/assets/img/audio/player_iterations.png"></figure>

Some interactions, while appealing, proved to be too complex for actual listening. I went forward with a preview that minimized cognitive load.

![]({{site.baseurl}}/assets/img/audio/previewing.png)

Why this works: if users are multitasking, a preview should provide minimal information at the top level of the UI.

[//]: connect the language.

Here's where I netted out:

### Listen
The audio player is built around bookmarking without obstructing the experience of listening.

![]({{site.baseurl}}/assets/img/audio/feature_1.jpg)

### Engage
Editing a bookmark is immersive and easy - add notes or change the audio duration on the go.

![]({{site.baseurl}}/assets/img/audio/feature_2.jpg)

### Repeat, anytime
Bookmarks are a swipe away. Come back to them during listening or afterwards.

![]({{site.baseurl}}/assets/img/audio/feature_3.jpg)

[//]: Put a conclusion that summarizes what you did. 

### Next steps
I'm proud of some of the thinking that went into this project, but there are things that I wished I did differently. 

[//]: Clarify the below paragraph.
Bookmarks belong to chapters. This made sense when I thought about extremely episodic content, but less so when chapters build upon previous chapters. I would have liked to go into how people access bookmarks from different chapters.

I did some explorations on the social aspects of a bookmarks - discussions might form around audio segments the same way they would in the margins of a book, but killed this idea early on.

