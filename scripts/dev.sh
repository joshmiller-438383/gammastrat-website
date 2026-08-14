#!/usr/bin/env bash
set -e

# macOS default soft limit (256) is too low for Next.js file watchers.
# EMFILE on route compile (e.g. /plans → /api/checkout/public) is a symptom of this.
ulimit -n 10240 2>/dev/null || true

exec next dev "$@"
