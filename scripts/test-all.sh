#!/usr/bin/env bash
# Runs every scripts/test-*.js from the repo root; exits non-zero if any fails.
set -u
cd "$(dirname "$0")/.."

failed=()
for test in scripts/test-*.js; do
  echo "== ${test}"
  if ! node "${test}"; then
    failed+=("${test}")
  fi
done

if [ ${#failed[@]} -gt 0 ]; then
  echo "FAILED: ${failed[*]}"
  exit 1
fi
echo "all tests passed"
