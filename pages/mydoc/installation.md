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

## Prerequisites

1. A working computer system that can handle Git.

Let's see how we can install Git on various operating systems. Select the appropriate tabs for more information. For example, if you want to install Git on Linux, select **Linux** tab.

<div class="tabs">
  <button class="tablink" onclick="openTab('linux')">Linux</button>
  <button class="tablink" onclick="openTab('macOs')">MacOs</button>
  <button class="tablink" onclick="openTab('windows')">Windows</button>
</div>

<div id="linux" class="tabcontent">
  <h2>To install Git on Linux</h2>
  <ol>
    <li>Open your terminal and run <code>sudo dnf install Git-all</code></li>
    <li>Enter <code>Git --version</code>. The system displays the installed Git version.</li>
  </ol>
  <p><strong>Note:</strong> On a Debian-based distribution, such as Ubuntu, try <code>apt</code> instead of <code>dnf</code></p>
</div>

<div id="macOs" class="tabcontent">
  <h2>To install Git on MacOs</h2>
  <ol>
    <li>Open your terminal and run <code>Git --version</code>. If Git is not installed, the system will automatically ask you to install it.</li>
    <li>Enter <code>Git --version</code>. The system displays the installed Git version.</li>
  </ol>
</div>

<div id="windows" class="tabcontent">
  <h2>To install Git on Windows</h2>
  <ol>
    <li>Browse to the official <a href="https://Git-scm.com/download/win" target="_blank">Git</a> website and download the software.</li>
    <li>Enter <code>Git --version</code>. The system displays the installed Git version.</li>
    <li>On your terminal or PowerShell, enter <code>Git --version</code>. The system displays the installed Git version.</li>
  </ol>
  <p><strong>Note:</strong> You can also use a package manager, for example, Chocolatey, to install Git on your system. If you want to use Chocolatey, you must first install <a href="https://chocolatey.org/install" target="_blank">Chocolatey</a> and then on your terminal enter <code>choco install Git</code></p>
</div>



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