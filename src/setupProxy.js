import proxy from "http-proxy-middleware";

module.exports = function (app) {
  const headers = {
    "Content-Type": "application/json",
  };
  app.use(
    proxy("/profile", {
      target: "http://127.0.0.1:8000/apiapp/",
      changeOrigin: true,
      secure: false,
      headers: headers,
    })
  );
};
