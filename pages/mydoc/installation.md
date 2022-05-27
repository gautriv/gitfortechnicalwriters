---
title: Git installation
keywords: [git for windows, install git on linux, install git on windows, install git on ubuntu, install git windows command line, install git on MacOs]
sidebar: sidebar
permalink: installation.html
folder: mydoc
summary: This quickstart walks you through the steps required to install Git.
---

### Prerequisites

1. A working computer system that can handle git.

### To install git on Linux
1. Open your terminal and run `sudo dnf install git-all`

    {% include note.html content="On a Debian-based distribution, such as Ubuntu, try `apt` instead of `dnf`" %}
2. Enter `git --version`. The system displays the installed Git version.
   

### To install git on MacOs
1. Open your terminal and run `git --version`. If git is not istalled, the system will automatically ask you to install it.
2. Enter `git --version`. The system displays the installed Git version.


### To install git on Windows

1. Browse to official [Git](https://git-scm.com/download/win) website and download the software.

    {% include goodtoknow.html content="You can also use a package manager, for example, Chocolatey, to install Git on your system. If you want to use Chocolatey, you must first install [Chocolatey](https://chocolatey.org/install) and then on your terminal enter `choco install git` " %}

2. Enter `git --version`. The system displays the installed Git version.

3. On your terminal or powershell enter `git --version`. The system displays the installed Git version.

Congratulations! You have installed Git and are ready for next adventures. If you have questions, please let me know in comments.

{% include share_bar.html %}
