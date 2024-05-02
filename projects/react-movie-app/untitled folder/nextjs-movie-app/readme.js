
/*

will use react query, that is mostly used on the client
everything will be client fetched
when you fetch something, it will keep it in the cache

The tech stack:
- NextJS 
- Typescript
- React-Query
- Tailwind CSS
- The movie DB


////Setup next.js
TMDB API Key 066a118abfcdd05eafb554ac211f2cd9
https://developer.themoviedb.org/reference/movie-popular-list

create a next.js project with typescript
# npx create-next-app@latest --typescript


copy the setup files from the instructor's folder
create .env.local file to put the api key


add the image server to next.config.js

launch the app
# npm run dev


////setup tailwind 
go to tailwindcss website, install tailwind css with next.js
https://tailwindcss.com/docs/guides/nextjs

# npm install -D tailwindcss postcss autoprefixer
# npx tailwindcss init -p                           //initialize tailwind

in tailwind.config.js 
to make sure tailwind finds the files were we will use the tailwind classes


//font
get the "raleway" google font 400 and 700

create in the pages folder, 
and paste the font links there

go to next.js page > font optimization
that allows to use all google fonts with performance and privacy in mind

add code to pages/_document.tsx

will go back to the tailwind config file and create a config for the raleway font
to customize our theme

create folder styles, create and code globals.css

code pages index.tsx

stopped at 21:45


*/