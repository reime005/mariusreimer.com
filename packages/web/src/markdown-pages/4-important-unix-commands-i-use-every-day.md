---
title: "4 Important Unix Commands I Use Every Day"
date: "2020-04-19"
description: "As a developer, even if you don't work with backend stuff too often, you may want to use the terminal now and then. I think that every developer should have a least knowledge of the most important unix commands."
slug: "4-important-unix-commands-i-use-every-day"
categories:
  - "blog"
tags:
  - "linux"
  - "shell"
  - "unix"
cover_image: "https://mariusreimer.com/images/fabian-grohs-mCj7UinqOYQ-unsplash-copy.jpg"
---

As a developer, even if you don't work with backend stuff too often, you may want to use the terminal now and then. I think that every developer should have a least knowledge of the most important unix commands. Not even can it improve your life as a developer, it can also help you learn new stuff since some tutorial depend on these commands. I work on on a Mac OS machine with `zsh`.

## #1 The "change directory" command: cd 

The `cd` command is one of the most important ones. It allows you to switch between directories. In combination with the tabulator for auto completion, it is probably used every day by most developers.

- With `cd ..` you can go up or back to the parent folder.
- Just `cd` or `cd ~` should bring you to your home folder.
- With `cd -` you should jump back to the folder you've been before. This could be a folder that is not a parent or child.

## #2 The "list directory contents" command: ls

Another important command is the `ls` command. Without that, you are more or less in a dark room / without light. Just `ls` may be enough for most cases, but it might lack detail for you. With `ls -la` you can see the directory file list with its type (directory or file), permission, ownership and more.

Additionally, you could use `ls -lah` which would add unit suffixes like Kilobyte or Megabyte. You may be able to just use `l` (or create an alias...) to have it shorter. I personally also use a zsh hook that runs `ls` after each `cd`.

## #3 The "remove" command: rm

One of the very useful and eventually dangerous commands is `rm`. It is often easier to remove files or folders with the terminal rather than a graphical action that includes clicking or drag and drop. On the other hand, the deleted files won't appear in your trash bin, so you have to be careful.

To simply remove a file, `rm` is enough. In order to remove a directory, including its content and sub directories, you have to use the recursive option `rm -r`. In addition, to not having to confirm the delete operation, you have to add the force option, so that it is `rm -rf`.

## #4 The "concatenate" command: cat

When working with files in a directory, you eventually want to read their content (print them to the standard output). This can be done with the `cat` command. You can even concatenate multiple files into another file, if you use the redirection operator: `cat one two > onetwo`. 

There are many other, very helpful unix commands that I use often. Most of them I use in combination with others, which make them even more useful. This practice is called Piping, which chains commands together and redirects the output of one command to the next.
