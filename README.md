
### Hexlet tests and linter status:

[![Actions Status](https://github.com/aswang/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/aswang/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/118e2cdbcb9dd6bea2d8/maintainability)](https://codeclimate.com/github/aswang/frontend-project-44/maintainability)

# Игры разума

## Описание проекта
«Игры разума» — это набор из пяти консольных мини-игр, которые проверяют математические способности и логическое мышление игрока. Игры основаны на простых математических задачах, которые необходимо решить за минимальное время.

## Список игр

1. **Проверка на чётность**  
   Пользователю показывается случайное число. Нужно ответить `yes`, если число чётное, или `no`, если нечётное.

2. **Калькулятор**  
   Пользователь получает случайное математическое выражение (например, `35 + 16`). Необходимо вычислить и ввести правильный ответ.

3. **Наибольший общий делитель (НОД)**  
   Игроку даётся два случайных числа (например, `25 50`). Он должен определить и ввести их наибольший общий делитель.

4. **Арифметическая прогрессия**  
   Показывается ряд чисел, образующий арифметическую прогрессию, в котором одно число заменено двумя точками (`..`). Игрок должен определить это число.

5. **Простое ли число?**  
   Пользователь получает случайное число и должен ответить `yes`, если оно простое, или `no`, если нет.

## Минимальные системные требования
- Node.js 18+
- npm 9+
- Операционная система: Windows, macOS или Linux

## Установка и запуск

1. **Клонируйте репозиторий:**

```
git clone https://github.com/aswang/frontend-project-44.git
cd brain-games
```

2. **Установите зависимости:**

`npm install`

3. **Установите пакет глобально:**

`npm link`

4. **Запустите любую из игр с помощью make:**

```
make brain-games
make brain-even
make brain-calc
make brain-gcd
make brain-progression
make brain-prime
```

При запуске появится инструкция по игре. Следуйте указаниям на экране и наслаждайтесь процессом!

# Демонстрация
## Проверка на честность (brain-even)
[![asciicast](https://asciinema.org/a/BHHvdSjmHs1HiMaNEFbYc4j9P.svg)](https://asciinema.org/a/BHHvdSjmHs1HiMaNEFbYc4j9P)

## Калькулятор (brain-calc)
[![asciicast](https://asciinema.org/a/bN6ehMatMwmyJKTbg6n6nkNhN.svg)](https://asciinema.org/a/bN6ehMatMwmyJKTbg6n6nkNhN)

## Наибольший общий делитель (НОД) (brain-gcd)
[![asciicast](https://asciinema.org/a/RhSTUds6HVB0YjgPMxmrImPfL.svg)](https://asciinema.org/a/RhSTUds6HVB0YjgPMxmrImPfL)

## Арифметическая прогрессия (brain-progression)
[![asciicast](https://asciinema.org/a/pe7xaofpWVSZe5us4EZNtfW0q.svg)](https://asciinema.org/a/pe7xaofpWVSZe5us4EZNtfW0q)

## Простое ли число? (brain-prime)
[![asciicast](https://asciinema.org/a/16WMVUOE8wOsZ4xIn8enMM2Ie.svg)](https://asciinema.org/a/16WMVUOE8wOsZ4xIn8enMM2Ie)
