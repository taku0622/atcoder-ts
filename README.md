# TypeScript AtCoder Practice

TypeScript（tsx）を用いてAtCoderの問題を解くためのローカル実行環境。

---

## 📁 ディレクトリ構成

```
.
├─ src/
│  └─ abc001_A.ts
├─ input.txt
├─ package.json
├─ tsconfig.json
└─ README.md
```

* `src/`：問題ごとの実装ファイル
* `input.txt`：ローカル検証用の入力ファイル
* `tsconfig.json`：TypeScript設定
* `package.json`：依存関係と実行スクリプト

---

## 🚀 セットアップ手順

### ① 初期化

```bash
npm init -y
```

### ② パッケージインストール

```bash
npm install -D typescript tsx @types/node
```

### ③ TypeScript設定

```bash
npx tsc --init
```

---

## 📦 使用パッケージ

| パッケージ       | 役割                      |
| ----------- | ----------------------- |
| typescript  | TypeScript本体            |
| tsx         | TypeScriptファイルを直接実行（高速） |
| @types/node | Node.jsの型定義（fsなど）       |

---

## 🧩 実装テンプレ

```ts
import * as fs from "fs";

// 標準入力を読み込む
const input = fs.readFileSync(0, "utf8").trim();

// 空白・改行で分割
const [a, b] = input.split(/\s+/).map(Number);

// 出力
console.log(a + b);
```

---

## ▶️ 実行方法

### 方法①（推奨）

```bash
npx tsx src/abc001_A.ts < input.txt
```

### 方法②（package.json）

```json
"scripts": {
  "run": "tsx src/abc001_A.ts"
}
```

```bash
npm run run < input.txt
```

---

## 📄 input.txtについて

`input.txt` はローカル検証用の入力ファイル。

例：

```
10
3
```

### ポイント

* コード内では `input.txt` を直接読まない
* 標準入力（stdin）として渡す

```bash
< input.txt
```

👉 AtCoder本番も同じ仕組みなので、そのまま提出可能

---

## ⚠️ 注意点

### NG例（提出不可）

```ts
fs.readFileSync("input.txt", "utf8")
```

👉 ローカル専用になり提出時にエラーになる

---

## 🔍 型チェック

tsxは型チェックを行わないため、別途実行する。

```bash
npx tsc --noEmit
```

---

## 🔁 開発フロー

```
コードを書く
↓
input.txtでテスト
↓
実行（tsx）
↓
問題なければcommit
```

---

## 🎯 目的

* TypeScriptでの競技プログラミング練習
* 標準入力処理の理解
* CLI操作・Git運用の習得

---
