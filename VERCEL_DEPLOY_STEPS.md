# 🚀 Vercel 部署步骤

您的代码已经在GitHub上！现在可以部署到Vercel了。

## ✅ GitHub Repository
🔗 https://github.com/hong0506/La_Co-te_Bleu-restaurant-.git
✅ 所有最新代码已推送

---

## 🎯 方法1: 通过Vercel Dashboard（推荐）

### 步骤：

1. **访问您的Vercel Dashboard**
   - URL: https://vercel.com/hong-jiangs-projects-338ea3c1

2. **导入GitHub仓库**
   - 点击 "Add New" → "Project"
   - 或直接点击: https://vercel.com/new
   - 选择 "Import Git Repository"

3. **连接GitHub账户**（如果还未连接）
   - 点击 "Continue with GitHub"
   - 授权Vercel访问您的仓库

4. **选择仓库**
   - 找到并选择: `hong0506/La_Co-te_Bleu-restaurant-`
   - 点击 "Import"

5. **配置项目**
   Vercel会自动检测到Next.js项目，默认配置通常就很好：
   - Framework Preset: **Next.js** ✅ (自动检测)
   - Root Directory: `./` (默认)
   - Build Command: `npm run build` (自动)
   - Output Directory: `.next` (自动)
   - Install Command: `npm install` (自动)

6. **点击 "Deploy"**
   - 等待2-3分钟
   - Vercel会自动：
     - 安装依赖
     - 构建项目
     - 部署到CDN

7. **完成！** 🎉
   - 您会得到一个URL，类似: `https://la-cote-bleu-restaurant.vercel.app`
   - 可以立即访问和分享！

---

## 🎯 方法2: 使用Vercel CLI（高级用户）

### 安装Vercel CLI

```bash
npm install -g vercel
```

### 登录

```bash
vercel login
```

### 部署

在项目根目录运行：

```bash
vercel
```

按照提示操作：
- Setup and deploy? **Y**
- Which scope? 选择您的账户
- Link to existing project? **N** (首次部署)
- What's your project's name? `la-cote-bleu-restaurant`
- In which directory is your code located? `./`

然后运行生产部署：

```bash
vercel --prod
```

---

## 🎯 方法3: 一键部署按钮（最快）

点击下面的按钮直接部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hong0506/La_Co-te_Bleu-restaurant-.git)

---

## ✨ 部署后的优势

### 自动功能
- ✅ **自动SSL证书** (https://)
- ✅ **全球CDN** (快速加载)
- ✅ **自动部署** (每次git push都会更新)
- ✅ **预览部署** (每个PR都有预览链接)
- ✅ **零配置** (Next.js优化)

### 自定义域名（可选）
部署后可以添加自定义域名：
1. 在Vercel项目中，点击 "Settings" → "Domains"
2. 添加您的域名（如 `lacotebleu.com`）
3. 按照说明配置DNS

---

## 📊 预期结果

部署成功后，您会看到：

1. **生产URL**: `https://your-project.vercel.app`
2. **部署状态**: Ready ✅
3. **构建时间**: ~2-3分钟
4. **构建日志**: 可以查看详细日志

---

## 🔄 后续更新

以后只需：
```bash
git add .
git commit -m "your changes"
git push
```

Vercel会自动检测并重新部署！🚀

---

## ⚠️ 如果遇到问题

### 构建失败？
1. 检查构建日志
2. 确保 `package.json` 中所有依赖都正确
3. 本地运行 `npm run build` 测试

### 部署慢？
- 首次部署需要安装所有依赖
- 后续部署会使用缓存，更快

### 找不到仓库？
- 确保GitHub连接已授权
- 刷新仓库列表

---

## 🎉 完成后

分享您的网站链接：
- 生产环境: `https://your-project.vercel.app`
- 自定义域名: `https://lacotebleu.com` (如果配置)

享受您的新网站！✨

---

## 📞 需要帮助？

如果遇到任何问题：
1. 查看Vercel部署日志
2. 检查本地是否能 `npm run build`
3. 确认所有文件都已提交到GitHub

您的项目已经准备好部署了！🚀
