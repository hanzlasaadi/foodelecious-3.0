const printer = require('node-printer');
const handlebars = require('handlebars');
const escpos = require('escpos');
const qrCode = require('qrcode');

// Replace 'printer_device_usb_address' with the actual USB address of your thermal printer
const printerDeviceAddress = 'printer_device_usb_address';

// Create a USB printer device
// const device = new escpos.USB(printerDeviceAddress);
// const printerInstance = new escpos.Printer(device);

// Sample receipt data
const receiptData = {
    customerName: 'John Doe',
    items: [
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
    ],
    total: 30,
};

// Read your receipt template from a file or define it as a string
const receiptTemplate = `
    Customer: {{ customerName }}
    Items:
    {{#each items}}
        - {{ name }}: ${{ price }}
    {{/each}}
    ------------------------
    Total: ${{ total }}
`;

// Compile the template
const compiledTemplate = handlebars.compile(receiptTemplate);

// Generate receipt content
const receiptContent = compiledTemplate(receiptData);
console.log(receiptContent)
// Function to print the receipt
function printReceipt() {
    device.open(() => {
        printerInstance
            .text(receiptContent)
            .qrimage('https://example.com', { type: 'png' }) // Replace with your QR code data
            .cut()
            .close();
    });
}

// Print the receipt
// printReceipt();
