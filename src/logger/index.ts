export class Logger {
  prefix = '【BIZ】: ';
  constructor(prefix?: string) {
    this.prefix = prefix ? `【${prefix}】: ` : this.prefix;
  }
  log(...args: any[]) {
    console.log(this.prefix, ...args);
  }
  warn(...args: any[]) {
    console.warn(this.prefix, ...args);
  }
  error(...args: any[]) {
    console.error(this.prefix, ...args);
  }
}

export const bizLogger = new Logger();
