# Ryadom_spbu
# 1) Test Environment
В этом репозитории содержится конфигурация для развертывания изолированного test-окружения (Frontend, Backend, PostegreSQL, Nginx).

## Архитектура
- **Frontend**: Next.js (слушает порт 3000 внутри Docker-сети).
- **Backend**: Go (слушает порт 8000 внутри Docker-сети).
- **Database**: PostgreSQL 16 (порт 5432, доступен только внутри сети).
- **Reverse Proxy**: Nginx (порты 80 и 443 наружу).
- **Сеть**: Все контейнеры общаются по внутренней bridge-сети `internal`. Прямой доступ к БД и Backend извне заблокирован.

## Настройка окружения

1. Склонируйте репозиторий и перейдите в папку:
```
git clone https://github.com/mshipilov5/Ryadom_spbu.git
cd Ryadom_spbu
```
2. Настройка переменных окружения:
```
cp .env.example .env
nano .env
```
3. Подготовка SSL-сертификатов:
```
mkdir -p certs
sudo cp /etc/letsencrypt/live/test.spbu-ryadom.ru/fullchain.pem certs/
sudo cp /etc/letsencrypt/live/test.spbu-ryadom.ru/privkey.pem certs/
sudo chown $USER:$USER certs/fullchain.pem certs/privkey.pem
```

## Запуск и остановка

1. Запуск все одной документированной командой:
```
docker compose up -d --build
```
2. Остановить, сохраняя данные БД:
```
docker compose down
```
3. Безопасный перезапуск:
```
docker compose up -d --build --force-recreate
```
4. Полная отчистка вместе с БД и volumes:
```
docker compose down -v
```
