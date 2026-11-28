#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT/frontend"
if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo 'Ошибка: установите Node.js 22 LTS (например, через nvm или Homebrew).' >&2
  exit 1
fi
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if (( NODE_MAJOR < 22 )); then
  echo "Рекомендуется Node.js 22+, найден $(node -v)" >&2
fi
if [[ ! -e .env.local ]]; then
  printf 'HOME_API_MODE=demo\nPSYCHO_API_MODE=demo\nPSYCHO_API_BASE_URL=http://localhost:8080\nPRACTICES_API_BASE_URL=http://localhost:8080\n' > .env.local
fi
if [[ ! -d node_modules/next || ! -d node_modules/react ]]; then
  echo 'Устанавливаю зависимости frontend...'
  npm install
fi
if command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:3000 -sTCP:LISTEN | grep -q LISTEN; then
  echo 'Порт 3000 занят. Остановите старый npm run dev (Ctrl+C) или проверьте: lsof -nP -iTCP:3000 -sTCP:LISTEN' >&2
  exit 2
fi
echo 'Адрес: http://localhost:3000'
echo 'Для остановки нажмите Ctrl+C.'
exec npm run dev -- -H 0.0.0.0 -p 3000
