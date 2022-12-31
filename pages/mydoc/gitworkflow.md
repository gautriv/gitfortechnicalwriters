---
title: Git workflow
keywords: [git init repository, git commands, how to initialize a git repository, git repository github,git repository tutorial, select a branch]
sidebar: sidebar
permalink: gitworkflow.html
folder: mydoc
summary: "On this page you will learn how to initialize a git repository, select an initial branch, and perform some troubleshooting, if needed."
---

Git workflow is a set of guidelines and practices that define how Technical Writers use Git to manage and maintain their contentbase. 

{% include goodtoknow.html content="If you feel confused or unsure about anything after reading this page, don't worry. It's completely normal to feel overwhelmed by new Git terminology when you're just starting out. I personally know what it's like to feel lost in the beginning. Just try to stay calm and trust the process. The main reason I want to provide an overview is to give you a broad understanding of all the things to consider when using Git. If you don't understand something, just stay with the tutorial. I will make sure to carefully guide you through each Git command that technical writers commonly use." %}

Let's review a project workflow that involves Git and GitHub, and the command line interface (CLI) commands that help move the project from one step to the next. The workflow is illustrated in a diagram, which represents the process commonly followed in most projects.

<img title="Git Workflow" alt="Git Workflow" src="/images/gitworkflow.png">

Here's what each part of the diagram represents:

* **Working directory**: This is the directory on your local machine where you make changes to the files in the repository. You can use any text editor or programming tools to modify the files in the working directory.

* **Staging area**: This is a temporary holding area for changes that you want to commit. When you make changes to a file in the working directory, the file is not automatically tracked by Git. To track the changes, you need to add the modified file to the staging area using the `git add` command.

* **Repository (localrepo)**: This is the main database that stores all the commits made to the repository. When you commit changes to the repository, Git creates a snapshot of the repository at that point in time. This snapshot includes the changes made to the files in the repository since the last commit.
  
* **Remote repository (remoterepo)**: This is a copy of the repository that is hosted on a remote server, such as GitHub. A remote repository can be used to collaborate with other developers or to store a backup of the repository.

I hope this diagram helps to visualize the basic workflow of Git! Let me know if you have any questions.


Here is a general Git workflow that you can follow:

1. Create a new local repository:
   
   ````
   git init

   ````
2. Add files to your repository:

   ````
   git add --all

   ````

3. Commit your changes:
   
   ````
   git commit -m "Initial commit"

   ````
4. Connect your local repository to a remote repository (for example, on GitHub):

   ````
   git remote add origin <remote repository URL>

   ````
5. Push your changes to the remote repository:

   ````
   git push -u origin master

   ````

6. Make changes to your files and commit them locally:

   ````
   git add --all
   git commit -m "Made some changes"

   ````
7. Push your changes to the remote repository:

   ````
   git push -u origin master

   ````

8. If you need to pull changes from the remote repository, use the following command:

   ````
   git pull

   ````

This is just a basic Git workflow, and you may need to modify it depending on your specific needs and use case. 

{% include goodtoknow.html content="Again, all the content on this page is for informational purpose only. In the upcoming pages we will see how Git works on real time." %}

## What's next?
[Git installation](/installation.md)