export type LogLevel = "log" | "info" | "warn" | "err";

export const logger = (
  msg: string,
  logLevel: LogLevel = "info",
  data?
) => value => {
  if (logLevel === "log") {
    console.log(`|-> ${msg}`);
  }
  if (logLevel === "info")
    console.log(
      `%c|-> %c${msg}`,
      "color: green",
      "color: #03a9f4",
      data ? data : null
    );
  if (logLevel === "warn")
    console.warn(`%c |-> ${msg}`, "color: orange", data ? data : null);
  if (logLevel === "err")
    console.error(`%c |-> ${msg}`, "color: red", data ? data : null);

  return value;
};
