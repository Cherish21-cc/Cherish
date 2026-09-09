#!/usr/bin/env python3
"""把 index.html + CSS + JS 打包成一个自包含的 dist/index.html。

用途：单文件方便直接发给朋友（微信/邮件），双击就能打开，
也方便上传到任何静态托管服务。

    python3 scripts/build-single.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "dist" / "index.html"

html = (ROOT / "index.html").read_text(encoding="utf-8")
css = (ROOT / "assets/css/style.css").read_text(encoding="utf-8")
data = (ROOT / "assets/js/data.js").read_text(encoding="utf-8")
app = (ROOT / "assets/js/app.js").read_text(encoding="utf-8")

html = html.replace(
    '<link rel="stylesheet" href="assets/css/style.css">',
    "<style>\n" + css + "\n</style>",
)
html = html.replace(
    '<script src="assets/js/data.js"></script>\n<script src="assets/js/app.js"></script>',
    "<script>\n" + data + "\n</script>\n<script>\n" + app + "\n</script>",
)

leftovers = re.findall(r'(?:href|src)="assets/[^"]+"', html)
if leftovers:
    raise SystemExit(f"打包失败，仍有未内联的引用: {leftovers}")

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(html, encoding="utf-8")
print(f"已生成 {OUT.relative_to(ROOT)}  ({OUT.stat().st_size / 1024:.0f} KB)")
