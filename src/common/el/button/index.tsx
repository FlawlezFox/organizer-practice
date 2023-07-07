import IButton from "../../interfaces/IButton";

const Button = ({ className, actName, onClick, isDisabled }: IButton) => {
    return (
        <>
            {
                isDisabled
                    ? <button className={className} onClick={onClick} disabled={true}> {actName} </button>
                    : <button className={className} onClick={onClick}> {actName} </button>
            }
        </>
    );
}

export default Button;