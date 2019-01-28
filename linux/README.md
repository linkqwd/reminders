## Linux reminders

[filter lines in file](https://www.hippolab.ru/coreutils-komanda-uniq-vyvod-unikalnogo-soderzhimogo)

### Linux console

```
Redirections, stdin, stdout, stderr
```
`stdin` standard input, is information inputted into the terminal through the keyboard or input device.

`stdout` standard output, is the information outputted after a process is run.

`stderr` standard error, is an error message outputted by a failed process.

`>` redirects the standard output (`stdout`) to a file. Example: `cat oceans.txt > continents.txt` - `cat oceans.txt` stdout is redirected to `continents.txt` file and overwritten it.

`<` takes `stdin` from a file. Example: `cat < lakes.txt` : `cat` command takes file `lakes.txt` as `stdin`
 
`|` is a "pipe". Takes the standard output of the command on the left (`stdout`), and pipes it as standard input to the command on the right (`stdin`).  Example `echo 'volcano' | wc | cat > someFile.txt`

```
Aliases
```
Allows using shortcuts for bash commands. `touch ~/.bash_profile` then set up aliases, e.g: `alias l='ls -CF'`, after that restart environment`source ~/.bash_profile`

`export USER="Jane Doe"` then `echo $USER` returns the value of the variable. Note that $ is always used when returning a variable's value. This is a way to make the variable persist across programs.

`export LESS="-N"` will always invoke `less` with predefined falg `-N` (shows lines numbers);

`export PS1=">> "` is a variable that defines the makeup and style of the command prompt.

It is possible to invoke bash scripts by appending an alias to them. Example: `alias z='bash z.sh'` then add `PATH` variable: `export PATH=$PATH:~/scripts/`

`env` returns a list of environment variables.


```
wildcards
cp -r * newFolder/ or cp m*.txt someFolder/
mv * someFolder/
rm media/*
```
Sign * is like auto complete for files and folders names; 

`grep` stands for "global regular expression print". It searches files for lines that match a pattern and returns the results. Case sensitive. 
Example: `grep -iRwl Mount mountains.txt` flag `-i` enables the command to be case insensitive; flag `-R` searches all files in a directory and outputs filenames and lines containing matched results, stands for "recursive";
`-w` flag will make the given expression match only whole words; `-l` flag shows as output filesnames where expression were found.

`sed` stands for "stream editor". It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to "find and replace". Example: `'s/snow/rain/g'`
`s`: stands for "substitution". it is always used when using sed for substitution.
`snow`: the search string, the text to find.
`rain`: the replacement string, the text to add in place.
`g`: globally replaces "snow" with "rain", withot this argument command will only replace the first instance of "snow" on a line


`sort` by default, sorts strings in file in alphabetical order for the standard output.

`wc` words\lines count.

`sort -u` removes duplicated lines
