# Contact Management - Quick Reference

## 🚀 Quick Start

### View Contact Form
- File: `src/components/sections/Contact.jsx`
- Page: Home page, Contact section

### View Contact List
- File: `src/pages/contact-list.js`
- URL: `/contact-list`
- Component: `src/components/sections/ContactList.jsx`

### API Endpoint
- Route: `src/pages/api/contacts.js`
- Methods: POST (submit), GET (retrieve)

---

## 📝 Code Snippets

### Submit Contact via API
```javascript
const response = await fetch('/api/contacts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  })
});

const result = await response.json();
if (response.ok) {
  console.log('Success:', result.data);
} else {
  console.error('Error:', result.error);
}
```

### Fetch Contacts via API
```javascript
const response = await fetch(
  '/api/contacts?limit=10&offset=0&sortBy=created_at&order=desc'
);
const result = await response.json();
console.log('Contacts:', result.data);
console.log('Pagination:', result.pagination);
```

### Use Helper Functions
```javascript
import { 
  createContact, 
  fetchContacts, 
  searchContacts 
} from '@/utils/supabaseHelpers';

// Create
const { success, data, error } = await createContact({
  name: 'John',
  email: 'john@example.com',
  message: 'Hi'
});

// Fetch
const contacts = await fetchContacts({
  limit: 20,
  sortBy: 'name',
  order: 'asc'
});

// Search
const results = await searchContacts('john');
```

---

## 📂 File Structure

```
src/
├── components/
│   ├── common/
│   │   └── Navigation.jsx          (✏️ Updated - added "Messages" link)
│   └── sections/
│       ├── Contact.jsx              (✏️ Updated - uses API route)
│       └── ContactList.jsx          (⭐ NEW - displays all contacts)
├── pages/
│   ├── contact-list.js              (⭐ NEW - contact list page)
│   └── api/
│       └── contacts.js              (⭐ NEW - API endpoint)
└── utils/
    ├── supabase.js                  (Already exists)
    └── supabaseHelpers.js           (⭐ NEW - helper functions)
```

---

## 🔄 Data Flow

### POST Flow (Submit Contact)
```
User fills form → Click "Send Message"
        ↓
Contact.jsx validates form
        ↓
POST /api/contacts
        ↓
API validates data
        ↓
Insert into Supabase
        ↓
Return success/error to frontend
        ↓
Show success message or error
```

### GET Flow (View Contacts)
```
User clicks "Messages" nav link
        ↓
Navigate to /contact-list page
        ↓
ContactList component loads
        ↓
Fetch /api/contacts
        ↓
API queries Supabase
        ↓
Return data with pagination
        ↓
Render contact cards
```

---

## 🎛️ Configuration Options

### API Sorting
Supported fields: `created_at`, `name`, `email`  
Default: `created_at` (newest first)

### Pagination
- `limit`: 1-1000 records (default: 100)
- `offset`: Skip N records (default: 0)

### Component Props
ContactList has no required props - self-contained

---

## ✅ Quick Checklist

Before deploying:
- [ ] Supabase environment variables set
- [ ] Database table "contacts" created
- [ ] Required columns: name, email, message, created_at
- [ ] Test contact form submission
- [ ] Test contact list display
- [ ] Test navigation links
- [ ] Test dark mode
- [ ] Test responsive design

---

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| 503 error | Check Supabase env vars |
| Form won't submit | Verify email format |
| No data displays | Check API response |
| Styling looks off | Clear .next cache |
| Navigation inactive | Check router.pathname |

---

## 📞 Key Functions

### API Endpoints
- `POST /api/contacts` - Submit contact
- `GET /api/contacts` - Fetch contacts

### Helper Functions
- `createContact(data)` - Insert contact
- `fetchContacts(options)` - Get contacts
- `fetchContactById(id)` - Get single contact
- `updateContact(id, updates)` - Edit contact
- `deleteContact(id)` - Remove contact
- `searchContacts(term)` - Search contacts

### Components
- `Contact` - Form component
- `ContactList` - List display component
- `Navigation` - Updated with new links

### Pages
- `/` - Home with contact form
- `/contact-list` - Contact messages page

---

## 🌐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
```

---

**Last Updated**: April 27, 2026  
**Status**: Production Ready ✅
