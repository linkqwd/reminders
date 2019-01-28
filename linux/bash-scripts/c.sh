#!/bin/sh
action=$1

dir=`find ~/work/company_designs/ -name $1 -type d`
cd $dir
nautilus .

pwd

echo "
---------------------------------------
design_path = $dir
---------------------------------------
"
echo "design_path = $dir" | xclip

grunt build
grunt watch