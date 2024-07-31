# Steps to make your own portfolio
These are the steps i followed.    

**Date** = Monday, July 29, 2024    

- STEP 1: create an index.html file    

- STEP 2: add basic HTML code:    
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

- STEP 3: create a file called style.css and add the following code:
```
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-sherif;
    box-sizing: border-box;
}
```

- STEP 4: connect this file of style.css with our index.html by adding the code in the <head> and </head> area:
```
<link rel="stylesheet" href="style.css">
```

- STEP 5: change your title in index.html to whatever you prefer

- STEP 6: add css for <body>:
```
body{
    background: #080808; /* add a dark color as the background */
    color: #fff; /* add text color as white */
}
```
and run this in your browser. you should see a black screen. 

- STEP 7: add your background image for the front that will popup when you open the website. do this by creating a <div> in index.html called "header", and use css to beautify it    
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

