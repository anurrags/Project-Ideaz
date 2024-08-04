module.exports = {
  apps: [
    {
      name: "server",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "development",
        GEMINI_API_KEY: "AIzaSyAlJVmsHvzf7_G9NOLeAvDZzodAFHkgZeY",
      },
      env_production: {
        NODE_ENV: "production",
        GEMINI_API_KEY: "AIzaSyAlJVmsHvzf7_G9NOLeAvDZzodAFHkgZeY",
      },
    },
  ],

  //   deploy: {
  //     production: {
  //       user: "node",
  //       host: "https://project-ideaz-server.anurags.me/",
  //       ref: "origin/main",
  //       repo: "git@github.com:repo.git",
  //       path: "/var/www/your-app",
  //       "post-deploy":
  //         "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
  //     },
  //   },
};
