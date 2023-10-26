---
title: Your first Git project
keywords: [how to set up a git repository locally, how to set up a remote git repository, how to set up a bare git repository, how to set up a shared git repository, how to set up a private git repository, how to set up a git repository, how to set up a git repository on windows, setting up a git repository, github create repository command line, git clone, git remote add, git init, git create repository from terminal, github repository, github repository example, gh repo create]
sidebar: sidebar
permalink: firstproject.html
folder: mydoc
summary: "This page provides information on initializing a git repository."
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/setupgit.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/gitbranches.html
---

Behold, dear apprentice, it is time to embark on your maiden journey into the enigmatic realm of Git. Let us create a Git project and wield the Git commands to unravel their mystical essence.

## The first step

Our first incantation is to craft a repository at your chosen abode, for example, myfirstgitproject. 

A repository? You may think of it as a mere folder. Have you not traversed the lands of folders, those digital scrolls of organization? A repository, or "repo," is akin to a collection of scrolls and artifacts, watched over by Git's ancient wisdom. It is here that we start our journey. There are two paths to this endeavor, and we shall explore them both.

## The second step

The next step beckons you to open **myfirstgitproject** within the text editor of your choosing. As tradition dictates, I shall wield the [Visual Studio Code](https://code.visualstudio.com/download) tome, but let it be known that your choice of editor holds great power.

## The third step

Now, it is time to create a file named **index.html** and copy and paste the following sacred symbols:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My first git command</title>
</head>
<body>   
</body>
</html>
```

## The fourth step

Within your Visual Studio Code, open the portal to the terminal by browsing to **View > Terminal**. Here, run `git status`. What message does the system reveal? Does the system now display:

```sh
fatal: not a git repository (or any of the parent directories): .git
```

Since this is the first time you use a git command on your directory (folder), the system displays the fatal message. This message means that Git cannot recognize this directory. That gives us our next task. To ensure that Git recognizes our directory, we must initialize it." %}

## The fifth step

Next, run `git init`. What message is whispered in return? Does the system now display:

```sh
Initialized empty Git repository in /home/<user>/Cats/.git/
```

Ah, but wait, dear traveler. Do you see the cryptic symbol **U** next to your file name within the Explorer pane? Fear not if this symbol's meaning eludes you, for all shall be revealed in time. However, should impatience be your companion, you can hover your mouse on **U** and read the message that the system displays.

<img title="Untracked" alt="Untracked" src="./images/untracked.png">

Now, returning to our ritual, `git init` converts any folder or directory into a Git repository. When you create a git repository, you can also create an initial branch. By default, git initializes a repository to the master or main branch. You can, however, choose in which branch you want to initialize the repository. If you wish to initialize the repository to the main branch, run `git init -b main`. Again, do not be troubled if the concept of branches in Git remains veiled; this knowledge shall unveil itself in due time.

## The sixth step

Run `git status` once more. Does the system now display:

```sh
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

Let us pause our quest for now. In the chapters that follow, we shall unravel the mysteries of branches, the enigma of tracked and untracked files, and delve deeper into the arcane world of Git. Until then, may your Git commands be swift, and your repositories ever bountiful.

## The seventh step - Final Revelation

Go to the **myfirstgitproject** folder on your Desktop. Do you see a **.git** folder inside with an index.html file? No?

{% include goodtoknow.html content="Git generates a hidden directory named. git. This directory maintains all of the objects and references created and used by Git as part of your project's history." %}

## Or the alternate path

1. Open Visual Studio Code and go to **View > Terminal** to open the terminal.
2. On the Terminal enter `git init myfirstgitproject`. This command creates a new directory called **myfirstgitproject** and initialize it as a Git repository. 

Hail, for you have now mastered the initiation of a Git repository. Is it not a wondrous feat?