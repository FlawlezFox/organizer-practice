export default interface IButton {
    className: string;
    actName: string;
    onClick: () => void;
    isDisabled?: boolean;
}