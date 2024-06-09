# (WIP) Hono multi repo using Turbo repo

## Resources used

* [hono: Getting started](https://hono.dev/getting-started/basic-setup)
* [turbo: add to an existing repo](https://turbo.build/repo/docs/getting-started/add-to-existing-repository)

## Steps so far

1. Create hono app
    2. `npm create hono@latest hono-turborepo`
    3. `cd hono-turborepo`
        4. Select `nodejs` and `pnpm`
    4. `npm run dev`

✅

2. Turn into turbo repo
    3. `pnpm install turbo --save-dev`
    4. Add a `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "outputs": [
        "dist/**"
      ]
    },
    "check-types": {
      "dependsOn": [
        "^check-types"
      ]
    },
    "dev": {
      "persistent": true,
      "cache": false
    }
  }
}
```

**Error:**

```
turbo build                                                                                                                                                                                                 1 ↵
  × missing packageManager field in package.json
  × package.json must have a name field:
  ```

**Solution:**

```diff
+  "name": "hono-turborepo",
+  "packageManager": "pnpm@9.2.4",
```

Then `turbo run dev` works with automatic reload ✅

# TODO:

- Start 2x services
- Run system tests
- Remove dist?

# Questions
* Turbo vs pnpm
* Running tests?