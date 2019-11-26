export enum HelloWorlType {
  MSG = 'msg'
}

export class HelloWorld {
  public [HelloWorlType.MSG]: string = null;
}
