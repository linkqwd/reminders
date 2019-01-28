## Usefull links
[Oh, shit, git!](https://ohshitgit.com/)

[rebase, склеить коммиты](https://htmlacademy.ru/blog/27-how-to-squash-commits-and-why-it-is-needed)


## Git reminders

### Working with local repositories
```
git log
```
- `-p` shows changes that were made to commit, this flag can be combined with `-n#` which will show only last # commits.
- `-stat` flag shows deletions and insertions of each commit
- `--graph` shows actual parent of each commit, works for merged branches too.
- `--grep [example]` find string among commits notes

```
git tag -a tagName (-a for last commt, or specified commit a87984)
```
Command is used to add a marker on a specific commit. The tag does not move around as new commits are added.

```
git diff 
```
Compares two versions of code between commits. Can be followed by two commit IDs or local master and origin/master or just between two files.

```
git diff without arguments
```
compares working directory with staging area. By default starging area (if nothing was added to it) consist of last commit in repository

```
git diff --staged
```
compares staging area with last commit in repository

```
git show HEAD
```
shows commit changes compared to it's parent

```
git commit --amend
```
Allows to alter the most-recent commit instead of creating a new one. Good tool to make one small change in last commit.

```
git revrt [commit]
```
Safest way to discard any commit changes. Reverting creates a new commit that reverts or undos a previous commit. Saves history and makes new commit with reverted data.

```
git reset [commit]
```
Erases commits from the current branch. How it works:
- move the HEAD and current branch pointer to the referenced commit, if `--mixed` flag specified (which is default), discarded commit's changes moves to `Working directory`
- move committed changes to the staging index, if `--soft` flag specified
- erase commits, if `--hard` flag specified
- unstage committed changes

```
git checkout -b [yourbranchname]
```
Create a new branch AND check it out at the same time

```
git branch -d coins
```
delete coins branch

```
git checkout master
```
if HEAD is in 'detached' state, this command returns HEAD to the last commit in repository

```
git merge [BranchName] (into current branch or it can be specified)
```
merge [BranchName] into master. After this, commits history will be mixed (sorted by date), some commits may not come right after their actual parents when viewing via git log.
	
```
git merge --abort
```
aborts fixing merg conflicts

```
git reflog
```
Command is used to access content taht was erased. Git does keep track of everything for about 30 days before it completely erases anything.

```
git config --global credential.helper wincred
```
Command to store password

```
Sublime 3 -- git config --global core.editor "'c:/program files/sublime text 3/subl.exe' -w"
```
sets up default text editor

```
'detached state'
```
Commit without label name, out of any branch, another words, unreacheable commit. Going to the previous commit would make HEAD to be in 'detached' state. So thre would be no label for the current (past) commit. It means that any new commit from here wont be store in repositroy which means that after you checkout any branch or master, new commit would be lost, because any commit or label doesn't point to it. To make it possible, its needed to make a new branch from, so new commits could have a label (branch) and so they could be reachable. Deleting unmerged branches will cause same effect, commits within branch will become unreacheable, because no lables or commits will point on them.

```
Fast forward merges
```
If Master has diverged since the feature branch was created, then merging the feature branch into master will create a merge commit. This is a typical merge. If Master has not diverged, instead of creating a new commit, git will just point master to the latest commit of the feature branch. Passing “--no-ff” creates a new commit to represent the merge, even if git would normally fast forward.

```
Relative Commit References - Ancestry References
```
- `HEAD` commits can be referenced by their SHA, by tags, branches, and the special `HEAD` pointer.
- `^` – indicates the parent commit; `~` – indicates the first parent commit;
- Parent commit of the current commit: `HEAD^` `HEAD~` `HEAD~1`
- Great-grandparent commit of the current commit: `HEAD^^^` `HEAD~3`


## Working with remote repositories
```
git remote add origin\upstream _url_  ( git remote -v )
```
Sets up remote repositori for local repo; *orgigin* tag is usually uses for own remote repos, *upstream* tag can be used for forked repos.

```
git clone
```
Copy remote repo locally. Also, sets up remotes automatically 

```
git push [remote-shortname] [branch]
```
Pushes only those commits which are accessible from the most recent commit in *current* branch; 
arg1 - remote repo, arg2 - local branch to push 

```
git pull origin master
```
Take changes from remote repo (origin) into local repo (master).

```
git fetch = git pull origin master > git merge master origin/master
```
- Unlike pull, this command doesn't combine changes automaticlly, but allows do it manually. It's convenient when there are potentially conflicting changes. Also it is possible to look at changes in remote repo before merging them.
- Sometimes `git pull` won't work, e.g. when local master is ahed of origin/master, then it is possible to `fetch` data and merge it in a new commit.

```
git rebase -i HEAD~3
```
Allows to cobine (squash) last 3 commits from HEAD into 1 commit.
- The `-i` in the command stands for "interactive". Shows possible options how to rebase. Good for newbies.
- Commits rebasing goes in define order, gradually, from 1st to last commit. Action of each step can be specified.
- Commits that have already been pushed to remote repo, shoudn't be rebased. Coz other developers would be out of sync with the remote repository.
- It's good to create backup branch before rebasing.
