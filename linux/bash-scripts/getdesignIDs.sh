rm -rf resCurl.txt
rm -rf resIDs.txt

for i in {000..001}; 
do 
  curl 'https://my.satu.kz/admin/design_template?search_term=d4_'$i --compressed > resCurl.txt
  grep -iRw "обновить ресурсы" resCurl.txt | tr -dc '0-9' >> resIDs.txt
  echo " : d4_$i " >> resIDs.txt
done