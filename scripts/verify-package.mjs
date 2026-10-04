import fs from "node:fs";
const pkg = JSON.parse(fs.readFileSync(new URL("../package.json", import.meta.url), "utf8"));
function fail(message) { console.error(message); process.exit(1); }
if (pkg.name !== "@maemreyo/pi-goal") fail("unexpected package name");
if (pkg.version !== "0.2.0-zamery.1") fail("unexpected package version");
if (pkg.dependencies?.typebox !== undefined) fail("typebox must not be a runtime dependency");
if (pkg.peerDependencies?.typebox !== "*") fail("typebox peer must use wildcard range");
if (pkg.devDependencies?.typebox !== "^1.3.0") fail("typebox dev dependency drifted");
if (pkg.dependencies?.["@narumitw/pi-tui-kit"] !== "^0.56.0") fail("runtime TUI dependency drifted");
if (!pkg.pi?.extensions?.includes("./src/index.ts")) fail("Pi extension entry is missing");
console.log("PACKAGE_METADATA_OK");
