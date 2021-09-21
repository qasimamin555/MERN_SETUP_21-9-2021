export default ({markup}) => {
    return `<!Doctype html>
    <html lang='en'>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset='utf-8'>
            <title>MERN Kickstart</title>
        </head>
        <body>
            <div id='root'>${markup}</div>
            <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
    </html>`
}