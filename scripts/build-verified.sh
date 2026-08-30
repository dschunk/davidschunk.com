#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

generated_config="${SITES_PROJECT_ROOT}/dist/server/wrangler.json"
if [[ ! -f "${generated_config}" ]]; then
  echo "vinext build completed but ${generated_config} was not generated." >&2
  exit 70
fi

# Cloudflare Builds currently runs `npx wrangler deploy` after `npm run build`.
# Wrangler supports a generated-config redirect file specifically for framework
# builds. Point it at vinext's compiled Worker config so production deploys the
# actual application bundle instead of the source/template Worker config.
mkdir -p "${SITES_PROJECT_ROOT}/.wrangler/deploy"
cat > "${SITES_PROJECT_ROOT}/.wrangler/deploy/config.json" <<'JSON'
{"configPath":"../../dist/server/wrangler.json"}
JSON

echo "Prepared Wrangler deployment redirect -> dist/server/wrangler.json"
