# pi-goal

Standalone Pi 1.0 compatibility fork of `@schovest/pi-goal`.

## Why this fork exists

Upstream `@schovest/pi-goal@0.2.0` declares `typebox` both as a Pi host-provided peer and as a runtime dependency. Pi 1.0 warns that host-provided extension packages must be wildcard peer dependencies because bundled copies can create duplicate runtime modules. This fork applies the metadata-only fix proposed by upstream PR #1: keep `typebox: "*"` as a peer, move the development copy to `devDependencies`, and leave runtime source unchanged.

## Provenance

- Upstream: `schovest/pi-package-mono`, package `@schovest/pi-goal`
- Upstream package version: `0.2.0`
- npm `gitHead`: `72dbe1286d6cc2757081e5b1f9b5c0dd5188d0da`
- Published npm integrity: `sha512-/EH9LI3Lcls5HMSkxRi3LndoQ0dxHQxQxdG/WS5/RHNh4NOIlRZHk8k1+yNna/lHId+DitvGKHFItgK2dMFChA==`
- Upstream fix reference: PR #1, head `d426eecc0459559a31124f3f388a57a1b24331e1`
- License: MIT; see `LICENSE`.
- The original upstream README is retained as `UPSTREAM_README.md`.

All files under `src/` are intended to remain byte-identical to upstream `0.2.0`. This fork does not add Goal behavior.

## What it provides

`/goal` manages one persistent objective in the main Pi session. While a goal is active it exposes the terminal tools `goal_complete`, `goal_blocked`, and `goal_wait`, with pause/resume, token-budget and continuation safeguards provided by upstream.

## Install

Pin the exact Git commit rather than a floating branch:

```sh
pi install git:github.com/maemreyo/pi-goal@<commit-sha> --approve
```

Remove the upstream npm package first if it is currently installed, so only one Goal extension is loaded.

## Upstream migration

This fork should be temporary. When upstream publishes a release newer than `0.2.0` that no longer places `typebox` in `dependencies`, smoke it on Pi 1.0, switch the Pi pin back to upstream, then archive this fork.
