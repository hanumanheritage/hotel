<<<<<<< HEAD
/**
 * Google Apps Script for Hanuman Heritage Hotel Booking Website
 * 
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name it "Hanuman Heritage Bookings"
 * 3. Create headers in Row 1: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status
 * 4. Go to Extensions → Apps Script
 * 5. Paste this code
 * 6. Save and deploy as Web App
 * 7. Copy the Web App URL and paste it in script.js
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      data.bookingId || '',
      data.bookingDate || new Date().toISOString(),
      data.checkIn || '',
      data.checkOut || '',
      data.adults || 0,
      data.children || 0,
      data.nights || 0,
      data.roomName || '',
      data.total || 0,
      data.status || 'Confirmed'
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Booking saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Add GET handler to retrieve bookings
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Convert to JSON (skip header row)
    const bookings = [];
    for (let i = 1; i < data.length; i++) {
      bookings.push({
        bookingId: data[i][0],
        bookingDate: data[i][1],
        checkIn: data[i][2],
        checkOut: data[i][3],
        adults: data[i][4],
        children: data[i][5],
        nights: data[i][6],
        roomName: data[i][7],
        total: data[i][8],
        status: data[i][9]
      });
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(bookings))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

=======
/**
 * Google Apps Script for Hanuman Heritage Hotel Booking Website
 * 
 * Instructions:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name it "Hanuman Heritage Bookings"
 * 3. Create headers in Row 1: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status
 * 4. Go to Extensions → Apps Script
 * 5. Paste this code
 * 6. Save and deploy as Web App
 * 7. Copy the Web App URL and paste it in script.js
 */

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      data.bookingId || '',
      data.bookingDate || new Date().toISOString(),
      data.checkIn || '',
      data.checkOut || '',
      data.adults || 0,
      data.children || 0,
      data.nights || 0,
      data.roomName || '',
      data.total || 0,
      data.status || 'Confirmed'
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Booking saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Optional: Add GET handler to retrieve bookings
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Convert to JSON (skip header row)
    const bookings = [];
    for (let i = 1; i < data.length; i++) {
      bookings.push({
        bookingId: data[i][0],
        bookingDate: data[i][1],
        checkIn: data[i][2],
        checkOut: data[i][3],
        adults: data[i][4],
        children: data[i][5],
        nights: data[i][6],
        roomName: data[i][7],
        total: data[i][8],
        status: data[i][9]
      });
    }
    
    return ContentService
      .createTextOutput(JSON.stringify(bookings))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

>>>>>>> Updated files
