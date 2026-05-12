# Deployment Steps

Use this folder as the deployment project root:

```text
C:\Users\ctren\Downloads\Coaching App\soccer-player-portal-deploy
```

Do not deploy the parent `Coaching App` folder because it contains unrelated private files.

## Option 1: Vercel From GitHub

1. Create a new GitHub repository for only the files in this folder.
2. Commit and push this folder's contents.
3. In Vercel, choose **Add New Project** and import that repository.
4. Use these project settings:
   - Framework preset: Other
   - Build command: leave blank
   - Output directory: `.`
   - Install command: leave blank
5. Deploy.
6. Open the generated Vercel URL and test the Training, Team, Benchmarks, Journal, Strategy, and Fuel tabs.

## Option 2: Vercel CLI

1. Install and log in:

```powershell
npm install -g vercel
vercel login
```

2. Deploy a preview:

```powershell
cd "C:\Users\ctren\Downloads\Coaching App\soccer-player-portal-deploy"
vercel
```

3. Deploy production:

```powershell
vercel --prod
```

## Option 3: Netlify Drag and Drop

1. Open Netlify.
2. Go to **Add new site** or **Deploy manually**.
3. Drag the `soccer-player-portal-deploy` folder into Netlify Drop.
4. Open the generated Netlify URL and test the app.

## Option 4: Netlify CLI

1. Install and log in:

```powershell
npm install -g netlify-cli
netlify login
```

2. Deploy a preview:

```powershell
cd "C:\Users\ctren\Downloads\Coaching App\soccer-player-portal-deploy"
netlify deploy
```

When prompted for the publish directory, use:

```text
.
```

3. Deploy production:

```powershell
netlify deploy --prod
```

## Pre-Share Checklist

1. Confirm the public URL opens with no login.
2. Confirm the Team tab shows the intended schedule.
3. Confirm no test player journal or benchmark entries are saved in your browser before recording a demo.
4. Send players the public URL.
5. Tell players their journal and benchmark entries stay on their own phone/browser and do not sync to the coach.
