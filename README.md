# Message Generator


## Purpose

This project is a part of Codecademy's full stack engineer career path. The directions are to:
- build a message generator program using JavaScript
- use Git version control
- use command line
- develop the files locally on my computer (instead of Codecademy's "workspaces")

The JavaScript used is relatively straightforward, so this ended up being more of a way to practice using Git and GitHub, which is what the most recent lessons focused on.

There wasn't much guidance on the project, but a couple of project ideas they gave were a generator for astrology readings, inspirational quotes, or nonsensical jokes. I thought it would be fun to build a generator for random Donald Trump quotes.


## How To Use

I created the message generator with no parameters so that all the candidate options for variable words are included in the code. So a user simply needs to invoke the function in order to see the message output.


## Approach

I started off thinking about the structure I wanted for my quotes. This is the first set of sentences I typed when I was thinking about how I might establish the structure of the random quotes:
> I walked into the room. I said, "Wow, this is a big room."
> They don't make rooms like this anymore, you can't, the woke mob won't let you.
> Everyone is saying how unfair it is.
> And you know Old Man Biden isn't bold enough to do anything about it.

Then I edited that quote to include bracketed placeholders for variables that the JavaScript would control:
> I [1: past-tense verb] into the [2: noun you can walk into].
> I said, "[3: exclamation], this is a [4: positive adjective that can describe 2] [5: repeat use of 2].
> They don't make [6: plural of 2] like this anymore, you can't, the [7: noun describing a group Trump doesn't like] won't let you.
> [8: noun to describe a group of people with a sweeping consensus] is saying how [9: negative adjective] it is.
> And you know [10: negative adjective to put in front of "Biden"] Biden isn't [11: positive adjective] enough to do anything about it.

I didn't want to overcomplicate the project, so I decided that the general outline above would be sufficient for the project and have enough variables to be fun.


##Challenges & Unknowns

###JavaScript Approach

Generating the message is relatively simple. The project called for a minimum of 3 variables, and in order to produce something I thought would make me laugh, I ended up with 11 variables. I used arrays to store the candidate options for each message variable, and within the function I created an additional 11 variables representing a randomly chosen element within each of the variable arrays. The number of variables I ended up with seems like overkill; I'm not sure if there was a better or more efficient approach.

I decided to create the additional 11 varibales within the function, because I was initially using more complicated and verbose string interpolation as follows:
> return `I ${verb1[randomIndexFunc(verb1)]} into the ${noun2[randomIndexFunc(noun2)]}, I said, "${exclamation3[randomIndexFunc(exclamation3)]}...`

While I was attempting to solve for that, I realized that part of my message generator needed to pluralize a noun used earlier in the message. So I created a function that would take the previously-generated noun as an argument, check if the last index is a 'y', and if so, replace the 'y' with 'ies', and if not, add a 's' to the end of the word. I left some of the sample code (commented out) that I was using in order to test how I needed to write the JavaScript to accomplish this. This solution doesn't account for how to pluralize all English words, but it suffices for the words included in my arrays.

This README was the first file I wrote using markdown, and it wasn't rendering properly when I pushed it and main.js to the GitHub repo. I realized I was forgetting to put spaces after each of the syntax characters.


