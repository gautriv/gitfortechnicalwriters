---
title: Git installation
keywords: [install git windows, install git ubuntu, install git linux, install git lfs, install git powershell, install git centos, install git debian, install git lfs ubuntu, install git windows 11, pip install git, brew install git, yum install git, conda install git, powershell install git, npm install git, choco install git, debian install git, apt install git, pkg install git, installing git
installation git windows, install pkg git, install github, install gitlab runner, install gitlab, 
install github cli]
sidebar: sidebar
permalink: installation.html
folder: mydoc
summary: This quickstart walks you through the steps required to install Git.
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/setupgit.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/gitworkflow.html
---

## Prerequisite (The Mystical Ritual of Preparation)

Before we embark on this magical journey of Git installation, you must ensure you possess the following:

* A trusty computer system, ready to embrace the essence of Git.

## Procedure (Casting the Git Installation Spell)

Now, dear adventurer, it's time to uncover the secrets of Git installation on different mystical operating systems. Peer into the depths of the magical tabs, and choose your destiny. Should you seek the wisdom of Git on Linux, click on the **Linux** tab.

<div class="tabs">
  <button class="tablink" onclick="openTab('linux')">Linux</button>
  <button class="tablink" onclick="openTab('macOs')">MacOs</button>
  <button class="tablink" onclick="openTab('windows')">Windows</button>
</div>

<div id="linux" class="tabcontent">
  <h2>To install Git on Linux</h2>
  <ol>
    <li>Open your terminal and run <code>sudo dnf install Git-all</code></li>
    <li>Enter <code>Git --version</code>. The system shall reveal the installed Git version.</li>
  </ol>
  <p><strong>Note:</strong> Should you tread the path of Debian-based lands, like Ubuntu, consider chanting <code>apt</code> instead of <code>dnf</code> in your commands. </p>
</div>

<div id="macOs" class="tabcontent">
  <h2>To install Git on MacOs</h2>
  <ol>
    <li>Open your terminal and run <code>Git --version</code>. If Git is not installed, the system will automatically ask you to install it.</li>
    <li>Enter <code>Git --version</code>. The system shall reveal the installed Git version.</li>
  </ol>
</div>

<div id="windows" class="tabcontent">
  <h2>To install Git on Windows</h2>
  <ol>
    <li>Browse to the official <a href="https://Git-scm.com/download/win" target="_blank">Git</a> website and download the software.</li>
    <li>On your terminal or PowerShell, enter <code>Git --version</code>. The system shall reveal the installed Git version.</li>
  </ol>
  <p><strong>Note:</strong>  Should you desire even more magical convenience, consider invoking the powers of a package manager, like Chocolatey, to summon Git into your service. First, you must embark on a quest to <a href="https://chocolatey.org/install" target="_blank">install Chocolatey</a> and then on your terminal enter <code>choco install Git</code>.</p>
</div>

{% include goodtoknow.html content="As you traverse the realm of Git, always remember that you are casting Git spells in the mystical realm of the Command Line Interface (CLI) or Terminal. Think of it as your trusty magic wand for commanding Git to do your bidding. But here’s the secret incantation: Always start with the word ‘git’ before typing the next instructions." %}

<script>
  function openTab(tabName) {
    var tabs = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      tabs[i].classList.remove("fadeIn");
    }

    var tabContent = document.getElementById(tabName);
    tabContent.style.display = "block";
    tabContent.classList.add("fadeIn");
  }

  // Show the Protocol tab by default
  openTab("protocol");
</script>

<script>
  // Initialize Prism.js
  Prism.highlightAll();
</script>