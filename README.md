# **Five Peaks Website Redesign**

**STEP 1**
install nodejs to run website (https://nodejs.org/en/download/)

**STEP 2**
using terminal open the project folder, using 

```cd C://where-you-extracted-the-zip-file```

**STEP 3**
The way I setup the project with github means you have to go to the directory with node package manager (package.json)

type
```cd portfolio-react```

**STEP 4**

type 
```npm i```

(this installs dependancies)

type
```npm start```
(this starts the local/network development sever which allows realtime updates when things are changed)

If the above command pops up an error, ensure you have installed nodejs (step one)

**Working?**
assuming everything went swimmingly your browser should automatically open up "localhost:3000" and The terminal should display:
```
You can now view five-peaks-website in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.198:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
If you want to see the website on a mobile device or other device on the network open the second link (this does not allow realtime updates to the page if jsx or css is changed hence why both network and local are avalabile options):

```On Your Network:  http://192.168.0.198:3000```

When The website is ready to be deployed to a sever reactjs will fix all the messy css and optimise everything, converts all jsx into js. 
However I have decided not to deploy it to a sever as Five Peaks wants to keep their existing webpage, as the existing site is easier to manipulate & manage longterm.
