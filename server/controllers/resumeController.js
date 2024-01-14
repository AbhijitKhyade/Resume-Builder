const puppeteer = require('puppeteer');

const generateResume = async (req, res) => {
    try {
        const { userData } = req.body;

        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Resume</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }

                    h1 {
                        color: #333;
                    }

                    p {
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <h1>${userData.profile.firstName}'s Resume</h1>
                <p>Email: ${userData.profile.email}</p>
            </body>
            </html>
        `;

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Set the page content
        await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

        // Generate PDF
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
        });

        await browser.close();

        // Send the PDF as a response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating resume:', error);
        res.status(500).send({
            success: false,
            message: 'Internal Server error',
            error: error.message,
        });
    }
};

module.exports = { generateResume };
