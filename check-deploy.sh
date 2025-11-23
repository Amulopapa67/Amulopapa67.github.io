#!/bin/bash

echo "🔍 检查 GitHub Pages 部署配置..."
echo ""

# 检查 public 文件夹
echo "1️⃣  检查 public 文件夹中的音频文件..."
if [ -f "public/duo_tok/duotok_mix_recon.wav" ] && [ -f "public/xy_tokenizer/sa_tokenizer_gt.wav" ]; then
    echo "   ✅ 音频文件已正确放在 public/ 文件夹"
else
    echo "   ❌ 音频文件缺失，请检查 public/ 文件夹"
fi

# 检查 vite.config.ts
echo ""
echo "2️⃣  检查 Vite 配置..."
if grep -q "base: isProduction ? '/HomePage_RuiLin/'" vite.config.ts; then
    echo "   ✅ Vite 配置正确"
else
    echo "   ⚠️  注意：base 路径设置为 '/HomePage_RuiLin/'，如果仓库名不同需修改"
fi

# 检查 constants.tsx
echo ""
echo "3️⃣  检查音频路径引用..."
if grep -q "src: '/duo_tok/duotok_mix_recon.wav'" constants.tsx; then
    echo "   ✅ 音频路径已更新为绝对路径"
else
    echo "   ❌ 音频路径未更新，请手动检查 constants.tsx"
fi

# 检查 GitHub Actions 配置
echo ""
echo "4️⃣  检查 GitHub Actions 配置..."
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "   ✅ GitHub Actions 部署流程已配置"
else
    echo "   ❌ GitHub Actions 配置文件缺失"
fi

echo ""
echo "✨ 配置检查完成！"
echo ""
echo "📝 后续步骤："
echo "   1. git add ."
echo "   2. git commit -m 'Configure GitHub Pages deployment'"
echo "   3. git push origin main"
echo ""
echo "🚀 推送后，GitHub Actions 会自动构建并部署到 GitHub Pages"
