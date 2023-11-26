---
title: Push your local repository to GitHub
keywords: [push local repository to GitHub, clone GitHub repository, add files locally, standard sequence of adding, committing and pushing changes, GitHub tutorial, local Git repository, create GitHub repository, set up local repository, GitHub workflow, GitHub course, version control, commit changes, push changes to GitHub, Git commands, Git basics.]
sidebar: sidebar
permalink: local_repository_to_GitHub.html
folder: mydoc
completed: 55
summary: "This page provides information on pushing local repository to GitHub."
next:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/setupssh.html
previous:
  url: https://beingtechnicalwriter.com/gitfortechnicalwriters/createrepocommandline.html
---

Now that you've successfully created the repository and set up a local instance, you have two options:

1. Push your local repository to GitHub, making it accessible to the world.
2. Clone the GitHub repository to your local machine, allowing you to work on it locally before pushing to GitHub.

If you opt for the latter, you'll add files to the cloned instance locally, following the standard sequence of adding, committing, and pushing changes. We will delve into this procedure later in our course.

For the purpose of this chapter, our focus will be on **how to push your local repository to GitHub**.

**Prerequisites:**

1. Ensure you have a GitHub repository already created.
2. Verify that you've set up a local Git repository.

**Connecting Your Local Repository:**

1. Locate the repository you just created on GitHub. Click on "Code," expand the dropdown menu, choose "HTTPS," and copy the provided URL.

2. Open your local repository using a terminal window.

    ![Git Workflow](./images/openterminal.png)

3. Execute the following command:

    ```bash
    git remote add origin https://github.com/<your_user_name>/<your_repo_name>.git
    ```

    {% include note.html content="Replace `<your_user_name>` with your GitHub username and `<your_repo_name>` with the name of the repository you created." %}

    ![Git Workflow](./images/remote.png)

4. Now, push your local changes to the remote repository using the command:

    ```bash
    git push -f origin HEAD
    ```

5. Head to your repository on GitHub. Refresh the page if needed. Can you spot your local content in the GitHub repository? Great! This command transfers your local repository's contents to the GitHub repository, making your project accessible to the world.

**Additional Notes:**

- The `-f` flag in the `git push` command forces the push even if there are remote changes that haven't been pulled. This is useful if you're starting a new repository and haven't made any changes remotely.

By following these steps, you'll seamlessly integrate your local repository with GitHub. Now, your project is ready to shine on the GitHub platform. See you in the next chapter!