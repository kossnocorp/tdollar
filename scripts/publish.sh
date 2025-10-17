#!/usr/bin/env bash

set -eo pipefail

./scripts/build.sh
echo ""

echo -e "⚡️ Publishing package\n"

root_dir="$(dirname "$0")/.."
cd "$root_dir"

cd ./dist/

if [[ "$1" == "next" ]]; then
  echo "🌀 Publishing as prerelease"
  pnpm publish --access public --no-git-checks --tag next
else
  echo "🌀 Publishing as latest"
  pnpm publish --access public --no-git-checks
fi

echo -e "\n💚 The package is ready!"