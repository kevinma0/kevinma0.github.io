---
layout: project
permalink: /canaryapp
title: "Redesigning Canary"
subtitle: ""
description: "Over the years, new features were rapidly shipped on the Canary app. Many features were forced into unflexible paradigms, resulting in a Frankensteinian experience.<br><br>I rethought and redesigned parts of the core experience from the ground up, to better accommodate how people use Canary today.
"
type: "case-study"
year: "2018"
img: "large_app.jpg"
banner: "large_app.jpg"
case-study: true
hide: false
action: "none"
---

The Canary team has added features to the app at a rapid pace. Over time, the app went from supporting a single device, to multiple devices in multiple locations with multiple users. 

We were forced to tack new features on end rather than rethink our app form the ground up. Our app reviews became flooded with complaints about the unintuitive UI. 

During the second half of 2018, I led the redesign of Canary’s mobile app to empower users to feel safer at home and away. Here’s of a few of the changes that we made.


### Mental models

The entire app navigation is based on an established hierarchy for Locations, Devices and Users. Users and Devices belong to Locations. The existing app and navigation reflect this hierarchy: paged cards show different locations and the settings for their parts.

<img src="{{site.baseurl}}/assets/img/canaryapp/sticky.jpg">

Does this make sense however, when:
- 95.9% of owners only have 1 location
- 85% of locations have 1 device

I used the drawing above as a starting point for thinking about the redesign. How could our information model help users, rather than hinder their understanding?


### Dashboard

<figure class="mw8 center"><img src="{{site.baseurl}}/assets/img/canaryapp/dashboard.jpg"></figure>

I re-conceptualized the dashboard, Canary’s home screen, as a complete snapshot of the status of your house, rather than a pretty display. Now users can see all of their cameras instead of having to trickily navigate to other ones. 


### Settings


<figure class="mw8 center"><img src="{{site.baseurl}}/assets/img/canaryapp/settings.jpg"></figure>

A commonly mentioned problem with our app was a confusing settings menu. We took a deep dive into user feedback to parse through the problems.

The settings do their job. Initial tests showed that users could perform basic tasks like adding camera, removing cameras, and changing their settings. To be able to perform an action however, doesn’t mean that one understands it. We noticed users searching every menu to find what they were looking for.

<figure class="ph4-ns ph3 mw9 pb3 center"><img class="mb4" src="{{site.baseurl}}/assets/img/canaryapp/condense.jpg"></figure>

We grouped settings by their type: were they a *shared* setting or an *individual* setting? The distinction let us group related settings. Want to turn off your camera notifications? Everything is a tap away from the top level now.

### And so it goes...

We were acquired by German IoT company at the end of 2018. Due to structural changes, the changes were built but never shipped. Still, I'm proud of the work that Marc, our brand designer, and I did with the rest of the team.
