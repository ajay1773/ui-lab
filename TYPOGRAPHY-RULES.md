# Rules for better typography

## Rule 1:
First of focus on the body text of the application. That font will be the main font of the app and this will be the most amount of content that your user will read so get that first of all.

## Rule 2:
Most optimal and easy to read font size on the internet is considered as **16px**. That is why the default value of a rem is also 16px. You should use this as a base point and then you can scale up and down from this to get different typography variants

## Rule 3: 
Line height should always in between **1.2 to 1.6** and these are relative units. 

## Rule 4: 
Line width should always in between **45-90 characters**

## Rule 5: 
Make sure to always use upto 2 font families in your application. Ideally one should be enough but you can use 2 as well. 

# When to use what units px/em/rem? 

## PX: 
The most used unit in the whole CSS. This is an absolute unit. 

**Con**: The main con of using this is that the typography does not scale.


## EM: 
This is a relative unit which is derived from the font-size declared on the element. For example if a DIV has
```css
font-size: 16px;
margin-bottom: 1.5em;
```

then the margin bottom will be $16 \times 1.5$. 

**Con**: the con of this unit it that it compounds. It can be accumlated through the complete branch from the parent to child

## REM: 
This is also a relative unit but nowadays this is the one which is mostly used. This stands for <u>Relative EM</u>. This is derived from the font-size defined on the root of the `<html></html` tag. Like this

```css
html{
    font-size:16px;
}
h2{
    font-size: 2rem;
}
p{
    font-size: 0.75rem;
}
```


## When to use what:

### For typography
Always use rem. Why so that the font scales with the zoomed in screen or the scaled base font-size. Avoid using PX or EM.

### For horizontal spacing, padding and margin
Always use px. Why? Because if we use relative units like rem here then they space will increase along the increased base font size. This will add negative space and cause the text to break in way too many lines
For example 


This one is easy to read
```
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.

```
Rather then this one

```
Lorem Ipsum is simply 
dummy text of 
the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy 
text ever since 1966, 
when designers at Letraset and James Mosley, the 
librarian at St Bride Printing Library in London, 
took a 1914 Cicero translation and scrambled it to
 make dummy text for Letraset's Body Type sheets. 
It has survived not only many decades, 
but also the leap into electronic typesetting, 
remaining essentially unchanged. 
It was popularised thanks to these 
sheets and more recently with desktop 
publishing software like Aldus 
PageMaker and Microsoft Word 
including versions of Lorem Ipsum.
```
### For vertical spacing, padding and margin
For this you should use the REM. Why? Because the vertcal space in typography helps in better readability so It will look odd to have same vertical spacing between 2 paragraphs even though font has scaled up by 2X.


### For breakpoints
For this the choice is on user discretion. But according to me, it should use rem instead of pixels

```css
/* Should we do this: */
@media (min-width: 800px) {
}
/* …Or this: */
@media (min-width: 50rem) {
}
```


I will explain the reason of using rem with a usecase. Suppose you have a page in one of your applicaton and that page has a sidebar and a main section. Ideally for the mobile screen, the sidebar should become a hamburger menu. 

If we use pixels in the media queries then that means that it will show a stretched out elements with huge typography but if we use rem then it will take the ueser to the mobile view in case the base font size is increased. 