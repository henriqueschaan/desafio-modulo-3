@echo off
(for %%i in (*.html *.css *.js) do (
    echo. >> conteudo.txt
    echo ---- Arquivo: %%i ---- >> conteudo.txt
    type "%%i" >> conteudo.txt
))
