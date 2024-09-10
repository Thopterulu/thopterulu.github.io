# Quickly get your server up and running

The shortest version of a thing that you probably should spend time learning in school, but ain't nobody got time for that.

## boot up a beautiful linux

I like apt based stuff, but any linux is fine. Also Alpine is really great, [maybe check it out here](https://alpinelinux.org/)

Also I assume, we are using systemd, because it's wildly used everywhere and because in one of my last jobs I lost like a lot of time to setup systemd units :D 



## Install apache because we are going to use

- `sudo apt install apache2`
- try to boot apache2 `systemctl start apache2`
- make sure apache2 starts everytime you boot /reboot `systemctl enable apache2`


## Setting up sonic fast

- `cp /home/me/build_of_my_awesome_site/* /var/www/html/`
- find a config for setup https online at this beautiful link : [https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/) (Choose Apache)
- copy paste in a new file in `/etc/apache2/sites-available/my_new_config`
- try to enable the config `a2ensite my_new_config` (maybe as sudouser who knows)
- see that you cannot juste copy paste shit online and that you require a certificate to enable https
- thats the hardest part and I'm very lazy, so we are going to use certbot [https://certbot.eff.org/](https://certbot.eff.org/)
- install it, (we skip the terrible time when you realize that you can install it with snap)
- `sudo certbot certonly --apache`
- link the freshly acquired cert files to the config file (both files).

## start your server

- `sudo a2ensite my_new_config`
- `systemctl start apache2`
- congratz

maybe I skipped like some little parts but you got the idea :)

