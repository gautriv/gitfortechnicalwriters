---
title: Your first Git project
keywords: [how to set up a git repository locally, how to set up a remote git repository, how to set up a bare git repository, how to set up a shared git repository, how to set up a private git repository, how to set up a git repository, how to set up a git repository on windows, setting up a git repository, github create repository command line, git clone, git remote add, git init, git create repository from terminal, github repository, github repository example, gh repo create]
sidebar: sidebar
permalink: firstproject.html
folder: mydoc
completed: 10
summary: "This page provides information on initializing a git repository."
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/gitterminologies.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/setupgit.html
---

Welcome, dear apprentice, to your maiden voyage into the enigmatic realm of Git. Together, we’ll create a Git repository and explore the mystical essence of Git commands.

## The first step

For our first incantation, let’s create a repository named `myfirstgitproject` in your chosen location.

A repository? Think of a repository as a special folder, like a digital archive, where all your Git-related files will reside. 

## The second step

Now, open your chosen text editor, such as [Visual Studio Code](https://code.visualstudio.com/download), and navigate to the `myfirstgitproject` folder. This editor will serve as your tool for crafting and editing your files.

## The third step

Within your text editor, create a file named `index.html`. This file will serve as the initial content for your Git repository. Copy and paste the following code into the file:

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

Open the terminal by browsing to **View > Terminal** within Visual Studio Code. Now, run the command `git status`. This command will reveal the status of your files within the Git repository.

If you receive the message:

```sh
fatal: not a git repository (or any of the parent directories): .git
```

it means that Git doesn’t recognize this directory as a Git repository. To resolve this, we need to initialize the directory as a Git repository.

## The fifth step

To initialize the directory as a Git repository, run the command `git init`. This command will convert the directory into a Git repository and create a hidden folder named `.git` to store all Git-related data.

```sh
Initialized empty Git repository in /home/<user>/Cats/.git/
```

Ah, but wait, dear traveler. Do you see the cryptic symbol **U** next to your file name within the Explorer pane? Fear not if this symbol's meaning eludes you, for all shall be revealed in time. However, should impatience be your companion, you can hover your mouse on **U** and read the message that the system displays.

<img title="Untracked" alt="Untracked" src="./images/untracked.png">

Now, returning to our ritual, `git init` converts any folder or directory into a Git repository. When you create a git repository, you can also create an initial branch. By default, git initializes a repository to the master or main branch. You can, however, choose in which branch you want to initialize the repository. If you wish to initialize the repository to the main branch, run `git init -b main`. Again, do not be troubled if the concept of branches in Git remains veiled; this knowledge shall unveil itself in due time.

## The sixth step

Run the command `git status` again. This time, you should see a message similar to this:

```sh
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.html

nothing added to commit but untracked files present (use "git add" to track)
```

This message indicates that the `index.html` file is currently untracked, meaning it’s not yet being tracked by Git.

## The seventh step - Final Revelation

Now, open the `myfirstgitproject` folder on your desktop. You should see a `.git` folder inside, along with the `index.html` file. This `.git` folder is where Git stores all the information about your project’s history.

{% include goodtoknow.html content="Git generates a hidden directory named `git`. This directory maintains all of the objects and references created and used by Git as part of your project's history." %}

## Or the alternate path

1. Open Visual Studio Code and go to **View > Terminal** to open the terminal.
2. On the Terminal enter `git init myfirstgitproject`. This command creates a new directory called `myfirstgitproject` and initialize it as a Git repository. 

Congratulations, dear apprentice! You have successfully created your first Git repository and initiated your journey into the world of Git.