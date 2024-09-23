# Lerna-Npm-In-Action

---

## Monorepo

SWC + Typescript + Npm Workspace

---

Architecture
```
 packages
 ├─ b
 │  ├─ src
 │  │  ├─ c
 │  │  │  ├─ c.ts
 │  │  │  └─ c.spec.ts
 │  │  ├─ index.ts
 │  │  └─ b.ts
 │  ├─ package.json
 │  ├─ tsconfig.package.json
 │  └─ README.md
 └─ a
    ├─ src
    │  └─ a.ts
    ├─ package.json
    ├─ tsconfig.package.json
    └─ README.md

```

a -> b 의존

---

Shell
```shell
npm run start
```

Output
```
module a
module b/ TSID library: 0HB0JYP2QRM2C
module b/ c function
module b/ c2 function
```

