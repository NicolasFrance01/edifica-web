# deploy.ps1

# abort on errors
$ErrorActionPreference = "Stop"

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# pushing to https://github.com/NicolasFrance01/edifica-web.git
# pushing to gh-pages branch
git push -f https://github.com/NicolasFrance01/edifica-web.git master:gh-pages

cd ..
