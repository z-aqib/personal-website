# Steps to make your own portfolio
These are the steps i followed.    

## **Date** = Monday, July 29, 2024    

### STEP 1
 create an index.html file    

### STEP 2
 add basic HTML code:    
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    <title> Document1 </title>
</head>
<body>

</body>
</html>
```

### STEP 3
 create a file called style.css and add the following code:
```
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-sherif;
    box-sizing: border-box;
}
```

### STEP 4
 connect this file of style.css with our index.html by adding the code in the <head> and </head> area:
```
<link rel="stylesheet" href="style.css">
```

### STEP 5
 change your title in index.html to whatever you prefer

### STEP 6
 add css for <body>:
```
body{
    background: #080808; /* add a dark color as the background */
    color: #fff; /* add text color as white */
}
```
and run this in your browser. you should see a black screen. 

### STEP 7
 add your background image for the front that will popup when you open the website. do this by creating a <div> in index.html called "header", and use css to beautify it    
code for index.html:
```
#header (tab)
```
or:
```
<div id="header>

</div>
```
code for style.css:
```
#header{
    /* use # infront of header as it is an ID */
    width: 100%;
    height:100vh;
    background-image:url(images/background.png); /* save your image into an images folder with the name of file as background.png */
    background-size: cover;
    background-position:center;
}
```
now re-load your website in your browser. 

## **Date** = Wednesday, July 31, 2024

### STEP 8
 add a navigation bar with our logo   
so for this, add a container in your HTML file inside the <header> id tag:
```
.container + TAB
```
or
```
<div class="container">

</div>
```
then add a <nav></nav> inside your <container> hashtag, and then add your logo image URL
```
<nav>
    <img src="images/logo.png" class="logo>
</nav>
```
a <nav> tag defines a block of navigation links

### STEP 9
 add navigation buttons
add it in your index.html, inside the <mav> hashtag
```
<ul>
    <li> <a href="#"> Home </a> </li>
    <li> <a href="#"> About </a> </li>
    <li> <a href="#"> Services </a> </li>
    <li> <a href="#"> Portfolio </a> </li>
    <li> <a href="#"> Contact </a> </li>
</ul>
```
this makes an unordered list (bullets, not numbers), where each element in the list is hyper-linked, since there is no link address we use #

### STEP 10
 add css to the .container
```
.container {
    /* add some padding to the text, so that it shifts to the right */
    padding: 10px 10%
}
```
now reload and check, as the logo img is inside .container, it also shifts some space to the right

### STEP 11
now add CSS for the <nav> tag
```
nav {
    display:flex;
    /* flex means that image and links are side-by-side */
    allign-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
} 
```
now reload your browser. you should see that the logo is on the left with padding and the navigation buttons are on the right, stacked on top of each other

### STEP 12
now make the logo smaller by adding its css
```
.logo{
    width: 140px;
}
```

### STEP 13
add CSS to the navigation buttons
```
nav ul li {
    display: inline-blocl;
    /* so now it is horizontally aligned */
    list-style: none;
    margin: 10px 20px;
    /* we add margin so that we have space between the things, 10px from top and bottom and 20px from left and right side */ 
}
```
now refresh in your browser, the navigation buttons are in one line with no bullet points

### STEP 14
now make the navigation buttons non-underlined and change the color
so same CSS name but add "a" for hyperlink reference
```
nav ul li a {
    color: #fff;
    /* makes the color of the text white */
    text-decoration:none;
    /* removes all text decorations such as underline */
    font-size: 10px;
}
```

## **Date** = Thursday, August 1, 2024

### STEP 15
now add a hover effect on these links using style.css
```
nav ul li a::after{
    content:"";
    width:100%;
    height:3px;
    background: #ff004f;
    position:absolute;
    /* as position here is absolute, make position in "nav ul li a" as relative */
    left:0;
    bottom:-6px;
}
```
change the code in nav ul li a <position> to relative
```
nav ul li a{
    position: relative;
}
```
now when you refresh the browser, you will see a red colored link below all the links

### STEP 16
so now we want to hide these red lines and ONLY display them when the cursor hovers on them
update your style.css code:
```
nav ul li a::after{
    width: 0; 
    /* so now the line is hidden */
}
```
so now add this code
```
nav ul li a:hover::after {
    width: 100%;
}
```
now add a transition declaration in ```nav ul li a::after```
```
nav ul li a::after{
    transition: 0.5s; 
    /* this puts the transition in 0.5 s which will happen whenever cursor hovers on it */
}
```
so now when you reload your browser, the red line comes underneath the button ONLY if you hover on it, and it comes slowly from left to right and then when you remove it goes back right to left.
play around with the transition speed to see the difference

### STEP 17
add text and title to your welcome screen
go to your HTML file and add a div after the <nav> tag, inside the <div id=header> tag. 
```
<div class="header-text">
    <p> Your designation </p>
    <h1> Main title, your name</h1>
</div>
```

## **Date** = Friday, August 2, 2024
### STEP 18
now add some css to your name/designation/title
```
.header-text{
    margin-top: 20%;
    /* add some space from the top */
    font-size: 30px;
}
```
now add some css to your h1 title specifically
```
.header-text h1{
    font-size: 60px; /* make it very large */
    margin-top: 20px;
}
```

## STEP 19
if your text is too long, add a line break,
```
text text <br> text text text
```

## STEP 20
add some color for half of the text or some specific words. do this by using the span tag around the words you want in a different color other than white
```
text <span> text in another color </span> text in white
```
and add the following css
```
.header-text h1 span {
    color: #ff004f; /* red */
}
```