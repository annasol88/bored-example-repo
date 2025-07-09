# Create your own bored app
This tutorial will walk you through how to create your own bored app!
This will teach you all the key concepts you need to understand for basic web development, and more importantly your hackathon!

## Create Github account 
First things first, you will need to log into Github. if you don't already have an account, you will need to create one. To do so:

- Navigate to [github.com](https://github.com/). 
- Press Sign up
- Follow the prompts to create your account **make sure you use an email that you have access to because you will need to verify your account.*

## Get familiar with GitHub

GitHub is a really powerful platform used for software collaboration and version control. (it does more than just this)

Yoiu will need to have a good understanding of how it works ahead of your hackathon, so lets do a wee deep dive.

- Follow [this tutorial](https://docs.github.com/en/get-started/start-your-journey/hello-world) to learn about key github concepts.

## Lets start coding 

To start coding our bored project you will need to first:
- Create a new repository, which you should know how to do from the last tutorial.

then to make changes we will use another github feature called code spaces, since we will want to edit mutliple files at a time.

To do this: 
- Click on `<> code` -> `codespace` -> `+` as shown in the image
![click on `<> code` -> `codespace` -> `+` as shown in the image](tutorial-imgs/create-codespace.png)
- This should open in a new tab for you immediately, but if not you should be able to find your codespace listed under `<> code` -> `codespace`, mine is called `ideal couscous` as you can see in the image above.

Your codespace will allow you to make changes through visual studio code (VSC). This a text editor/ IDE for code - just like microsoft word for editing documents VSC is for editing code. 

You can see more details about features of VSC on page 17 of your hanbook if you are interested!

## Create Web page with static content - HTML
HTML is a markup language used for all webpages so lets see it in practice:
- Create a file called `index.html`
- Copy the following code snippet into your index.html
```html
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Bored App</title>
</head>
<body>
    <!-- It is tradition to make your code say hello world in every new programming languge you learn -->
    <h1>Hello World!</h1>
</body>
</html>
```

This code will become a webpage that says hello to the world. Now we need to 'serve' it, this means we need to put this code through an interpretter to give us the output that we want.

While you can interpret static HTML by opening the file in your browser directly, we are going to use a live server plugin that does the interpretting for us and detects real time updates, this will be important as we add more things to our site.

to install our plugin we will need to:

- In our VSC codespace, click the extention icon in the left hand menu -> search for 'live server' then press install.
![click the extention icon in the left hand menu -> search for 'live server' then press install](tutorial-imgs/live-server-extension.png)
- Once installed you should see an option saying go live in the bottom left.
![go live option](tutorial-imgs/go-live-option.png)
- If it does not appear you may need to close and open your code space to allow VSC to refresh itself.

Clicking on this should open a browser where we can see our hello world website.

Notice that URL is `127.0.0.1:5500`. This 127.0.0.1 is called a loopback IP address which means this webpage is running on your local machine not the internet! 

Congrats!!! You have now created your fisrt HTML page. Now lets add more to it.

Now, using [this cheetsheet](https://www.shecodes.io/cheatsheets/html) to help you, can you do the following:
- Update the heading from 'Hello World!' to 'Are You Bored?'
- Add a button that says 'I'm bored'.
- Add a paragraph that encourages the user to click on the button.

Don't worry about this not looking great, we will fix that in the next step.

## Style our webpage - CSS
CSS is a style sheet language which allows us to selectively style HTML elements. To add CSS to our codebase we will need to do the following:
- Create a file called `styles.css`
- Add a link to the `<head>` of our html like so:
```diff
...
<head>
  <meta charset="UTF-8" />
  <title>My Bored App</title>
+ <link href="styles.css" rel="stylesheet">
</head>
...
```
- Then add the following styles to your CSS:
```css
body {
    /* add some colour using hex colour codes */
    color: #444444;
    background-color: #EFEFEF;
}
```

When using styles it is best practice to refer to our HTML elements using classes so that we can make styles as granular or reusable as we want. For example.

- Lets wrap all the content in our page currently with a `<div>` or a `<main>` tag then add a class to it called `main-content`:
```html
<body>
    <main class="main-content">
    ... <!-- your code is here -->
    </main>
<body>
```

- In our style.css lets add the following block:
```css
.main-content {
    /* position our content center with flex box*/
    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    /* add some spacing around */
    padding: 2rem;
    gap: 1rem;
}
```

Notice that when we reference classes in out CSS we must use a `.` prefixing the name

- Now, Open your live serve again and lets see what has changed!

Our Webpage is looking much better already!!!

Now, lets do some more styling using [this CSS cheetsheet](https://www.shecodes.io/cheatsheets/css) to help you, lets try to:
- Add some differnt fonts/ text colors / text sizes 
- Style our button to look like the one in the example. The hex for the colour used is: `#006652`, but feel free to mess around and choose your own colours and styles.

## More styling - Bootstrap
As we've seen, using CSS can be fiddly and repetative sometimes, and becomes more and more difficult to maintain as applications grow.

One solution to save time writing your css is to use a third-party, open-source framework such as [Bootstrap](https://getbootstrap.com/).
Bootstrap provides a library of pre-designed components and styles that we can plug into our app, so lets try it out.

- First, we need to add the bootstrap style sheet and javascript to our index.html:
```diff
...
<head>
  <meta charset="UTF-8" />
  <title>My Bored App</title>
+ <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
+ <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
  <link href="styles.css" rel="stylesheet">
</head>
...
```
Pay attention to the order of your links because this matters for CSS. If you want your stylesheets to take presedence over bootstrap (which we often do because we may choose to override some classes) we need those stylesheets to be listed last.

### Buttons
Lets have a look at styling some buttons with bootstrap [here](https://getbootstrap.com/docs/5.3/components/buttons/)

As you can see from the documentation, bootstrap exposes a set of classes for different button style variations, so lets see how this work. 

- Try adding the `btn-primary` class (or another of your choice) to your bored button and see what happens. It should look something like this:
```html
<button type="button" class="btn btn-primary">I'm Bored</button>
```

Great! we've created a beautifully styled button in seconds! thats probably saved us 10-20 lines of coding ourselves!

- Now, have a play about with the other class modifiers available on that page to see the different things we can do to our buttons.

But there aren't a lot of colour options, what if we want different ones? Well Bootstrap supports this too. In web development its common for a site to have 2-3 main branding colours which we call 'primary', 'secondary' & 'tertiary' and also status colour like 'success', 'error' etc. which is what bootstrap button classes refer too. 

These classes are written using CSS variables which means they can be customized by changing the variable values.

So lets obverride these variables with our own branding colours.

- In your styles.css add a class for the primary button and replace your colour varaibles as shown: 
```css
.btn-primary {
  --bs-btn-color: #fff !important;
  --bs-btn-bg: #006652 !important;
  --bs-btn-border-color: #006652 !important;
  --bs-btn-hover-color: #fff !important;
  --bs-btn-hover-bg: #003d31 !important;
  --bs-btn-hover-border-color: #003d31 !important;
  --bs-btn-active-color: var(--bs-btn-hover-color)!important;
  --bs-btn-active-bg: #003d31 !important;
  --bs-btn-active-border-color: #003d31 !important;
}
```
You will need the `!important` flag to make sure your overrides take presidence over the default styles.

You can also pick a different colour if you want! you will just need to find the hex code [here](https://www.everyhex.codes/)

### Positioning

If you remember earlier we wrote some CSS to position our content in the centre of the screen. Well another feature of bootstrap is its grid layout styles which make building neat and responsive really quick and easy.

- Have a read of the 'how they work' section on bootstrap grids [here](https://getbootstrap.com/docs/5.3/layout/grid/).

Now lets apply this to our project.

- First, we want a nice responsive screen so lets add a `container-fluid` class in place of our `main-content`:
```diff
...
-<main class="main-content">
+<main class="container-fluid">
  <h1>Are You Bored?</h1>
  <p>Lets solve your bordom. Click the button below for ideas.</p>
  <button class="btn btn-primary" type="button">I'm Bored</button>
</main>
...
```

We can see thats added a nice bit of padding around our HTML elements.

- Next wrap all our elements in a row class
```diff
...
<main class="container-fluid">
+  <div class="row">
    <h1>Are You Bored?</h1>
    <p>Lets solve your bordom. Click the button below for ideas.</p>
    <button class="btn btn-primary" type="button">I'm Bored</button>
+  </div>
</main>
...
```

This will mess up our styles because we have not actually justified the positioning of the content in our row, so we need to:

- Add the `justify-content-center` class to our row; to centre all block elements such as buttons, divs etc.
- Add the  `text-center` class to our row also; to centre allm test elements such as p/h1/2/3 etc.

- Lastly we dont want the button to span the whole width of the page so to fix that we can add a col class to it:
```html
<button class="col-4 btn btn-primary" type="button">I'm Bored</button>
```

- We can also make out button really clever and determine its size based on the screen this is called making it 'responsive':
```html
<button class="col-sm-4 col-11 btn btn-primary" type="button">I'm Bored</button>
```
This will make our button nearly full-width (col-11) by default and 1/3 of the screen for any screen width bigger than small (576px). See [Grid Options](https://getbootstrap.com/docs/5.3/layout/grid/#grid-options).

Our bored app is starting to take shape now.

### Nav Bars

Now lets get more independant, and add a navigation bar using bootstrap.

- Have a look at the bootstrap documentation for its [Navbar component](https://getbootstrap.com/docs/5.3/components/navbar/)
- Mess about with the different options and classes available and create a navigation bar similar to the one in the bored app, or maybe you can make it even better.

- Try create another html page `activity.html` and toggle between them using the nav bar?
*Hint: you will need to copy and paste the navbar on both HTML pages.

## Add some functionality - Javascript

Javascript is the foundation for adding any functionality or interactivity to any webpage. So lets see this in practice with some basic show hide functionality!

First we need to create some css classes that will deal with displaying and hiding the information we want on screen.

- In your styles.css create the following 2 classes:
```css
.hide {
    visibility: hidden;
}
.show {
    visibility: visible;
}
```

- Next lets create the HTML element that we want to hide:
```diff
...
  <button class="col-sm-4 col-11 btn btn-primary" type="button">I'm Bored</button>
</div>

+<div class="card text-center">
+  <div class="card-body">
+    hidden message
+  </div>
+</div>
```

We are using [bootstrap card styles](https://getbootstrap.com/docs/5.3/components/card/) here to make our hidden message look nice but you can use whatever you want.

Now its time for the Javascript.

- Create a page called script.js
- Now we need to add a reference to that script in our html like so:
```diff
...
+ <script src="script.js"></script>
</body>
</html>
...
```
Note: scripts should always go at the bottom of the page because they need to be compiled last.

In Javascript we use ID's to reference elements in our HTML page that we want to manipulate. This means all ID's must be unique.

- Since we want to manipulate our card element lets add an ID to it:
```html
<div id="hidden-card" class="card text-center">
```

- Now lets create our javascript function in `script.js`:
```javascript
function toggleMessage() {
  // find the hidden-card element in our document
  let hidden_element = document.getElementById("hidden-card")
  // if it is hidden then show it
  if (hidden_element.classList.contains("hide")) {
    hidden_element.classList.add("show")
    hidden_element.classList.remove("hide")
  // otherwise hide it
  } else {
    hidden_element.classList.add("hide")
    hidden_element.classList.remove("show")
  }
}
```

This function won't currently do anything? why? because we are not invoking it anywhere.

*Think of functions as reusable blocks of code that you need to call into action when you need them.

To trigger our function we are going to use a javascript directive. Directives are event listeners in your website that listen to various types of inputs.

- We are going to use the OnClick directive like so:
```html
<button type="button" class="btn btn-primary" onClick="toggleMessage()">I'm Bored</button>
```

Nice one! youve now got a website that interacts with the user! 

- Now for a challenge, rather than showing and hiding messages do you think you can change the text content of your card when you hover over it. Use [this cheatsheet](https://www.shecodes.io/cheatsheets/javascript/element-manipulation) to help you.

## Lets add some data - API's

Now for the fun part. Lets power our website with some data, so we can make our hidden message display a random activity idea for when we are bored. 

For this we are going to use the Bored API, [documented here](https://bored.api.lewagon.com/)

An API is an Application Programming Interface, which is basically a program that allows 2 different systems to talk to eachother, for example a web app talking to a data source.

API's communicate using a syntax called JSON which stands for JavaScript Object Notation.

- have a read of [this W3 Schools article](https://www.w3schools.com/js/js_json_syntax.asp) to get familiar with JSON.

so lets see this in practice:
- Update our toggleMessage function with the following:

```javascript
async function toggleMessage() {
    fetch('https://bored.api.lewagon.com/api/activity')
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
```

So what does this do:
| Code | Explanation | 
|---------|--------|
| `async function toggleMessage()` | `async` marks our function as asynchronous meaning our operation to call an external system is not blocking. Don't worry too much about understanding this but it is necessary to have whenever our program calls something external. |
| `fetch(...)` | We use the [Javascript fetch function](https://www.geeksforgeeks.org/javascript/javascript-fetch-method/) to GET data from the url provided `https://bored.api.lewagon.com/api/activity` |
| The first `.then(...)` | We check if the API we called returned a response Ok, if not we throw an error to be caught later otherwise we convert our response to JSON so our program can understand and return it (pass it to the next then) |
| The next `.then(...)` | logs the response to the console |
| `.catch(...)` | prints an error to the console if the API responded with an error. |

Lets see if that worked
- Check your console by right clicking (on your live serve) -> `inspect` -> `console`. Do you see the bored API's response printed there?

Great! Now lets display it in our hidden message.

- Since we want the content of our card to be populated we will need to add an id to that div:
```html
<div id="hidden-message class="card text-center">
  <div id="hidden-message-content" class="card-body">
    hidden message
  </div>
</div>
```

- add the following to your toggleMessage() function:
```diff
async function toggleMessage() {
    fetch('https://bored.api.lewagon.com/api/activity')
    .then(response => {
        if (!response.ok) {
            throw new Error(`API responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
+
+
+
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
``` 

## Git Commit

Grteat Work! When working with other people, the final step that we need to do once we've finished our code is to commit and push it to our remote repository.

This is important because it means other people working on the project will now be able to see our changes and use the latest version of the code we just added.

Since you'll be doing plenty of this on your hackathon, lets give it a wee practice now.

- on your left hand menu, click into source control:
![alt text](image.png)

Here you can click through each file to see the changes you have made. Since this is a new project you just started, every file will be new (marked with a U to indicate it was)