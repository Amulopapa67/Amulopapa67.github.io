# 部署到 amulopapa67.github.io

## 🎯 配置说明

你的项目已配置为部署到 `https://amulopapa67.github.io/`

### 前置条件

1. **仓库名必须是** `amulopapa67.github.io`
2. **所有文件路径使用** `/`（根路径）
3. **WAV 文件在** `public/` 文件夹中

## 📋 部署步骤

### 第一次设置

```bash
# 1. 清理旧的 Git 历史（如果需要）
cd /Users/agi00100/Downloads/HomePage_RuiLin
rm -rf .git

# 2. 初始化新的 Git 仓库
git init
git add .
git commit -m "Initial commit: Personal portfolio with music AI projects"

# 3. 添加 GitHub 远程仓库
git remote add origin https://github.com/Amulopapa67/amulopapa67.github.io.git
git branch -M main
git push -u origin main
```

### 确保仓库设置正确

1. 登录 GitHub
2. 创建一个名为 `amulopapa67.github.io` 的新仓库（如果还没有）
3. 仓库设置：
   - Settings → Pages
   - Branch: `main`（或 `master`）
   - Folder: `/ (root)`
   - 保存

## 🚀 自动部署工作流

每次你推送代码到 `main` 分支时，GitHub Actions 会自动：

```bash
git add .
git commit -m "Your changes description"
git push origin main
```

GitHub Actions 会自动构建并部署到 `gh-pages` 分支。

## ✅ 验证部署

部署完成后（通常需要 1-2 分钟），访问：

```
https://amulopapa67.github.io/
```

### 检查点：

1. ✅ 页面正常加载
2. ✅ 音频文件能够播放
3. ✅ 所有图表和动画正常工作
4. ✅ 无 404 错误

## 📊 监控部署状态

1. 进入 GitHub 仓库 → **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流的状态
3. 如果有红叉❌，点击查看详细错误日志

## ⚙️ 文件结构回顾

```
amulopapa67.github.io/（仓库名）
├── public/
│   ├── duo_tok/
│   │   ├── duotok_mix_recon.wav
│   │   ├── duotok_vocal_recon.wav
│   │   └── duotok_accompany_recon.wav
│   └── xy_tokenizer/
│       ├── sa_tokenizer_gt.wav
│       └── sa_tokenizer_recon.wav
├── src/
├── components/
├── .github/workflows/
│   └── deploy.yml
└── vite.config.ts
```

## 💡 本地测试

在推送前，先本地测试：

```bash
# 安装依赖
npm install

# 开发环境测试
npm run dev

# 构建测试
npm run build

# 本地预览生产版本
npm run preview
```

## 🔧 常见问题

### 问题 1：404 错误
- **原因**：`base` 配置不对或仓库名不对
- **解决**：确保 `vite.config.ts` 中 `base: '/'`

### 问题 2：音频文件无法加载
- **原因**：文件不在 `public/` 文件夹或路径错误
- **解决**：检查 `constants.tsx` 中的路径（应该以 `/` 开头）

### 问题 3：样式或脚本加载失败
- **原因**：`base` 路径不正确
- **解决**：检查 `vite.config.ts` 的 `base` 设置

### 问题 4：部署失败
- **查看日志**：GitHub 仓库 → Actions → 查看失败的工作流
- **常见原因**：
  - 依赖安装失败：检查 `package.json`
  - 构建错误：运行 `npm run build` 本地测试
  - 权限问题：检查 GitHub token

## 📝 更新网站

每次你有更新时：

```bash
# 修改文件...
git add .
git commit -m "描述你的更改"
git push origin main

# GitHub Actions 会自动部署
# 约 1-2 分钟后访问 https://amulopapa67.github.io/ 查看更新
```

## 🎉 完成！

现在你可以：
1. 访问 `https://amulopapa67.github.io/`
2. 分享你的个人作品集
3. 展示你的音乐 AI 研究项目

---

**需要帮助？** 查看 `DEPLOY_GUIDE.md` 了解更多详情。
