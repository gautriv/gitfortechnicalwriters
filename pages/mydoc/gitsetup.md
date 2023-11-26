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

As you embark on this mystical Git journey, you’ve successfully summoned Git into your service. But what’s next? It’s time to personalize your Git environment, tailoring it to your preferences.

# Setting up Git up for general usage

The art of Git customization begins with the following crucial steps:
1. Setting up your identity
   1. Username: Provide a name that identifies you within the Git realm.
   2. Email Address: Register your email address to receive notifications and updates.

2. Setting up default editor: Choose the text editor you prefer to use for composing your commits and editing files.
3. Setting up default branch name: Specify the default branch name that Git should use when creating new repositories.

## Setting up your identity
In the mystical world of version control, your identity is essential. Just as you introduce yourself in a new land, Git also needs to know who you are. Git uses this information to identify your commits, which are snapshots of your code’s progress.

Ah, commits? You haven't yet ventured into their depths. But fear not, for we shall explore them later. For now, remember that Git merely requires two keys - your username and email address.

### How to set up username and email address?

1. Open your terminal, regardless of your operating system.
2. Execute the following commands:
   
   `git config --global user.name "Your Name"`

   `git config --global user.email "youremail@example.com"`

3. Verify your identity settings by running:
   
   `git config --list`

   {% include goodtoknow.html content="By using the `--global` flag you ensure that Git remembers your identity across all projects. If you need to set different identities for specific projects, simply omit the `--global` flag when configuring Git within that project’s directory." %}

## Choosing Your Editorial Companion
With your identity established, it’s time to inform Git of your preferred text editor. Git defaults to the system’s default editor, but you can customize this choice to enhance your workflow.

### How to set up default editor?
1. Open your terminal.
2. Execute the following command:
   
   `git config --global core.editor nameofyoureditor`

   For example, `git config --global core.editor atom`

   {% include note.html content="Windows users need to provide the full path to their editor’s executable file (.exe)." %}

3. Verify your editor settings by running:
   
   `git config --list`

## Setting up default branch name
When you create a new Git repository, Git automatically creates a default branch named `master`. However, you can customize this default name to your preference. 

With your identity and trusty text editor aligned, it's time to declare the default branch name. Failing to do so would lead Git to create a master branch when you create [(initialize) a new Git repository](firstcommand.md).


So now Git knows about you and your favorite text editor. 

### How to set up default branch name?
1. Open your terminal.
2. Execute the following command:
   
   `git config --global init.defaultBranch main`

    {% include note.html content="I recommend using `main` as your default branch name." %}

3. Verify your default branch settings by running:
   
   `git config --list`

Congratulations! You’ve successfully personalized your Git environment, making it more aligned with your preferences and workflow. Git is now attuned to your essence and ready to serve you efficiently.