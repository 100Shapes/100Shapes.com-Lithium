#!/bin/sh
echo "Injecting Enviroment Variables"
ep /etc/nginx/sites-enabled/nginx.conf
ep /etc/my_init.d/pull-content.sh

cd /home/app/
echo "Pulling content from branch: ${BRANCH:-master}@${GIT_URL}"
git pull

echo "Running npm install"
cd /home/app/
npm install

echo "Running webpack"
webpack -p

echo "Fixing permissions"
chown -R app /home/app/

echo "Done"
