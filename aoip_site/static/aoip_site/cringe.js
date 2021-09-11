
    let topDialog = function (string) {
        var typed = new Typed('#dialog', {
            strings: ["", string],
            typeSpeed: 45,
            showCursor: false,
            smartBackspace: true
        });
    }

    setTimeout(function () {
        document.getElementById("bodyMain").style.display = 'block';
        topDialog('Выбери своё имя')
    }, 800); //пока прогрузится всё

    const bot = new XMLHttpRequest();

    let backAttempt = 0;
    let irisSteps = 0;
    let fakeAnswers = 0;

    let qstblock1 = document.getElementById("qst1");
    let qstblock2 = document.getElementById("qst2");
    let qstblock3 = document.getElementById("qst3");

    let bodyGradient = 0;
    let dialogSize = 26;

    let animateBg = function (t) {
        t++;
        if (t >= 250) {
            bodyGradient = 0;
            return 0;
        }
        bodyGradient++;
        document.body.style.background = `rgb(${bodyGradient}, ${bodyGradient}, ${bodyGradient})`;

        setTimeout(function () {
            animateBg(t++)
        }, 5);
    }

    let animateText = function (t) {
        t++;
        if (t >= 54) {
            dialogSize = 0;
            return 0;
        }
        dialogSize++;
        document.getElementById('dialog').style.fontSize = dialogSize + 'px';
        document.getElementById('dialog').style.color = 'black';


        setTimeout(function () {
            animateText(t++)
        }, 5);
    }


    let nameClick = function (name) {
        document.getElementById("namelist").className += 'animate__animated animate__fadeOut';

        setTimeout(function () {
            document.getElementById("namelist").style.display = 'none';
        }, 700);

        topDialog('Выбери соответствие');

        setTimeout(function () {
            document.getElementById("qstlist").style.display = 'block';
            document.getElementById("qstlist").className = 'animate__animated animate__fadeIn';
        }, 800);

        if (name == 'iris') {

            irisSteps++;

            irisQst1 = ['Мне часто снятся клавиатуры', 'Считаю что земля шарообразной формы'];
            irisQst2 = ['У меня есть сестра'];
            irisQst3 = ['Знаю японский язык', 'Я вчера пролил растворитель'];

            qstblock1.innerText = irisQst1[Math.floor(Math.random() * irisQst1.length)];
            qstblock2.innerText = irisQst2[Math.floor(Math.random() * irisQst2.length)];
            qstblock3.innerText = irisQst3[Math.floor(Math.random() * irisQst3.length)];

        } else {
            fakeQst1 = ['Мне часто снятся клавиатуры', 'Я бы хотел быть преподователем',
                'Мой отец огуречный магнат'
            ];
            fakeQst2 = ['У меня зависимость от воды', 'Я часто слышу странные голоса',
                'Считаю что земля шарообразной формы'
            ];
            fakeQst3 = ['Знаю японский язык', 'Я вчера пролил растворитель', 'Я бы купил 3 метровый кактус'];

            //Ну да, у меня очень плохо с фантазией

            qstblock1.innerText = fakeQst1[Math.floor(Math.random() * fakeQst1.length)];
            qstblock2.innerText = fakeQst2[Math.floor(Math.random() * fakeQst2.length)];
            qstblock3.innerText = fakeQst3[Math.floor(Math.random() * fakeQst3.length)];
        }
    }

    let backToNames = function () {
        backAttempt++;
        console.log(backAttempt)
        document.getElementById("qstlist").className = 'animate__animated animate__fadeOut';

        setTimeout(function () {
            document.getElementById("qstlist").style.display = 'none';
        }, 700);

        topDialog('Выбери своё имя')

        setTimeout(function () {
            document.getElementById("namelist").style.display = 'block';
            document.getElementById("namelist").className = 'animate__animated animate__fadeIn';
            let atmptInfo = document.getElementById("attempts")
            atmptInfo.style.display = 'flex';
            console.log(backAttempt);

            switch (backAttempt) {
                case 2:
                    atmptInfo.innerText = 'Количество нажатий на кнопку "Назад" ограничено, держу в курсе';
                    break;
                case 3:
                    atmptInfo.innerText = 'Ещё раз и я закрою доступ';
                    break;
                case 4:
                    bot.open('GET', '/lstatmpt')
                    bot.send();
                    break;
            }
        }, 800);
    }

    let irisRecognize = function (answ) {

        document.getElementById("qstlist").className += 'animate__animated animate__fadeOut';

        setTimeout(function () {
            document.getElementById("qstlist").style.display = 'none';
        }, 700);


        setTimeout(function () {
            if (answ == 'У меня есть сестра') {
                irisSteps++;
                irisQst1 = ['Я ненавижу скотч', 'Люблю реп жанр'];
                irisQst2 = ['Я работал(а) в мастерской', 'Моя отвёртка сломалась вчера'];
                irisQst3 = ['Много аватарок с волками.'];

            } else if (answ == 'Много аватарок с волками.') {
                console.log("asd")

                document.getElementById("qstlist").className += 'animate__animated animate__fadeOut';

                setTimeout(function () {
                    document.getElementById("qstlist").style.display = 'none';
                }, 0);

                setTimeout(function () {
                    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
                    animateBg(10);

                    audio.play();

                    document.getElementById("ftimg").src = happcat;
                    document.getElementById("catHelp2").innerText =
                        'Поздравляю, ты прошла проверку!';
                    document.getElementById("exampleModalLabel").innerText = 'Ура';
                }, 505);

                setTimeout(function () {
                    animateText(10);
                    topDialog('Неужели');
                }, 1205);

                setTimeout(function () {
                    topDialog('Это ты?');
                }, 2805);

                setTimeout(function () {
                    topDialog('мне...');
                }, 3805);

                setTimeout(function () {
                    topDialog('очень неловко...');
                }, 5105);

                setTimeout(function () {
                    topDialog('но мне есть что рассказать');
                }, 6705);

                setTimeout(function () {
                    topDialog('есть что спросить');
                }, 9300);

                setTimeout(function () {
                    topDialog('в общем..');
                }, 11000);

                setTimeout(function () {
                    topDialog('вот мой телеграм');
                }, 12253);

                setTimeout(function () {
                    document.getElementById("tgLink").style.display = 'block';
                }, 13051);


            } else {
                irisQst1 = ['Мне часто снятся клавиатуры', 'Считаю что земля шарообразной формы'];
                irisQst2 = ['У меня есть мотоцикл'];
                irisQst3 = ['Знаю японский язык', 'Я вчера пролил растворитель'];
            }
            qstblock1.innerText = irisQst1[Math.floor(Math.random() * irisQst1.length)];
            qstblock2.innerText = irisQst2[Math.floor(Math.random() * irisQst2.length)];
            qstblock3.innerText = irisQst3[Math.floor(Math.random() * irisQst3.length)];

            document.getElementById("qstlist").style.display = 'block';
            document.getElementById("qstlist").className += 'animate__animated animate__fadeIn';

            fakeAnswers++;

            switch (fakeAnswers) {
                case 5:
                    topDialog('Бред какой-то да?');
                    break;
                case 7:
                    topDialog('Да ну ладно тебе');
                    break;
                case 8:
                    topDialog('Прекращай');
                    break;
                case 10:
                    topDialog('БАН');
                    break;
            }
        }, 850);

        let sendTg = function () {
            bot.open('GET',
                'https://api.telegram.org/bot1307104947:AAG67DrzkJBnI2yWyuc-gzpyrO8TU_kWbs4/sendMessage?chat_id=321588123&text=wow'
            ) //придурок, не иначе
            bot.send();
        }
    }