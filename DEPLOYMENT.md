# 🚀 Deployment Guide

## Quick Deployment Commands

### Vercel (Recommended)
```bash
# Login to Vercel (first time only)
vercel login

# Deploy to production
vercel --prod

# Deploy preview (for testing)
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod --dir=.next
```

## Deployment Checklist

Before deploying, run these commands to ensure everything is ready:

```bash
# 1. Lint check
npm run lint

# 2. Build test
npm run build

# 3. Type check (already included in build)
# 4. Commit changes
git add .
git commit -m "Ready for deployment"

# 5. Deploy
vercel --prod
```

## Environment Variables

If you need to add environment variables:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
Add in the Netlify dashboard under Site Settings > Environment Variables

## Domain Configuration

### Custom Domain on Vercel
1. Go to your project dashboard on vercel.com
2. Click "Domains" tab
3. Add your custom domain
4. Follow DNS configuration instructions

### Custom Domain on Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Verify all dependencies are in package.json
- Check for TypeScript errors

### Deployment Issues
- Ensure git repository is up to date
- Check build logs in platform dashboard
- Verify environment variables are set correctly

## Performance Monitoring

After deployment, monitor:
- Lighthouse scores
- Core Web Vitals
- Page load times
- Error rates in platform analytics
