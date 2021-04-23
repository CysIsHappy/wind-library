#!/usr/bin/env sh
set -e
echo "Enter major version: "
read VERSION
read -p "Major $VERSION - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Major $VERSION ..."

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "major $VERSION"
  git push origin master

  # publish
  sudo npm publish
fi