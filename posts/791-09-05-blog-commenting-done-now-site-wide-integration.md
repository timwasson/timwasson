---
permalink: "blog/commenting-done-now-site-wide-integration/"
tags: posts
title: Commenting DONE, now site-wide integration
date: 2006-09-05
layout: layouts/post.njk
---

I spent the weekend throwing a barbeque (probably the last of the summer), painting my front porch, and working on this blasted site! See, the spam comments got huge and completely out of control, and while some of the spam filtering techniques worked great, it didn't stop 100% of the spam and I got sick and tired of having to delete it all. So this is the current technique of spam filtering: 

If you're not registered:

  1. Name and email address fields are not required. If either isn't filled in, the comment will not error out. If an email address is entered, but is invalid, the comment errors out. 
  2. All HTML tags are filtered out. 
  3. The body of the comment is scanned for "spammy" words, like obviously viagra and poker related words. If these words are detected, the comment errors out. 
  4. A "Captcha" is required. It's a 4 letter key that you have to enter to make sure a robot won't post. 

If you're registered:

  1. Your comment is posted. Done. No Captcha is displayed or necessary, and it's not necessary to enter your email address or name. Also, on the "single comment" form, an enhanced text entry field allows easy bolding, linking, italics, listing, etc., to make your comments really pretty. 

So that's it. Now the only things remaining:

  1. Site-wide integration of commenting, using the same scripts/techniques on the moblog and photo gallery. 
  2. Pagination on category pages. 
  3. Very simple and basic archive page. 

Phew. Then this site and project is done! I'll just go through the site file by file and make sure everything is A-OK and I'll put all the source files up for download. I can't wait for this one to be done.