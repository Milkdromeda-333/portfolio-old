## Challenges:

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

- I had a hard time with styling, specifically with styles over-riding others because of specificity. It was mostly caused by my use of html element selectord instead of class selectors.

- If text is not centering, try text-align: center!
