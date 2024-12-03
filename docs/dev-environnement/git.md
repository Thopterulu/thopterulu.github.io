# git

Because life can get easier or extremly painfull depending on if you added "-d" to your last push.

## basics

To install latest version of git you need to add the PPA `git-core` and then install git:

sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git

If you are a developer, these configurations are interesting:

git config --global color.ui true
git config --global [user.name](http://user.name/) "YOUR NAME"
git config --global user.email "[YOUR@EMAIL.com](mailto:YOUR@EMAIL.com)"
git config --global push.default simple
git config --global credential.helper 'cache --timeout=3600' # desired cache timeout in seconds
git config --global core.editor vim # pick your favorite editor

https://github.com/dictcp/awesome-git

## hooks

*les hooks proc quand on commit ou push.*[awesome git hooks](https://github.com/aitemr/awesome-git-hooks)[another awesome git hooks](https://github.com/CompSciLauren/awesome-git-hooks)

## git addons (CLI)

https://github.com/dictcp/awesome-git