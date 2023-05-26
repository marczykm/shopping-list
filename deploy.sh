ng build
scp -P 2222 -r -i ~/.ssh/id_rsa dist/shopping-list/* marcin@192.168.1.52:/volume1/www/shopping-list
