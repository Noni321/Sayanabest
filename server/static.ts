import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  // In production, the bundled server is at dist/index.cjs
  // and the public files are at dist/public/
  // When running with 'node dist/index.cjs', __dirname will be the directory of the executable
  // Use require.main?.filename to get the path of the main script being run
  const distPath = path.join(path.dirname(require.main?.filename || __dirname), "public");
  
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
