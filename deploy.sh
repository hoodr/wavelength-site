#! /bin/bash

echo "Running build and deploy"

# git checkout -b build-and-deploy

yarn build
touch out/.nojekyll
cp CNAME out/

remote_pages_branch=`git ls-remote --heads origin refs/heads/gh-pages`

# if gh-pages branch doesn't exist remotely yet
if [[ -z $remote_pages_branch ]]; then
  echo "Remote gh-pages branch does not exist. Pushing new branch"
  git subtree split --prefix out -b gh-pages
  git push origin gh-pages
else
  # if gh-pages branch does exist remotely
  git push origin `git subtree split --prefix out main`:gh-pages --force
fi

git branch -D gh-pages

echo "Deploy completed"

exit 0
