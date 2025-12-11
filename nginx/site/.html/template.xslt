<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="UTF-8" />
	<xsl:template match="/list">
  <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Box Template 4.0</title>
    <meta name="description" content="Fancy index template" />
    <link rel="apple-touch-icon" href="/.html/favicon/apple-touch-icon.png"/>
    <link rel="icon" href="/.html/favicon/favicon.ico" sizes="any"/>
    <link rel="icon" href="/.html/favicon/icon.svg" type="image/svg+xml"/>
    <link rel="manifest" href="/.html/favicon/manifest.webmanifest"/>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.min.css"
    />
    <link rel="stylesheet" href="/.html/main.css" />
    <script>
      <![CDATA[
        if (
          localStorage.getItem("color-theme") === "dark" ||
          (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      ]]>
    </script>
  </head>
  <body>
    <header class="navbar">
      <a class="logo-link" href="/">
        <img class="logo-image" src="/.html/logo.svg" />
        Box Template 4.0
      </a>
      <button id="theme-toggle" type="button" class="theme-toggle-btn">
        <svg
          id="theme-toggle-dark-icon"
          class="theme-toggle-svg hidden"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          ></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          class="theme-toggle-svg hidden"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <button class="navbar-toggler">
        <div class="icon"></div>
      </button>
      <nav class="collapse">
        <a href="https://github.com/JoCat/beautiful-listing" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </header>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb"></ol>
    </nav>
    <noscript>
      You need to enable javascript to display the site correctly
    </noscript>
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>File Size</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="link"><a href="../">../</a></td>
          <td class="size"></td>
          <td class="date"></td>
        </tr>
        <xsl:for-each select="directory">
          <tr>
            <td class="link"><a href="{.}/"><xsl:value-of select="." />/</a></td>
            <td class="size"></td>
            <td class="date"><xsl:value-of select="./@mtime" /></td>
          </tr>
        </xsl:for-each>
        <xsl:for-each select="file">
          <tr>
            <td class="link"><a href="{.}"><xsl:value-of select="." /></a></td>
            <td class="size"><xsl:value-of select="./@size" /></td>
            <td class="date"><xsl:value-of select="./@mtime" /></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
    <div class="container">
      <div class="js__toggle_content" data-pathname="/">
        <h1>Content for index page</h1>
        <p>Welcome to Box Template 4.0</p>
      </div>
    </div>
    <script src="/.html/main.js"></script>
  </body>
</html>
	</xsl:template>
</xsl:stylesheet>
