# Sparkchan MemeOS — Monorepo

Fully modular stack for building zk-powered meme applications.

## 🧩 Structure
- `apps/playground` — Web UI playground (Next.js)
- `apps/runtime` — Rust execution runtime (MemeVM)
- `apps/proof-service` — zkSNARK proof generator (circom/snarkjs)
- `apps/indexer` — Indexer + DB writer
- `packages/memeos-sdk` — TypeScript SDK published to npm
- `infra` — docker-compose, Postgres, local dev

## 🚀 Quick Start
```sh
git clone <repo>
cd memeos
npm install
npm run dev
```

## 🐳 Run full stack via Docker
```sh
docker-compose up --build
```

## 📦 Publish SDK to npm
Tag a version:
```sh
npm version patch
git push --tags
```
GitHub Actions auto-publish.

## 📡 Deployment
- Frontend → Vercel
- Runtime → Render / Railway / Cloud Run
- Proof Service → Container service
- Indexer → Background worker
- Database → Supabase / Postgres

