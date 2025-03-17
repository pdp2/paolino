export default function Single({ title, children }: Lume.Data) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="container mx-auto py-4">
        <header className="prose mb-4">
          <h1>{title}</h1>
        </header>
        <main className="border">{children}</main>
      </body>
    </html>
  );
}
