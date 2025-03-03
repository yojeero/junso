<img src="preview/git.png">

### [Junso](https://junso.vercel.app/) - Tailwind v4 template

- Tailwind CSS v4
- Simple use Tailwind via CLI
- HTML5, CSS3
- Inline SVG icons 
- Local Google Fonts
- Yandex Maps
- Fully responsive layout

```
Tailwind CSS v4 

Don't need tailwind.config anymore.
Just use > @import "tailwindcss"; < in your .css
```

Use Tailwind via CLI

- in project folder run in terminal > npm install tailwindcss @tailwindcss/cli  
- create input.css for your CSS styles
- insert > @import "tailwindcss"; < in input.css  
- run in terminal > npx @tailwindcss/cli -i ./css/input.css -o ./css/style.css --watch 
- run again > in terminal > npx @tailwindcss/cli -i ./css/input.css -o ./css/style.css --watch < for build your production CSS
- remove input.css for production, because all styles were added in the previous step
- Enjoy!