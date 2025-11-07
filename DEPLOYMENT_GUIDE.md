# 🚀 Deployment Guide - La Côte Bleu

Your code is now on GitHub! Here are the best ways to deploy and share your website.

## ✨ Repository
**GitHub**: https://github.com/hong0506/La_Co-te_Bleu-restaurant-.git

---

## 🌟 Recommended: Deploy on Vercel (FREE & EASY)

Vercel is made by the Next.js team and provides the best performance with zero configuration.

### Steps:

1. **Visit**: https://vercel.com/signup
2. **Sign up** with your GitHub account
3. **Import your repository**:
   - Click "Add New Project"
   - Select: `hong0506/La_Co-te_Bleu-restaurant-`
   - Click "Import"
4. **Deploy**:
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Wait 2-3 minutes ⏱️
5. **Done!** 🎉
   - You'll get a URL like: `https://la-cote-bleu-restaurant.vercel.app`
   - Share this link with anyone!

### Benefits:
- ✅ **FREE** forever for personal projects
- ✅ **Automatic deployments** (every git push updates the site)
- ✅ **SSL certificate** (https://)
- ✅ **CDN** (fast worldwide)
- ✅ **Preview deployments** for branches
- ✅ **No configuration needed**

---

## 🎯 Alternative: Deploy on Netlify (Also FREE)

Another excellent option with drag-and-drop support.

### Steps:

1. **Visit**: https://app.netlify.com/signup
2. **Sign up** with your GitHub account
3. **Import repository**:
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select: `hong0506/La_Co-te_Bleu-restaurant-`
4. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"
5. **Done!** 🎉
   - You'll get a URL like: `https://la-cote-bleu.netlify.app`

---

## 📝 GitHub Pages Option (Static Export Only)

⚠️ **Note**: GitHub Pages requires static export, which removes some Next.js features (like API routes, server-side rendering). Not recommended unless necessary.

### If you still want GitHub Pages:

1. **Update `next.config.js`**:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/La_Co-te_Bleu-restaurant-',
}

module.exports = nextConfig
```

2. **Build and export**:
```bash
npm run build
```

3. **Create `.nojekyll` file** in the `out` folder

4. **Push the `out` folder to `gh-pages` branch**:
```bash
git add out -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

Your site will be at: `https://hong0506.github.io/La_Co-te_Bleu-restaurant-/`

---

## 🎉 Recommended Next Steps

### After Deploying:

1. **Add your OpenTable link** in `components/sections/ReservationsSection.tsx`
2. **Update contact information** with real phone/email
3. **Add real images** to replace placeholders
4. **Set up custom domain** (optional):
   - Buy a domain (e.g., `lacotebleu.com`)
   - Point it to your Vercel/Netlify deployment

### Custom Domain Setup (Vercel):
1. Go to your project → Settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)

---

## 📊 Comparison

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| Next.js Support | ⭐⭐⭐⭐⭐ Perfect | ⭐⭐⭐⭐ Good | ⭐⭐ Limited |
| Free Plan | ✅ Excellent | ✅ Good | ✅ Basic |
| Auto Deploy | ✅ Yes | ✅ Yes | ⚠️ Manual |
| SSL/HTTPS | ✅ Yes | ✅ Yes | ✅ Yes |
| Setup Time | ⚡ 2 min | ⚡ 3 min | 🐌 15 min |
| Performance | 🚀 Best | 🚀 Great | 🏃 OK |

---

## 💡 My Recommendation

**Use Vercel!** It's the easiest and best option for Next.js:

1. Visit: https://vercel.com/signup
2. Import your GitHub repo
3. Click Deploy
4. Share your new URL! 🎉

The entire process takes less than 3 minutes!

---

## 📞 Need Help?

If you encounter any issues:
1. Check the build logs in Vercel/Netlify dashboard
2. Make sure all dependencies are installed
3. Ensure `package.json` has correct scripts

Your website is ready to share with the world! 🌎✨
