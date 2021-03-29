import { ResourceInterface } from '../interfaces/resource.interface';
import { StatusInterface } from './interfaces/status.interface';

export class Health implements ResourceInterface {
  private _alive: boolean;
  private _host: string;
  private _port: string;
  private _env: string;
  private _message: string;
  private _applicationName: string;

  getResource(): StatusInterface {
    return {
      alive: this.alive,
      applicationName: this.applicationName,
      host: this.host,
      port: this.port,
      env: this.env,
      message: this.message,
    };
  }

  get applicationName(): string {
    return this._applicationName;
  }

  set applicationName(value: string) {
    this._applicationName = value;
  }

  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  get env(): string {
    return this._env;
  }
  set env(value: string) {
    this._env = value;
  }

  get port(): string {
    return this._port;
  }
  set port(value: string) {
    this._port = value;
  }

  get host(): string {
    return this._host;
  }
  set host(value: string) {
    this._host = value;
  }

  get alive(): boolean {
    return this._alive;
  }
  set alive(value: boolean) {
    this._alive = value;
  }
}
