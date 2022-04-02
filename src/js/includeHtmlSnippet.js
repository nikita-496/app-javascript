function includeHtmlSnippet() {
  const allElements = document.getElementsByTagName('*');
  for (i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    const file = element.getAttribute('data-snippet');

    if (file) {
      const xmlRequest = new XMLHttpRequest();
      xmlRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            element.innerHTML = this.responseText;
          }

          if (this.status == 404) {
            element.innerHTML = 'Page not found.';
          }

          element.removeAttribute('data-snippet');

          includeHtmlSnippet();
        }
      };
      xmlRequest.open('GET', file, true);
      xmlRequest.send();
      return;
    }
  }
}

includeHtmlSnippet();
