#!/bin/bash 
#Version 0.9

# Оригинальный запрос: s3cmd get s3://ua-backup/export_09.06.2018_265654
# Пример: bash export.sh ua 265654 11.03.2018 13  ||||| (где 13 количество итераций -1, по которым будет скачен файл)
# Пример: bash export.sh ua 265654 d 3
clear
date &>> .log_get_Export_file.txt

region=$1
id=$2
date=$3
counter=$4

echo "
Добрый день!
Благодарим за обращение в службу поддержки пользователей портала.

Во вложении находится файл за $date с товарами и структурой групп, перед использованием файла рекомендую проверить его актуальность.

В случае возникновения дополнительных вопросов, будем рады Вам помочь!

-----------------------------------------------------------------------"

if [[ !(-d ~/Export_result/) ]]
	then
		mkdir ~/Export_result/
		echo " ! Создан каталог: ~/Export_result/ для бэкапа товаров ! "
fi

if [[ -e ~/Export_result/$region"_"$id/ ]]
	then
		echo "Для компании $region"_"$id уже есть скаченные файлы в ~/Export_result/$region"_"$id/"
	else
		echo "Файлы будут скачены в ~/Export_result/$region"_"$id/"
		mkdir ~/Export_result/$region"_"$id/
fi

if [[ $date == 'd' ]]
	then
		res_date=`date +%d%m%Y -d "yesterday"`
		day=${res_date:0:2}
		month=${res_date:2:2}
		year=${res_date:4:6}
	else 
		month=${date:3:2}
		day=${date:0:2}
		year=${date:6:4}
fi

##############################################################

function checkDayData () {
	local res=${day:0:1}

	if [[ $res == 0 ]]
		then
			echo true
		else 
			echo false
	fi
}

function get_export () {

	if [[ $(checkDayData) == false && $day -lt 10 ]]
		then
			day="0"$day
	fi

	result_date=$day"."$month"."$year
	file="export_"$result_date"_"$id
	s3cmd get s3://$region-backup/$file &>> .log_get_Export_file.txt

	if [[ $(checkDayData) == true ]]
		then
			day=${day:1}
	fi

	if [[ day -eq 1 ]]
		then
			let "day=31"
			let "month=month-1"
			month="0"$month
	fi

	let "day=day-1"

	

	if [[ !(-s ~/Export_result/$region"_"$id/$file".xlsx") ]] #Проверка, если файл пустой - выполняем
		then
			echo "За: $result_date - скачан пустой файл"
			rm -rf ~/Export_result/$region"_"$id/$file".xlsx"
		else
			echo "За: $result_date - файл скачан"
			mv $file $file".xlsx"
			mv $file".xlsx" ~/Export_result/$region"_"$id
	fi


}

if [[ $counter ]]    # Счетчик, определяет количество итераций скачивания
	then 
		while [[ !($counter = 0) ]]
			do
				let "counter=counter-1"
				get_export 
			done
	else 
		get_export
fi
