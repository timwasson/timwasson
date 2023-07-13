---
permalink: "blog/spammers-suck/"
tags: posts
title: spammers suck.
date: 2006-02-10
layout: layouts/post.njk
---

As my 2 regular readers have noticed, I had issues with spammers on this site. Annoying, awful problems that made me want to vomit. I finally found some time to combat these issues, and my solution is below for the geeks out there who care:  
if (ereg("advertisersworld.com",$comments)  
or (ereg("poker",$comments)  
or (ereg("mortgage",$comments)  
or (ereg("dorank",$comments)  
or (ereg("viagra",$comments)  
or (ereg("pharmacy",$comments)  
or (ereg("ambien",$comments)  
)))))))  
{  
echo "Due to overly rude comment spammers, I've  
had to block a bunch of words that can be posted  
to comments in this blog. It sucks, but such is  
life. Unfortunately, your comment has been  
flagged for containing one of these words,  
listed below for your reference. If you'd like  
to try again, click \"back\" and type a comment  
that leaves out the word that caused this  
problem. The words are:

advertisersworld.com  
  
poker  
  
mortgage  
  
dorank  
  
viage  
  
pharmacy  
  
ambien

Spammers are a clever bunch, so I expect  
more words to be added to this list. Such  
is life.";  
}

The script reads each comment, and if a flagged word is sent, the comment doesn't post. While I was tinkering with the comment adding system, I've also added emailing capabilities so that I'll get emailed when a person comments, which will hopefully lead to faster response times from me. In deleting all the spam comments, some real comments got lost in the shuffle. If your comment is missing, no offense intended... just a mistake. Hopefully with less spam, people will be more apt to post comments? Maybe hopefully? Yeah?