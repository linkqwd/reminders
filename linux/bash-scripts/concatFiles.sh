path=`pwd` # Получить текущий путь запуска скрипта

declare -a dirs # Создание массива

dirs=`ls -d */` # Внесение в массив директорий

for i in $dirs; # Перебор массива с дирикториями
	do # В каждой итерации сделать:
		cd $path/$i/css; # Перейти в директорию, и вложенную в неё папку css
		sed -i '/sprites.css"\|font-awesome.css"/d' design.css # Удаляем строки из design.css по заданым ключам {sprites.css"} и {font-awesome.css"}
		cat sprites.css >> result.css;		cat font-awesome.css >> result.css;		cat design.css >> result.css; # Записываем три файла в result.css
		rm -rf design.css font-awesome.css sprites.css elements.css; # Удалить ненужные файлы
		mv result.css design.css; # Переименовать result.css в design.css

		cd $path # Перейти в начальну папку где запускался скрипт
		zip=`echo $i | sed s'/.$//' | sed 's/$/.zip/'` # Переменная в которой хранится название директории + конкатинация с .zip (для создания архива)

		zip -r $zip $i # Создание zip архива $zip - переменная с названием {filename.zip}, $i - название директории {filename/} (в данном случае подставляется как путь относительно $path )
		rm -rf $i # Удалить директорию, после того как она будет заархивирована
	done