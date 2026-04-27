# Supabase Environment Setup Guide

## ❌ Error You're Seeing
```json
{"error":"Database service is not configured"}
```

This means your Supabase environment variables are not properly set up.

---

## ✅ How to Fix It

### Step 1: Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Settings → API** (left sidebar)
4. You'll see:
   - **Project URL** (copy this)
   - **Project API Keys** section:
     - **anon/public** key (copy this)

### Step 2: Create `.env.local` File

In your project root (`d:\Project\portfolio\`), create a file named `.env.local` with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE1NzkyODMyNzcsImV4cCI6MTkwNzAxMzI3N30.Fxx...
```

### Step 3: Restart Development Server

```bash
# Kill the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 📋 Checklist

- [ ] Navigate to your Supabase project dashboard
- [ ] Copy the Project URL
- [ ] Copy the anon/public API key
- [ ] Create/update `.env.local` file
- [ ] Paste both values in `.env.local`
- [ ] Save the file
- [ ] Restart Next.js dev server (npm run dev)
- [ ] Test the contact form

---

## 🔍 Verify It's Working

### In Browser Console:
You should see no errors in the Console tab of Developer Tools

### In Terminal:
You should NOT see these errors:
```
[Supabase] NEXT_PUBLIC_SUPABASE_URL environment variable is missing
[Supabase] NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is missing
[Supabase] Client initialization failed
```

If you see these, check your `.env.local` file is:
- In the correct location (project root)
- Contains both variables
- Saved properly

### Test the API:
```bash
# Open browser and go to:
# http://localhost:3000/api/contacts
# You should see a response, not the 503 error
```

---

## ⚠️ Common Issues

### Issue 1: `.env.local` Not Being Read
- Make sure the file is in project ROOT (`d:\Project\portfolio\`)
- Filename must be exactly `.env.local` (with the dot)
- After creating it, restart the dev server
- Don't commit this file to git (add to `.gitignore`)

### Issue 2: Environment Variables Still Not Found
- Check if `.env.local` is actually created (not in a subfolder)
- Verify you copied the FULL key (very long string)
- Make sure there are no extra spaces or quotes
- Restart the dev server completely

### Issue 3: Invalid Supabase URL
- Should start with `https://`
- Should end with `.supabase.co`
- Check for typos

### Issue 4: Invalid Anon Key
- Should be a long JWT token (eyJhbGci...Fxx...)
- Not your service role key (that's secret)
- Should be from "anon/public" section, NOT "service_role"

---

## 🎯 Next Steps After Setup

1. Test the contact form on home page
2. Submit a test message
3. Check Supabase dashboard → Tables → contacts (verify data appears)
4. Visit `/contact-list` page to view all messages

---

## 📞 Still Having Issues?

Check the browser's Network tab:
- Go to DevTools → Network tab
- Submit the contact form
- Look for the `/api/contacts` request
- Click on it and check the Response tab
- It should show more detailed error info

If the error is:
- `Database service is not configured` → env vars not set ✓
- `Failed to retrieve contacts` → database table issue
- Other error → check Supabase dashboard for service status

---

**Environment Variable Format Checklist:**
- ✅ `NEXT_PUBLIC_` prefix for public variables
- ✅ No quotes around values
- ✅ One variable per line
- ✅ Format: `KEY=value`
- ✅ File name: `.env.local`
- ✅ Location: Project root

---

Once you've set up `.env.local`, the API will automatically work! 🚀
