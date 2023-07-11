export default interface IButton {
    className: string;
    actName: string;
    onClick?: (...args: any[]) => void;
    isDisabled?: boolean;
}