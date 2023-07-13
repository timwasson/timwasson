---
permalink: "blog/digital-ocean-and-drupal-part-ii/"
tags: posts
title: Digital Ocean and Drupal, part II
date: 2014-02-18
layout: layouts/post.njk
---

[My previous entry][1] covered some of the pitfalls of setting up Drupal on Digital Ocean, but I found every 2-3 days my Drupal droplet would need mySQL restarted. It's not the end of the world, but it's very annoying.&nbsp;

I found I [wasn't the only one][2] with the problem.&nbsp;

As the problem page advised, simply [creating a swap file][3] seems to have fixed the issue. Of course, with intermittent issues like these, you never really know if the problem is resolved. I'll cross my fingers but for now, it seems like we're good to go.&nbsp;

 [1]: http://timwasson.com/blog/digital-ocean-and-drupal
 [2]: https://www.digitalocean.com/community/questions/mysql-on-ubuntu-keeps-crashing
 [3]: https://www.digitalocean.com/community/articles/how-to-add-swap-on-ubuntu-12-04