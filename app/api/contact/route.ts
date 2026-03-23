
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get Google Apps Script URL from environment variables
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Prepare data for Google Sheets
    const formData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      message: message.trim(),
      timestamp: new Date().toDateString(),
    };
console.log('Received contact form data:', formData);
    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Apps Script error:', errorText);
      return NextResponse.json(
        { error: 'Failed to save data to Google Sheets' },
        { status: 500 }
      );
    }

    const result = await response.json();

    // Check if the Google Apps Script returned an error
    if (result.error) {
      console.error('Google Apps Script returned error:', result.error);
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    console.log('Contact form data saved successfully:', result);

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      data: result
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}