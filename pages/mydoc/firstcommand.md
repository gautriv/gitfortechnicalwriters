---
title: First Git command
keywords: [git init repository, git commands, how to initialize a git repository, git repository github,git repository tutorial, select a branch]
sidebar: sidebar
permalink: firstgitcommand.html
folder: mydoc
summary: "On this page you will learn how to initialize a git repository, select an initial branch, and perform some troubleshooting, if needed."
---

Now that you have installed Git, you might be wondering what's next! 

At the beginning of this course, I promised to start from scratch. 

### Prerequisites
1. A text editor. Going by the trend, I'll be using [Visual Studio Code](https://code.visualstudio.com/download). However, this does not mean that you have to use Visual Studio Code. You can use the code editor of your choice.

### Procedures
1. Create a folder at your preferred location.
    {% include note.html content=" For example purposes, I created a folder (GitCommand) on Desktop." %}
2. Open the folder GitCommand on Visual Studio Code.
3. Create a file, **index.html**.
4. Copy and paste the following code into your index.html file.
    ```sh
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
5. Browse to **View > Terminal** to open the terminal.
6. Enter `git status`. What does the system display?
   {% include goodtoknow.html content=" Since this is the first time you use a git command on your directory(folder), the system displays _fatal: Not a git repository (or any of the parent directories): .git_. This message means that Git cannot recognize this directory. That gives us our next task. To ensure that Git recognizes our directory, we must initialize it." %}
7. Run `git init`. What does the system display?
      {% include note.html content="`git init` makes any directory into a Git repository. When you create a git repository, you can also create an initial branch in git. By default, git initializes a repository to the master branch. You can, however, choose and tell git in which branch you want to initialize the repository. If you wish to initialize the repository to the main branch, run `git init -b main`. Additionally, do not worry if you know nothing about branches in Git; I've covered these concepts later in the course." %}

      {% include important.html content="The system displays an error message if you run `git init -b main` after `git init` since you already initialized the repository. To run the `git init -b main` command, first delete the Git folder from your GitCommand folder and try again." %}

8. Browse to your GitCommands folder on your Desktop. Do you see a **.git** folder inside with an index.html file?
      {% include important.html content="Git generates a hidden directory named. git. This directory maintains all of the objects and references created and used by Git as part of your project's history." %}

### To recap, you've learned how to:
* Initialize a git repository
* Select a branch during initialization
* Troubleshoot during initialization

Congratulations! You now know how to initialize a git repository. Isn't it simple?
If you have questions or suggestions, use the comments box below.