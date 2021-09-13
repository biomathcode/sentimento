# Sentimento
Sentiment analysis of the Jira issue

Sentimento Give the answer to the question - "Do you sound positive in your issues?"

Some issue can hurt your feeling specially if you are a open source developer. As a user, you don't know how busy or in what mindset anyone is. So, It is always good to be positive when you are writing an issue. 

Features :-  

- sentiment analysis of the issue description
- Positive/ negative words in your issue description

atlassian marketplace :  [here](https://developer.atlassian.com/console/install/89cb4fdd-aef1-47b5-b2fa-f2d071f6cfcc?signature=5d950bcce81b3cacbbecc057f6c6d1e17a1b0f64595ce094f8286b17d144060b&product=jira)

Github repo :  [here](https://github.com/pratiksharm/sentimento.git)

App for Jira

type: issue Panel

target audience: Product manager, HRs, Teams, Business people, content writers. 

function : decision making, , work culture, general utility

## How it works

Issue description is fetched using the jira rest api. Then with the help of the npm package 'sentiment' which give scoring based on AFINN database. Sentimento also, show which are the positive words and negative words.

## Developer experience with forge

I really like the forge stack. The developer guide and reference is well written. Various example based on forge are great for beginner like me who are not well aware about the atlassian platform. 

I was not able to find the currency exchange example.  Maybe you guys have removed it from gitbucket. I like the forge cli. It works great. 

I am not that aware about docker. So, i was not able to set up tunnel while developing. I should learn docker.

I was not really able to understand the working of manifest.yml. How i am suppose to work with events, webtrigger, and how can i add JQL - formating, expression? 

## Accomplishments

- Performance
- User experience is great
- Open sourced
- Free

## What's next for Sentimento

- Give more customization options
- Releasing it on confluence as well I think content writer can use this app for better writing.
- adding a issue galance for the sentiment state.

## Feedback, Feedback, Feedback

Since, I mostly made paletto for my own utility. I am quite satisfied with what i have build. 

I would love to hear your feedbacks. 

- How can i make it better for you?

- Do you think you would like to have this app in your organisation?

- Maybe you would have a better perspective.

- Just a critic !

email me at : sharma.pratik2016@gmail.com

or

fork it.


See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/index.jsx` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
