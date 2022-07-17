# Shape Properties Calculator

## _I_: Prepare For The Project

Hello! in this project I make a web app that calculates different 2D and 3D shapes properties like area and Circumference and the volume and density and mass of the shape

---

The Files/Folders structure I use is like this

- app
  - publick
    - dist (this folder is generated when you run the `compile:sass` script for the first time)
      - style.css (Compiled `main.scss` File)
      - style.css.map
    - index.html
  - src
    - js
      - app.js
    - scss
      - main.scss
- images
- .gitignore
- package.json

---

First of all, I install npm and initialize it with:

```bash
npm init -y
```

After that, I install sass and dart-sass (dart-sass is optional) by writing in the terminal

```bash
npm i sass dart-sass
```

Then I add a script in the **package.json** file to compile SCSS to CSS automatically which is like this:

```json
"scripts": {
"compile:sass":"sassapp/src/scss/main.scssapp/public/dist/styles.css -w"
},
```

To run the script by write in the terminal:

```bash
npm run compile:sass
```

## _II_: 2D Shapes

<p align="center">
<img  src="https://i.pinimg.com/originals/d2/27/03/d22703960edc5838dcef57a20372e89e.png" ></p>

I use the 4 most used shapes and they are: Square, Circle, Triangle, Rectangle and the properties I calculate are Area and Circumference.

<table align="center">
  <thead align="center">
    <tr align="center">
      <th>Shape</th>
      <th>Area</th>
      <th>Circumference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Square</td>
      <td>Sides Lenght² </td>
      <td> Sides Lenght x 4</td>
    </tr>
    <tr>
      <td>Circle</td>
      <td>π x Diamiter²</td>
      <td>π x Diamiter</td>
    </tr>
    <tr>
      <td>Triangle</td>
      <td>(Base Lenght x Height Lenght) / 2</td>
      <td>Base Lenght x 3</td>
    </tr>
    <tr>
      <td>Rectangle</td>
      <td>Width Lenght x Height Lenght</td>
      <td>(Width Lenght + Height Lenght) x 2</td>
    </tr>
  </tbody>
</table>

## _III_: 3D Shapes
