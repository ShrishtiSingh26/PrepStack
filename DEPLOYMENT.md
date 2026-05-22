# 🚀 Deployment Guide: Vercel (Frontend) & Render (Backend)

Follow these steps to deploy PrepStack to production on Render's and Vercel's free tiers.

---

## 1. Prepare Your Repository
Ensure your project is pushed to a GitHub repository (containing both the `Frontend` and `Backend` subfolders). We have already updated the code so that the API endpoints, CORS configurations, and cookies automatically adapt to your production domains via environment variables.

---

## 2. Deploying the Backend on Render
Render supports deploying containers using Docker. Since PrepStack uses Puppeteer (which requires system-level libraries for Chromium), we have created a `Dockerfile` in the `Backend` directory to handle these dependencies automatically.

### Step-by-Step Setup:
1. Go to [Render](https://render.com/) and log in (connect with GitHub).
2. Click **New +** and select **Web Service**.
3. Select your GitHub repository.
4. Configure the service settings:
   - **Name**: `prepstack-backend`
   - **Environment**: **`Docker`** *(Render will detect this from your project, or you can select it from the dropdown)*
   - **Root Directory**: `Backend` *(Crucial: sets Render to build and execute inside the Backend folder)*
   - **Instance Type**: `Free`
5. Click **Advanced** and add the following **Environment Variables**:
   - `PORT`: `3000` *(Render will automatically map its internal port to this)*
   - `MONGO_URI`: *Your MongoDB connection string (e.g., MongoDB Atlas)*
   - `JWT_SECRET`: *A secure random string for signing JWT tokens*
   - `GEMINI_API_KEY`: *Your Google Gemini API Key*
   - `CLIENT_URL`: `https://your-frontend-app.vercel.app` *(Change this to your actual Vercel URL once the frontend is deployed)*
   - `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`: `true`
   - `PUPPETEER_EXECUTABLE_PATH`: `/usr/bin/chromium`
6. Click **Create Web Service**.

> [!NOTE]
> Render will automatically build the Docker image, download chromium and its font configurations, install the Node dependencies, and boot up your Express server.

> [!WARNING]
> **Render Free Tier Spin-Down**:
> Render's free tier puts web services to sleep after 15 minutes of inactivity. When a new user visits, the first request may take 50 seconds to complete while the server spins back up.

---

## 3. Puppeteer Configuration details
In our code, we configured Puppeteer to use the following launch arguments inside `Backend/src/services/ai.service.js` to ensure compatibility with container environments:
```javascript
const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
})
```
This guarantees that:
- Locally on Windows, it will default to using Puppeteer's bundled Chrome (`executablePath` is `undefined`).
- In production on Render's Docker container, it will use the precompiled system Chromium (`/usr/bin/chromium`).

---

## 4. Deploying the Frontend on Vercel
Vercel is optimized for building and serving Vite/React frontend apps for free.

### Step-by-Step Setup:
1. Log in to [Vercel](https://vercel.com/) using your GitHub account.
2. Click **Add New** $\rightarrow$ **Project**.
3. Import your GitHub repository.
4. Configure the project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click *Edit* and select the `Frontend` folder.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Expand the **Environment Variables** section and add:
   - Name: `VITE_API_BASE_URL`
   - Value: `https://your-backend-service-url.onrender.com` *(Copy this from your Render Web Service dashboard)*
6. Click **Deploy**.

### Routing Setup on Vercel:
Because PrepStack uses React Router Client routing, you need to tell Vercel to route all URL paths to `index.html` (to prevent 404 errors on refreshing paths like `/home` or `/interview/:id`).

Create a file named `vercel.json` inside the **`Frontend`** root folder:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 5. Post-Deployment Steps
1. Once your Vercel frontend is deployed (e.g. `https://prepstack.vercel.app`), go back to your **Render Backend Web Service settings**.
2. Update the `CLIENT_URL` environment variable value to your frontend Vercel URL.
3. Save changes. Render will automatically redeploy the backend with the correct CORS configuration, and you are ready to go!
