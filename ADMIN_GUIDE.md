# Admin Guide - Portfolio Projects Management

## Password Protection

Your projects page is now protected with admin authentication.

### Default Password
Current password: `admin123`

**⚠️ IMPORTANT: Change this password before deploying to GitHub!**

### How to Change the Password

1. Open `projects.html`
2. Find line 462: `const ADMIN_PASSWORD = "admin123";`
3. Change `"admin123"` to your own secure password
4. Save the file

Example:
```javascript
const ADMIN_PASSWORD = "MySecurePassword2024!";
```

## How It Works

### For Visitors (Public View)
- Can view all projects
- Can click "View Live" and "Source Code" links
- **CANNOT** see or access:
  - "Add New Project" button
  - Edit buttons
  - Delete buttons

### For You (Admin View)

1. **Login:**
   - Go to `projects.html` page
   - Click "Admin Login" button
   - Enter your password
   - Edit/Delete buttons will appear on all projects

2. **Add Project:**
   - After logging in, click "Add New Project"
   - Fill in the form:
     - Project Name
     - Description
     - Image URL
     - View Link (live demo)
     - Code Link (GitHub repo)
   - Click "Save Project"

3. **Edit Project:**
   - Click the yellow "Edit" button on any project
   - Modify the details
   - Click "Save Project"

4. **Delete Project:**
   - Click the red "Delete" button
   - Confirm deletion

5. **Logout:**
   - Click the red "Logout" button
   - All admin controls will be hidden

## Session Management

- Your login persists during the browser session
- Closing the tab/browser will log you out automatically
- Logging out manually removes all admin controls immediately

## Security Notes

1. **This is client-side protection** - suitable for a static GitHub Pages site
2. For production use, consider:
   - Using environment variables for the password
   - Implementing server-side authentication
   - Using a backend database for projects

## Deploying to GitHub Pages

Before pushing to GitHub:
1. ✅ Change the default password in `projects.html`
2. ✅ Test the login functionality locally
3. ✅ Add, edit, and delete a test project
4. ✅ Push to GitHub
5. ✅ Enable GitHub Pages in repository settings

Your portfolio will be live, and only you can manage projects with the password!
