ng build --prod --baseHref https://mitsuoysharag.github.io/beinplace/
cd dist/beinplace

git init
git add -A
git commit -m 'deploy page'
git push -f https://github.com/mitsuoysharag/beinplace.git master:gh-pages