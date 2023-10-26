---
title: Set up Git - A guide to set up your git identity, editor, and branch
keywords: [set up git, set up git on windows, set up git ssh, set up git on mac, set up git repository, set up git credentials, set up git server, set up git ssh key, set up git bash
set up git remote, how to set up git server on local network, how to set up git bash, how to set up git in vs code]
sidebar: sidebar
permalink: setupgit.html
folder: mydoc
summary: "This page provides information on setting your identity, default editor, and branch."
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/firstgitcommand.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/installation.html
---

As you stand at the crossroads of this mystical Git journey, you've learned how to summon Git into your service. But what's next, you wonder? It's time to personalize your Git environment, molding it to your will.

# Setting up Git up for general usage

The art of Git customization begins with the following incantations:
1. Setting up your identity
   1. Username
   2. Email Address

2. Setting up default editor
3. Setting up default branch name

## Setting up your identity
In the mystical realms of version control, one's identity is key. Just as you introduce yourself in a new land, Git also needs to know who you are. It's quite a friendly entity, actually! Git uses this information to give character to your commits.

Ah, commits? You haven't yet ventured into their depths. But fear not, for we shall explore them later. For now, remember that Git merely requires two keys - your username and email address.

### How to set up username and email address?

1. Open your terminal (not matter which OS you use).
2. Run the following commands:
   
   `git config --global user.name "Your Name"`

   `git config --global user.email "youremail@example.com"`

3. Run the following command to review the information that you just entered:
   
   `git config --list`

   {% include goodtoknow.html content="Should you employ `--global` in your commands, this act need only be performed once. Git shall eternally bear in mind your identity, regardless of the incantations you whisper. If, by chance, you wish to alter your identity for specific projects, simply chant the command without the `--global` extension while in the realm of that project." %}

## Choosing Your Editorial Companion
With Git now recognizing your essence, it's time to inform it of your preferred editor. Fret not, for Git is a considerate companion, yet it defaults to the system's own editor.

### How to set up default editor?
1. Open your terminal.
2. Run the following commands:
   
   `git config --global core.editor nameofyoureditor`

   For example, `git config --global core.editor atom`

   {% include note.html content="For those traversing the Windows realm, you must reveal the full path to your cherished editor's executable file (.exe)." %}

3. Run the following command to review the information that you just entered:
   
   `git config --list`

## Setting up default branch name
With your identity and trusty text editor aligned, it's time to declare the default branch name. Failing to do so would lead Git to create a master branch when you create [(initialize) a new Git repository](firstcommand.md).


So now Git knows about you and your favorite text editor. 

### How to set up default branch name?
1. Open your terminal.
2. Run the following command:
   
   `git config --global init.defaultBranch main`

    {% include note.html content="You must set `main` as your default branch" %}

3. Run the following command to review the information that you just entered:
   
   `git config --list`

Rejoice, for Git is now attuned to your essence and ready to heed your will.