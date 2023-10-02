import { format } from "date-fns";
import winston from "winston";

const config = {
  levels: {
    error: 0,
    warn: 1,
    http: 2,
    info: 3,
    debug: 4,
  },
  colors: {
    error: "red",
    warn: "yellow",
    http: "blue",
    info: "green",
    debug: "grey",
  },
};

export function createLogger(logName: string) {
  return winston.createLogger({
    levels: config.levels,
    defaultMeta: { module: logName },
    transports: [
      new winston.transports.Console({
        level: "debug",
        format: winston.format.combine(
          winston.format.printf(
            (info) =>
              `[${logName}] ${format(
                new Date(),
                "yyyy-MM-dd HH:mm:s.SS O"
              )} ${info.level.toUpperCase()}: ${info.message}`
          ),
          winston.format.colorize({ colors: config.colors, all: true })
        ),
      }),

      new winston.transports.File({
        dirname: "./logs",
        filename: `${logName}-Error.log`,
        level: "error",
        format: winston.format.json(),
      }),

      new winston.transports.File({
        dirname: "./logs",
        filename: "debug.log",
        level: "debug",
        format: winston.format.json({ deterministic: true }),
      }),
    ],
  });
}
