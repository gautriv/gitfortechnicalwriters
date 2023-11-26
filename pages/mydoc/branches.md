---
title: Git branches
keywords: [git branches list, git create branch, git change branch, git checkout, git branch command, best way to manage git branches, git checkout branch, git branching strategy]
sidebar: sidebar
permalink: gitbranches.html
folder: mydoc
summary: "This page provides information on creating git branches."
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/addingfiles.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/firstgitcommand.html
---

Do you know about Loki and the sacred timeline? Did you know that the sacred timeline had branches, and they were pruned? :) 

In Git, a branch is a separate line of development. By default, every repository has a "master" branch, which is the main branch. You can create new branches to work on new features or make experimental changes without affecting the main branch.

## Git Branch Variety Show

* **Feature Branches:** Think of these as special episodes where you develop new features or make big changes to your content. It's like having a sandbox to play in without messing up the main storyline.

* **Bug Fix Branches:** Bugs are like villains, and bug fix branches are your superhero capes. They isolate the buggy stuff, letting you focus on fixing it without causing chaos in the main story.

* **Release Branches:** Ready to release a new version of your content? Release branches are your red carpet. They're where you add final touches and polish before rolling out changes to the main branch.

* **Topic Branches:** These are like spin-off novels exploring specific topics or ideas. You can brainstorm and refine without disrupting the main story.

## Crafting a New Branch

To whip up a new branch, type `git branch` followed by the branch's name. For instance, `git branch new-feature` creates a fresh branch named "new-feature" branching off from the current one, usually the "master."

## Switching Branches

When you're ready to jump into a different story, use `git checkout` followed by the branch's name. For example, `git checkout new-feature` switches you to the "new-feature" branch. Now, you can tweak files and commit changes straight to the "new-feature" plot.

Pro tip: You can create and switch to a new branch in one go with `git checkout -b new-feature`.

## Navigating the Branch Universe

To see all the branches in your storybook, type `git branch`. It's like having a character list, showing you all the exciting branching choices you've made.

## More Branch Wizardry
[Check out the Git cheat sheet](/cheatsheet.md) for more branch-related spells and tricks!

Ready to branch out and explore the Git galaxy?