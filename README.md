# Bristol CTF Club Resources

A collaborative knowledge base for Bristol Cybersecurity Club CTF success built with [Quartz](https://quartz.jzhao.xyz/) from content authored in [Obsidian](https://obsidian.md/)

**Live site:** [bristolctf.club](https://bristolctf.club)


# Beginner's Guide to Contributing

Thank you for your interest in contributing! This guide will help you get started.

## Content Contribution Guide

First, you'll need to have git installed on your machine.
You will also need [Obsidian](https://obsidian.md/) unless you want to edit in markdown files directly.

### Step 1: Fork the Repository

1. Go to the repository on GitHub
2. Click the **"Fork"** button in the top-right corner
3. This creates a copy of the repo under your GitHub account

### Step 2: Clone Your Fork

From **your fork** on your github account, click the green "Code" button and copy the url.

In your terminal, clone your forked repository:
```bash
git clone <paste link here>
# i.e. $> git clone https://github.com/YOUR-USERNAME/bristol-ctf-wiki.git
```
this will download the entire from your githiub fork to a repository on your computer to a new directory, bristol-ctf-wiki

### Step 3: Create a Branch for Your Edits

```bash
git checkout -b myEdits
```

### Step 4: Open in Obsidian

1. Install [Obsidian](https://obsidian.md/) if you haven't already
2. Open Obsidian and select **"Open folder as vault"**
3. Navigate to your cloned repo and select the `content/` folder
4. Edit and create new notes or folders in Obsidian
5. From this point, you can keep this as your own notes.
6. If you want to suggest any changes you make be incorparated into the public, main page, you can submit a pull request on the main page where you forked from.... see below...

### What Makes a Good Contribution?

Good contributions include new notes, tips, tricks, resources, guides, tutorials, etc.

In an effort to avoid an overwhelming amount of information, the goal is to initially keep it to the basic foundations of how to do things.

If you want to go into greater detail, please make a separate note in the appropriate folder.

Once you've made your edits, see [Submitting Your Contribution](#submitting-your-contribution) below.


## Submitting Your Contribution

Once you've made your changes locally, follow these steps to submit them:

### Step 1: Save and Commit Your Changes

```bash
# Stage all your changes
git add .

# Commit with a descriptive message
git commit -m "Add guide for SQL injection basics"
```

### Step 2: Push to Your Fork

```bash
❯ git push origin myEdits
```

This uploads your changes to **your fork** on GitHub (not the original repository).

### Step 3: Open a Pull Request

1. Go to **your fork** on GitHub (github.com/YOUR-USERNAME/bristol-ctf-resources)
2. You'll likely see a banner saying "myEdits had recent pushes" with a **"Compare & pull request"** button — click it
3. If you don't see the banner, go to the **Pull Requests** tab and click **New Pull Request"**
4. base:'Main' will be on the left, and you want to choose your new branch with the changes on the right as the 'compare:' branch 

5. Describe your changes in the input section
 
6. Click **"Create pull request"**

### Step 4: Wait for Review

A maintainer will review your PR. They may:
- **Approve and merge it** — your changes go live!
- **Request changes** — make the requested edits, commit, and push again (the PR updates automatically)
- **Ask questions** — respond in the PR comments

# Styling changes..
 styling changes are not open for editing at this time, but we might get there. 

 you can always play around with your own local copy...

 see the quartz documentation at: 
 https://quartz.jzhao.xyz/

 for more