#!/bin/sh
echo "Injecting Enviroment Variables"
ep /pd_build/pull-content.sh

echo "Doing fresh clone"
rm -r /home/app
echo "Cloning content from branch: ${BRANCH:-master}@${GIT_URL}"
git clone --depth 1 -b ${BRANCH:-master} ${GIT_URL} /home/app

echo "Running npm install"
cd /home/app/
npm install

echo "Fixing permissions"
chown -R app /home/app/

echo "Done"
