#!/bin/sh
action=$1

dir=`find ~/work/company_designs/ -name $1 -type d`
cd $dir

pwd
echo "zipping: $1"

grunt zip

echo "
--------
ZIPPING IS DONE !
--------
"

cd ~/work/company_designs/

echo "$dir" | xclip -sel clip

git add $dir
git status

xdg-open https://my.prom.ua/admin/design_template?search_term=$action
xdg-open https://my.tiu.ru/admin/design_template?search_term=$action
xdg-open https://my.deal.by/admin/design_template?search_term=$action
xdg-open https://my.satu.kz/admin/design_template?search_term=$action

echo "done"