---
permalink: "blog/optimizing-atomicast/"
tags: posts
title: Optimizing Atomicast
date: 2014-11-06
layout: layouts/post.njk
---

I run a little internet podcast along with a buddy of mine, and found that as we collected more episodes, site load times slowed down. This was unacceptable.

<img alt="" src="/sites/default/files/atomicastbefore.png" style="width: 216px; height: 41px;" /> 

Came in at just under 2.5 megs for 1 page load. This was clearly unacceptable, and the problem would only grow as time went on.&nbsp;

<img alt="" src="/sites/default/files/imgload.png" style="width: 213px; height: 359px;" /> 

The biggest offender was the images. iTunes requires a 1400X1400 JPEG for each episode, and I really wanted to display the episode artwork. But as we hit our 12th episode, each episode's artwork was slowing down the process. At around 100K each, that needed to change.&nbsp;

I implemented this [image resizing script][1] to handle automatic resizing and server-side caching of the resized images. The result is pretty striking.&nbsp;

<img alt="" src="/sites/default/files/imgafter.png" style="width: 212px; height: 200px;" /> 

Instead of 50-120K per image, we're looking at 17-50K per image. Spread over many episodes, the difference is substantial.

The main logo image had similar problems. iTunes required a large JPEG, so instead of using the iTunes image I created a custom PNG, resized it to 900X900 and sent it through [tinyPNG][2], sending it from 130K down to 21K.&nbsp;

Unfortunately I could not get rid of jQuery or jPlayer, which the site relies on for many interactive elements and playing of the episodes. I could also not get rid of Google Analytics. In theory I can get rid of Font Awesome, but in playing with icons and SVGs, I am not convinced I'd save any space in doing so. Especially since Font Awesome is stored via CDN, I think using that actually speeds things up a bit.&nbsp;

The resulting changes took me from 2.5 megs total to 600K, or approximately 25% of its former, bloated self.

While making these changes, I also tweaked some CSS and JS for some cross-platform compatibility. All in all, a great performance boost!&nbsp;

Next up, I'm going to introduce some lazy-loading to only load episode artwork when necessary, because for now it loads artwork even if you can't see it. Next revision, that's comin'!&nbsp;

 [1]: http://shiftingpixel.com/2008/03/03/smart-image-resizer/
 [2]: https://tinypng.com/