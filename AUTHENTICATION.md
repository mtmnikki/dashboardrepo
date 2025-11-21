# Authentication Setup with Supabase

This dashboard uses Supabase for authentication, database, and storage.

## ✅ What's Already Set Up

- ✅ Supabase client configuration
- ✅ Email/password authentication
- ✅ Google OAuth support (ready to enable)
- ✅ Protected routes with middleware
- ✅ User session management
- ✅ Login and signup pages
- ✅ User profile menu with logout
- ✅ OAuth callback handler

## 🚀 Quick Start

### 1. Environment Variables (Already Configured)

Your `.env.local` file is already configured with your Supabase credentials:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key for admin operations

### 2. Enable Authentication Providers in Supabase

#### Email Authentication (Already Enabled)
Email authentication is enabled by default in Supabase.

#### Google OAuth (Optional)
To enable Google sign-in:

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to **Authentication → Providers**
3. Find **Google** and click Configure
4. Add your Google OAuth credentials:
   - **Client ID**: From Google Cloud Console
   - **Client Secret**: From Google Cloud Console
5. Add these redirect URLs:
   ```
   Development: http://localhost:3000/auth/callback
   Production: https://yourdomain.com/auth/callback
   ```

### 3. Run the Development Server

```bash
npm run dev
```

Visit http://localhost:3000 - you'll be redirected to the login page.

### 4. Create Your First User

1. Click "create a new account" link on the login page
2. Fill in email and password
3. Check your email for verification link
4. Click the verification link
5. Return to the app and log in

## 📁 File Structure

```
app/
├── (auth)/
│   ├── login/page.tsx          # Login page
│   ├── signup/page.tsx         # Signup page
│   └── layout.tsx              # Auth layout
├── auth/
│   └── callback/route.ts       # OAuth callback handler
lib/supabase/
├── client.ts                    # Browser client
├── server.ts                    # Server client
└── middleware.ts                # Auth middleware
components/
├── user-menu.tsx                # User dropdown menu
└── shared/profile-dropdown.tsx  # Profile dropdown
middleware.ts                    # Route protection
```

## 🔐 Protected Routes

All routes except `/login` and `/signup` are protected by default. Unauthenticated users will be redirected to the login page.

To make a route public, modify `lib/supabase/middleware.ts`:

```typescript
const isPublicRoute = request.nextUrl.pathname === '/public-page'

if (!user && !isAuthPage && !isPublicRoute) {
  // Redirect to login
}
```

## 🎨 Customization

### Login/Signup Pages
- Located in `app/(auth)/login/page.tsx` and `app/(auth)/signup/page.tsx`
- Styled with Tailwind CSS and shadcn/ui components
- Includes email/password and Google OAuth buttons

### User Menu
- Located in `components/user-menu.tsx`
- Shows user avatar, name, and email
- Links to profile and settings pages
- Logout functionality

## 🔧 Database Setup (Optional)

If you want to store additional user data:

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Create your tables:

```sql
-- Example: User profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own profile
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Policy: Users can update their own profile
CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

## 🐛 Troubleshooting

### "Invalid credentials" error
- Verify your Supabase URL and keys in `.env.local`
- Check that email authentication is enabled in Supabase Dashboard

### OAuth redirect not working
- Verify redirect URLs are added in Supabase Dashboard
- Check that the callback route exists at `/auth/callback`

### User not staying logged in
- Clear your browser cookies
- Verify middleware is running correctly
- Check browser console for errors

## 📚 Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Authentication](https://nextjs.org/docs/app/building-your-application/authentication)
- [Supabase SSR Guide](https://supabase.com/docs/guides/auth/server-side/nextjs)
