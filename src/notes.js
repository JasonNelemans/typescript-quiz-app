/* 

In this project I added the font link to the index.html head by importing it from Google fonts. 

In this project I used createGlobalStyles from styled-components. Look at how I render a background 
image and what CSS properties I use for the global styles. 
I import the GlobalStyles component in App.tsx and just render it at the top of the return value. 

> p CSS selector selects all the p tags inside that div/styled component, and nothing outside of it. This selector only allows manipulation
for the p inside the Wrapper div. It does not pass down the style to the child component, which is QuestionCard. 

Further study these:
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparant;

background: linear-gradient(180deg, #fff, #ffcc91); <<<----- manipulate this to get color scheme for CF logo. 
*/
