export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
export class Alert {
    id?: string;
    type?: AlertType;
    message?: string;
    autoClose?: boolean;
    keepAfterRouteChange?: boolean;
    fade?: boolean;

    constructor(init?: Partial<Alert>) {
        this.id = init?.id;
        this.type = init?.type;
        this.message = init?.message;
        this.autoClose = init?.autoClose;
        this.fade = init?.fade;
        Object.assign(this, init);
    }
}

