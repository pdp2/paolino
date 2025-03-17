export default ({ title, children }: Lume.Data) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <h1 className="site-heading mb-8">Paolo Di Pasquale</h1>
          <p className="site-subheading">Full-stack web engineer</p>
        </header>
        <main className="prose">{children}</main>
        <footer>
          <p>&copy; Paolo Di Pasquale {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
};
