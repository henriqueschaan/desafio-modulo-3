@echo off
(for %%i in (*.html *.css *.js) do (
    echo. >> conteudo.txt
    echo ---- Início do arquivo: %%i ---- >> conteudo.txt
    type "%%i" >> conteudo.txt
    echo ---- Fim do arquivo: %%i ---- >> conteudo.txt
))
