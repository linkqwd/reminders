#!/bin/bash 
action=$1 # Если передан аргумент 'd5', то index.styl будут созданы для всех директорий, кроме rupture, _themes, icon-fonts

path=`pwd` # Получить текущий путь запуска скрипта

declare -a dirs # Создание массива

if [[ $action == 'd5' ]]
	then
		echo "Файл index.styl будет создан для директорий начинающихся с cs-* и b-*"
		dirs=`find . -type d -name 'cs-*' -o -type d -name 'b-*'` # Внесение в массив директорий начинающихся с cs- или b-

	else 
		echo "Файл index.styl будет создан для всех найденных директорий, кроме rupture, _themes, icon-fonts"
		dirs=`find . -type d -not -path './rupture' -not -path './_themes' -not -path './icon-fonts' -not -path '.'`

fi

for i in $dirs; 
	do 
		cd $path/$i;
		if [[ $action == 'd5' ]]
			then
				find . -type f -name 'cs-*' -o -type f -name 'b-*' | awk '{print length($0)"\t"$0}' |sort -n |cut --complement -f1 | sed -r 's/.{,2}//' | sed 's/.styl$/"/g' | sed 's/^/@import "/' > index.styl
			else 
				find . -type f -name '*' -not -name "index*" | awk '{print length($0)"\t"$0}' |sort -n |cut --complement -f1 | sed -r 's/.{,2}//' | sed 's/.styl$/"/g' | sed 's/^/@import "/' > index.styl
		fi
	done

echo "Готово, скрипт будет удален..."
rm -f $path/in.sh