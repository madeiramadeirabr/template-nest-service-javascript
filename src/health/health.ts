import { ResourceInterface } from '../interfaces/resource.interface';
import { StatusInterface } from './interfaces/status.interface';

export class Health implements ResourceInterface {
  private _alive: boolean;
  private _grpcPort: string;
  private _restPort: string;
  private _env: string;
  private _message: string;
  private _applicationName: string;

  getResource(): StatusInterface {
    return {
      alive: this.alive,
      applicationName: this.applicationName,
      grpcPort: this.grpcPort,
      restPort: this.restPort,
      env: this.env,
      message: this.message,
    };
  }

  get restPort(): string {
    return this._restPort;
  }

  set restPort(value: string) {
    this._restPort = value;
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

  get grpcPort(): string {
    return this._grpcPort;
  }
  set grpcPort(value: string) {
    this._grpcPort = value;
  }

  get alive(): boolean {
    return this._alive;
  }
  set alive(value: boolean) {
    this._alive = value;
  }
}
