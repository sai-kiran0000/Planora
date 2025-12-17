# Deploying Planora to Render

## 🚀 Quick Deploy

### Method 1: Using render.yaml (Recommended)

1. **Push code to GitHub** (already done ✅)

2. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

3. **Deploy from Dashboard**
   - Click "New" → "Blueprint"
   - Connect your GitHub repository: `krupakargurije/Planora`
   - Render will automatically detect `render.yaml`
   - Click "Apply"

4. **Configure Environment Variables**
   
   For **planora-backend**:
   ```
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   CORS_ALLOWED_ORIGINS=https://planora-frontend.onrender.com
   ```
   
   For **planora-frontend**:
   ```
   VITE_API_BASE_URL=https://planora-backend.onrender.com/api
   ```

5. **Wait for Deployment** (5-10 minutes)

---

### Method 2: Manual Setup

#### Step 1: Create PostgreSQL Database

1. Go to Render Dashboard
2. Click "New" → "PostgreSQL"
3. Name: `planora-db`
4. Database: `planora_db`
5. User: `planora_user`
6. Region: Oregon (or closest to you)
7. Plan: Free
8. Click "Create Database"
9. **Save the connection details**

#### Step 2: Deploy Backend

1. Click "New" → "Web Service"
2. Connect GitHub repository: `krupakargurije/Planora`
3. Configure:
   - **Name:** `planora-backend`
   - **Region:** Oregon
   - **Branch:** main
   - **Root Directory:** `backend`
   - **Runtime:** Java
   - **Build Command:** `mvn clean package -DskipTests`
   - **Start Command:** `java -jar target/*.jar`

4. **Environment Variables:**
   ```
   SPRING_DATASOURCE_URL=<your-postgres-internal-url>
   SPRING_DATASOURCE_USERNAME=planora_user
   SPRING_DATASOURCE_PASSWORD=<your-postgres-password>
   SPRING_DATASOURCE_DRIVER=org.postgresql.Driver
   SPRING_JPA_DIALECT=org.hibernate.dialect.PostgreSQLDialect
   SPRING_JPA_DDL_AUTO=update
   SPRING_SQL_INIT_MODE=never
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   JWT_SECRET=your-secret-key-minimum-256-bits
   JWT_EXPIRATION=86400000
   CORS_ALLOWED_ORIGINS=https://planora-frontend.onrender.com
   ```

5. Click "Create Web Service"

#### Step 3: Deploy Frontend

1. Click "New" → "Static Site"
2. Connect GitHub repository: `krupakargurije/Planora`
3. Configure:
   - **Name:** `planora-frontend`
   - **Branch:** main
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

4. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://planora-backend.onrender.com/api
   ```

5. Click "Create Static Site"

---

## 🔧 Configuration Details

### Backend Configuration

The backend is configured to:
- Use PostgreSQL in production
- Auto-create/update database schema
- Accept CORS from frontend URL
- Serve on port assigned by Render

### Frontend Configuration

The frontend is configured to:
- Build optimized production bundle
- Connect to backend API
- Serve static files via CDN
- Handle React Router properly

---

## 📝 Environment Variables Reference

### Backend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SPRING_DATASOURCE_URL` | PostgreSQL connection URL | `postgresql://...` |
| `SPRING_DATASOURCE_USERNAME` | Database username | `planora_user` |
| `SPRING_DATASOURCE_PASSWORD` | Database password | From Render DB |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | `xxx.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Secret | `GOCSPX-xxx` |
| `JWT_SECRET` | JWT signing key | Min 256 bits |
| `CORS_ALLOWED_ORIGINS` | Frontend URL | `https://your-frontend.onrender.com` |

### Frontend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API URL | `https://your-backend.onrender.com/api` |

---

## 🐛 Troubleshooting

### Backend Won't Start

**Error:** "Failed to configure a DataSource"
```bash
# Solution: Check database environment variables
# Ensure SPRING_DATASOURCE_URL is set correctly
```

**Error:** "Port already in use"
```bash
# Solution: Render assigns PORT automatically
# Make sure application.yml uses ${PORT:8080}
```

### Frontend Shows 404

**Issue:** React Router routes return 404
```bash
# Solution: Already configured in render.yaml
# Rewrite rules redirect all routes to index.html
```

### CORS Errors

**Error:** "Access-Control-Allow-Origin"
```bash
# Solution: Update CORS_ALLOWED_ORIGINS
# Must match exact frontend URL (with https://)
```

### Database Connection Failed

**Issue:** Can't connect to PostgreSQL
```bash
# Solution: Use Internal Database URL
# Go to Database → Connection → Internal Database URL
# Copy and paste into SPRING_DATASOURCE_URL
```

---

## 🔄 Updating Deployment

### Auto-Deploy (Recommended)

Render automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update: your changes"
git push origin main
```

Render will automatically:
1. Detect the push
2. Rebuild services
3. Deploy new version

### Manual Deploy

From Render Dashboard:
1. Go to your service
2. Click "Manual Deploy"
3. Select branch
4. Click "Deploy"

---

## 📊 Monitoring

### View Logs

1. Go to service in Render Dashboard
2. Click "Logs" tab
3. View real-time logs

### Health Checks

Backend health endpoint:
```
https://planora-backend.onrender.com/actuator/health
```

---

## 💰 Cost Optimization

### Free Tier Limits

- **Web Services:** Sleep after 15 min inactivity
- **PostgreSQL:** 90 days free, then $7/month
- **Static Sites:** Always free

### Keep Services Awake

Use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 5 minutes.

---

## 🔐 Security Best Practices

1. **Never commit secrets** - Use environment variables
2. **Use HTTPS** - Render provides free SSL
3. **Rotate JWT secrets** - Change periodically
4. **Limit CORS** - Only allow your frontend domain
5. **Update dependencies** - Keep packages current

---

## 📱 Post-Deployment

### Update Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to your OAuth credentials
3. Add authorized redirect URIs:
   ```
   https://planora-backend.onrender.com/oauth2/callback/google
   https://planora-frontend.onrender.com/auth/callback
   ```

### Update Supabase

1. Go to Supabase Dashboard
2. Authentication → URL Configuration
3. Add Site URL: `https://planora-frontend.onrender.com`
4. Add Redirect URLs:
   ```
   https://planora-frontend.onrender.com/auth/callback
   ```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] PostgreSQL database created
- [ ] Backend deployed with all env vars
- [ ] Frontend deployed with API URL
- [ ] Google OAuth redirect URIs updated
- [ ] Supabase redirect URLs updated
- [ ] Test login functionality
- [ ] Test trip creation
- [ ] Monitor logs for errors

---

## 🎉 Success!

Your Planora application should now be live at:
- **Frontend:** `https://planora-frontend.onrender.com`
- **Backend:** `https://planora-backend.onrender.com`

**First deployment takes 5-10 minutes. Subsequent deploys are faster!**

---

## 📞 Need Help?

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- Check application logs in Render Dashboard
