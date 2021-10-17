@echo off
echo .
echo .
echo . Atualizando a base
php c:\xampp2\htdocs\hdev\app\playserie\start.php?id=1
echo .
echo .
echo . Arquivo gerado, atualizando o site.
echo .
copy c:\xampp2\htdocs\hdev\app\playserie\lie-to-me\data.js . /y
echo .
git add .
echo . incluindo base...
git commit -m"nova base atualizada."
echo . salvando base ...
git push
echo . publicando base ...
echo .
echo .
echo .
pause