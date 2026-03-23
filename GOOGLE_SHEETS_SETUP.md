# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration for your contact form.

## Option 1: Google Apps Script (Recommended)

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Add headers in row 1: `Timestamp`, `Name`, `Email`, `Company`, `Message`

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code and paste the code from `google-apps-script.js`
3. Replace `YOUR_SPREADSHEET_ID_HERE` with your actual spreadsheet ID (found in the URL)
4. Save the script with a name like "Contact Form Handler"

### Step 3: Deploy the Script
1. Click **Deploy > New deployment**
2. Select type: **Web app**
3. Description: "Contact Form Handler"
4. Execute as: **Me**
5. Who has access: **Anyone** (important for form submissions)
6. Click **Deploy**
7. **Copy the deployment URL** - this is your `GOOGLE_SCRIPT_URL`

### Step 4: Environment Variables
Add to your `.env.local` file:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

## Option 2: Google Sheets API (Advanced)

If you prefer to use the Google Sheets API directly:

1. Enable Google Sheets API in Google Cloud Console
2. Create credentials and get an API key
3. Set these environment variables:
```
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SHEETS_SHEET_NAME=Sheet1
GOOGLE_SHEETS_API_KEY=your_api_key
```

## Testing

After setup, test your contact form. Submissions should appear in your Google Sheet with:
- Timestamp
- Name
- Email
- Company
- Message

## Troubleshooting

- **403 Forbidden**: Make sure "Who has access" is set to "Anyone" in deployment settings
- **Script errors**: Check the Apps Script execution logs
- **Environment variables**: Make sure `.env.local` is in your project root and restart the dev server

## Security Note

The current setup allows anyone to submit data. For production, consider adding:
- reCAPTCHA verification
- Rate limiting
- Input sanitization
- CORS restrictions