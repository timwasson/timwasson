---
permalink: "blog/digital-ocean-and-drupal/"
tags: posts
title: Digital Ocean and Drupal
date: 2013-12-05
layout: layouts/post.njk
---

I've used Drupal in many situations and on many servers throughout the world, but I'm having a love affair with Digital Ocean in a big way. Learning more about the command line has been a goal of mine for a while, and diving head first into Digital Ocean, embracing the terminal, and falling head-first in very basic server management. Getting Drupal up and configured on Digital Ocean provided a few difficulties, but now that I've overcome them, I'm a pretty happy camper. Here's what I learned thoughout the way.&nbsp;

[Digital Ocean's guide to installing Drupal was great][1], but didn't quite cover all the bases. Once Drupal is installed, you have to do a few things to finalize the install and get things running well.

First up is PECL. PECL Uploadprogress does exactly what the name implies... shows an upload progress bar for big images or files when uploading them through the web interface.&nbsp;

[This comment got me up and running with PECL][2], but to my disappointment the uploadprogress wasn't included in a basic PECL install. Drupal's own site came to the rescue with [their guide on getting uploadprogress to work][3].&nbsp;

Now that I have Drupal on a server that can be managed via the command line, I finally got the chance to dive into [Drush][4], which is an amazing tool to help update and add modules, as well as update Drupal core. Because Digital Ocean utlizes SFTP, the manual update through the web interface doesn't work (or at least I can't make it work), but Drush makes that a moot point. It's much easier to type in the updates via Drush than use the module pages, with less of a processor strain and chance of crashing the server.&nbsp;

And finally, we have to set up a cron to keep Drupal running well, and [Digital Ocean's tutorial][5] helped me there too. I hope this is handy for those of you wanting to get Drupal running on Digital Ocean.&nbsp;

 [1]: https://www.digitalocean.com/community/articles/how-to-install-drupal-on-a-virtual-server-running-ubuntu-12-04
 [2]: http://www.php.net/manual/en/http.install.php#113769
 [3]: https://drupal.org/node/1332446
 [4]: https://github.com/drush-ops/drush
 [5]: https://www.digitalocean.com/community/articles/how-to-use-cron-to-automate-tasks-on-a-vps