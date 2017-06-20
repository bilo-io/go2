if (!(Test-Path ./artifact)) {
    New-Item -Type Directory ./artifact
}
Move-Item ./dist ./artifact
Copy-Item ./server.js ./artifact/
Copy-Item ./package.json ./artifact/
Copy-Item ./Web.config ./artifact/
cd ./artifact
npm install --production
