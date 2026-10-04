# Provenance

Runtime source (`src/**`), `LICENSE`, and `UPSTREAM_README.md` originate from the published MIT-licensed npm package `@schovest/pi-goal@0.2.0` (npm gitHead `72dbe1286d6cc2757081e5b1f9b5c0dd5188d0da`).

The only intended semantic package-metadata compatibility change is the same change as upstream PR #1 (`d426eecc0459559a31124f3f388a57a1b24331e1`): remove `typebox` from runtime `dependencies`, retain `typebox: "*"` in `peerDependencies`, and include `typebox` in `devDependencies` for development/typechecking.

Fork-only metadata additionally renames the package to `@maemreyo/pi-goal`, uses version `0.2.0-zamery.1`, and points repository metadata at this standalone repository. Runtime source is not modified.
