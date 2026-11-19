# 姉妹アプリ＆サイト共通宣伝枠（自動更新システム）

## 仕組み
各アプリのトップ画面下部にある `<div id="sister-apps-promo" data-current-app="アプリのパッケージID"></div>` が、起動時に以下の共通JSONデータを取得して自動的に最新の宣伝リストを描画します：

- **共通データ（編集するのはこの1ファイルだけ！）**:
  `https://amagawa-stadio.github.io/promo/sister-apps.json`
- **共通スクリプト**:
  `https://amagawa-stadio.github.io/promo/promo-widget.js`
- **アイコン置き場**:
  `promo/icons/`

---

## 新しいアプリをリリースした時の更新手順（各アプリの再ビルド不要！）

1. 新アプリのアイコン画像を `promo/icons/` フォルダに入れる。
2. `promo/sister-apps.json` の `"apps"` 配列の **一番上（先頭）** に新アプリの情報を追加し、`"isNew": true` にする（従来の1番目だったアプリの `"isNew"` は `false` に変更する）。
3. `amagawa-stadio.github.io` リポジトリを GitHub に Push する。

これだけで、すでにリリース済みのすべてのアプリのトップ画面下部で、**一番上に「NEW」バッジ付きで新アプリが自動表示**されます（また、`data-current-app` により自分自身のアプリの中では自動的に非表示になります）。

