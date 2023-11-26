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

Before you begin this enchanting quest to install Git, make sure you have:

* A trusty computer system, eager to embrace the power of Git.

## Procedure (Casting the Git Installation Spell)

Dear adventurer, the time has come to uncover the secrets of Git installation on different mystical operating systems. Choose your destiny by clicking on the corresponding tab:

<div class="tabs">
  <button class="tablink" onclick="openTab('linux')">Linux</button>
  <button class="tablink" onclick="openTab('macOs')">MacOs</button>
  <button class="tablink" onclick="openTab('windows')">Windows</button>
</div>

<div id="linux" class="tabcontent">
  <h2>To install Git on Linux</h2>
  <ol>
    <li>Open your terminal and run <code>sudo dnf install Git-all</code></li>
    <li>To verify the installation, enter <code>Git --version</code>.</li>
  </ol>
  <p><strong>Note:</strong> If you're venturing into the Debian-based lands, like Ubuntu, replace <code>dnf</code> with <code>apt</code> in your commands. </p>
</div>

<div id="macOs" class="tabcontent">
  <h2>To install Git on MacOs</h2>
  <ol>
    <li>Open your terminal and run <code>Git --version</code>. If Git is not installed, the system will automatically ask you to install it.</li>
    <li>To verify the installation, enter <code>Git --version</code>.</li>
  </ol>
</div>

<div id="windows" class="tabcontent">
  <h2>To install Git on Windows</h2>
  <ol>
    <li>Browse to the official <a href="https://Git-scm.com/download/win" target="_blank">Git</a> website and download the software.</li>
    <li>To verify the installation, on your terminal or PowerShell, enter <code>Git --version</code>.</li>
  </ol>
  <p><strong>Note:</strong>   For even more magical convenience, consider summoning Git using a package manager like Chocolatey. First, embark on a quest to install <a href="https://chocolatey.org/install" target="_blank">Chocolatey</a> and then on your terminal enter <code>choco install Git</code>.</p>
</div>

{% include goodtoknow.html content="As you explore the realm of Git, remember that you are casting Git spells in the mystical realm of the Command Line Interface (CLI) or Terminal. Think of it as your trusty magic wand for commanding Git to do your bidding. But here's the secret incantation: Always start with the word <code>git</code> before typing any further instructions." %}

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