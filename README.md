# customer-project-management

顧客・案件管理システムのモノレポ構成です。

## ディレクトリ

- `frontend`: React + TypeScript + Vite
- `backend`: Node.js + Express + TypeScript + Prisma
- `docs`: 要件・画面・API・DB設計

## セットアップ

1. 依存関係のインストール

```bash
npm install
```

2. 環境変数の作成

```bash
cp .env.example .env
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

3. DB起動（任意: Docker）

```bash
docker compose up -d
```

4. 開発起動

```bash
npm run dev
```
