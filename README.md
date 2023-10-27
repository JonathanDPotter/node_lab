# Node Lab

This is my version of the Truecoders Node Lab exercise.
This exercise was completed using javascript, node.js and isomorphic-fetch.

## funcionality

The server file will write an array to a json file called chirps.json, the reddit file will fetch an array of reddit posts and write a json file of their titles, urls, and author names to a file called popular-articles.json, and the popular-downloader file will get those same articles and download any one that is a .png .gif or .jpg file and save it in the downloads folder.

Scripts have been included in the package.json file to make it simpler to run each file and they are named "server", "reddit" and "popular".

After running yarn (or npm install) to install isomorphic fetch, simply run each script to test the functionality of each file.
