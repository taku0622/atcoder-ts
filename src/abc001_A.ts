// Node.jsのファイルシステムモジュールを読み込む
// → 標準入力を読むために使う
import * as fs from "fs";

// 標準入力（stdin）からすべての入力を読み込む
// 0 は「標準入力」を意味する（AtCoderと同じ）
// "utf8" は文字列として読み込む指定
// trim() は末尾の改行や空白を削除する
const input = fs.readFileSync(0, "utf8").trim();

// 入力を「空白 or 改行」で分割して配列にする
// /\s+/ は「空白文字（スペース・改行など）1つ以上」を意味する正規表現
// map(Number) で文字列 → 数値に変換
const [h1, h2] = input.split(/\s+/).map(Number);

// 計算結果を出力
// console.log は標準出力（AtCoderに提出される結果）
console.log(h1 - h2);