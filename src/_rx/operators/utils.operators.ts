import { map } from "rxjs/operators";
import { LogLevel, logger } from "@app/operators";

export const logger$ = <T>(msg: string, logLevel: LogLevel = "info") =>
  map(
    data => {
      logger(msg, logLevel, data);
      return data as T;
    },
    err => {
      logger(err, "err");
    }
  );
