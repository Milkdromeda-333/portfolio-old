
During the course of building this project I:

- Learned to focus on the MVP first before adding lots of features that would "be nice".

- Google all of my questions no matter how simple. I may be pleasantly suprised. (How to keep words together came to be just using a css property called whitespace)

- Figured out that I really like graphic design. The little logo animation was (difficult but) fun!

- Learned about: `wbr` html tag,

- Realized that the more that I build, the better I'm getting at thinking of solutions. I used to SUCK at making responsive navbars, but now its easy-peasy. I did so by struggling through the learning phase.

- Started to seriously think about CSS methodologies to make more effiient CSS.

Questions:

- Im not entirely sure that I need or correctly implelmented the browserRouter in main.jsx

Challanges:

- Had a hard time perfectly centering my div. [Found this code on stackoverflow.](https://stackoverflow.com/questions/953918/how-to-align-a-div-to-the-middle-horizontally-width-of-the-page). It uses flexbox to utilize its `align-self` property.

```
.container{
	 width: 100%;
	 display: flex;
	 height: 100vh;
	 justify-content: center;
}

.item{
	 align-self: center;
}
```

also, there's

```
display: grid;
place-content: center;
```

- I had a hard time with styling, specifically with styles over-riding others because of specificity. It was mostly caused by my use of html element selectord instead of class selectors.


Notes: 
- background noise is from https://fffuel.co/