Как развернуть проект?

Шаг 1.
Для развёртывания приложения используем github pages и пакетный менеджер npm.
Для этого понадобится создать репозиторий git и залить туда проект.
Чтобы залить проект в git откроем терминал, и перейдём в директорию в которой находится файл проекта package.json,
используя команду cd, например, cd C:\Users\Autoluminescent\Desktop\тз-инлайн\tz-inline
Затем используем следующие команды (для этого должен быть установлен git):\
    git init\
    git add .\
    git commit -m"first commit"\
    git branch -M master\
Затем введем следующую команду, в которой мы должны заменить username на имя пользователя вашей учетной записи
на GitHub и Repository-name на имя созданного вами репозитория:\
    git remote add origin https://github.com/username/Repository-name.git\
Затем введём следующие команды, которые отправят проект в указанный выше репозиторий:\
    git push -u origin master\
Теперь наш проект есть в репозитории github.

Шаг 2.
Добавим пакеты зависимостей GitHub Pages
Пакет gh-pages позволяет нам публиковать файл сборки нашего приложения в ветке gh-pages на GitHub,
где мы собираемся разместить наше приложение. Установим зависимости gh-pages:\
    npm install gh-pages --save-dev\

Шаг 3.
Добавим параметры в файл package.json
В самое начало добавим следующий параметр:

{\
    "homepage": "https://username.github.io/Repository-name"\
    ...

Затем мы добавим свойства “deploy” и “predeploy “ в поле script со следующими значениями:

    "scripts":{
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build" 
    }   

Шаг 4.
Развертываем приложение, используя следующую команду в терминале:\
    npm run deploy\
Эта команда опубликует ваше приложение в ветке с именем gh-pages, и его можно открыть по ссылке,
указанной в свойстве homepage, записанном в файле package.json.

