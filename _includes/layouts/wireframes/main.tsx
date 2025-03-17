export default function Main({ title, search }: Lume.Data) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="prose container mx-auto">
        <h2>Wireframes</h2>
        <main>
          <ul>
            {search.pages("wireframe").map((page) => {
              return (
                <li>
                  <a href={page.url}>{page.title}</a>
                </li>
              );
            })}
          </ul>
        </main>
        <footer className="px-2">
          <p>&copy; Paolo Di Pasquale {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
