# Public Branch Guide

This repo uses two long-lived branches with different purposes:

| Branch | Purpose | Auth gate | Hackathons content |
|--------|---------|-----------|-------------------|
| `main` | Private / club-facing site | Yes | Yes |
| `public` | Public-facing site | No | No |

The `public` branch is identical to `main` except for two config differences committed directly on `public`:
- `quartz.config.ts` — `"Hackathons"` added to `ignorePatterns`
- `quartz.layout.ts` — `Component.AuthGate()` removed from `afterBody`

**Never merge `public` back into `main`.** Changes only flow one direction: `main` → `public`.

---

## Day-to-Day: Working on main

All normal content and development work happens on `main`.

```bash
# Make sure you're on main and up to date
git checkout main
git pull origin main

# Create a feature/content branch as usual
git checkout -b myEdits

# ... make changes ...

git add .
git commit -m "Add notes on SQL injection"
git push origin myEdits
```

Open a pull request into `main` on GitHub as described in the README.

---

## Syncing Changes to the Public Branch

After changes are merged into `main`, push them to `public` with a merge:

```bash
# 1. Make sure main is up to date
git checkout main
git pull origin main

# 2. Switch to public and merge in main
git checkout public
git merge main

# 3. Resolve any conflicts if needed (see below), then push
git push origin public
```

Because the two config changes on `public` touch different lines than anything contributors normally edit, merges are almost always conflict-free.

### If a merge conflict occurs

A conflict will only happen if someone edited `quartz.config.ts` or `quartz.layout.ts` on `main`. Resolve it by ensuring the `public`-branch values are preserved:

- `quartz.config.ts` — `ignorePatterns` must include `"Hackathons"`
- `quartz.layout.ts` — `afterBody` must be `[]` (no `AuthGate`)

```bash
# After resolving conflicts in your editor:
git add quartz.config.ts quartz.layout.ts
git merge --continue
git push origin public
```

---

## Deployments

Point each deployment target at the appropriate branch:

- **Private site** (e.g. bristolctf.club with auth) → build from `main`
- **Public site** → build from `public`

In a GitHub Actions workflow this is typically controlled by the `branches` trigger:

```yaml
on:
  push:
    branches:
      - public   # triggers public site deployment
```

---

## What NOT to do

- Do not commit content or style changes directly to `public` — they will be overwritten on the next merge from `main`
- Do not revert or change the two config commits on `public` — they are the only thing separating the public and private builds
- Do not merge `public` into `main`
