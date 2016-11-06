gtar -cvzf schedule-pwa-deploy.tgz build/
scp schedule-pwa-deploy.tgz $SCHEDULE_USER@$SCHEDULE_HOST:~/schedule/pwa
ssh $SCHEDULE_USER@$SCHEDULE_HOST "cd ~/schedule/pwa && tar xf schedule-pwa-deploy.tgz && exit"
