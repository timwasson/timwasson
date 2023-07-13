---
permalink: "blog/friggin-spammers-part-3/"
tags: posts
title: Friggin spammers, part 3
date: 2006-02-15
layout: layouts/post.njk
---

Jesus. It's been like 3 days and I've gotten no less than 300 spam comments between my blog and pictures. I've been constantly updating the addcomment script with new keywords, only to get DIFFERENT spam to add new keywords. I decided there had to be a better way. And here's my latest solution. 

In the config file, I stored an array with all the names of the products/crap the spammers are hawking.  
$spamFilter = array ("advertisersworld.com","poker","mortgage","dorank",  
"viagra","pharmacy","ambien","aaaahotels","network54",  
"texas-hold","adipex","rolex","tamiflu","replica",  
"flexeril","meridia","tramadol","cialis");

Then, in the addcomment script, it reads through the whole array. If one of the words in the array sparks the spam variable to switch to "yes", the script dies. If not, the script posts.  
foreach ($spamFilter as $spamList){  
if (ereg("$spamList", $comments)){  
$spam = "yes";  
die ("sorry, spammer");  
}  
else{  
$spam = "no";  
}  
}

Then I have a simple "if ($spam="no")" bunch of code to post. 

These efforts won't make patch any holes, per se, as the spammers will just start hawking different products here. What it does is create 1 single array in the config file to read from for all 3 addcomment scripts. So, instead of adding the same word 3 times, I add it to 1 config file. It'll make it much easier to add words. In a few months, maybe I'll hit all of them and won't get any more spam. A man can dream.