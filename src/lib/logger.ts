import pino from "pino";
import { logflarePinoVercel } from "pino-logflare";

const { stream, send } = logflarePinoVercel({
  apiKey: "8hUcdz3D1dzO",
  sourceToken: "3b4e92f3-5162-46d8-b763-fbe4839a2603", // put in env
});

const logger = pino(
  {
    browser: {
      transmit: {
        level: "error",
        send: send,
      },
    },
    level: "debug",
    base: {
      env: process.env.NODE_ENV,
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
    },
  },
  stream
);

export default logger;
