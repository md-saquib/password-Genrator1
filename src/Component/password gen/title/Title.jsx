import { useContext } from "react";
import { PasswordContext } from "../../PasswordProvider";

const Title = () => {
    const usePassword = useContext(PasswordContext);
    const { password, copied, setCopied } = usePassword;

    function handleCopy() {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);

    }
    return (
        <>
            <div className="flex justify-between">
                <span className="p-3 text-2xl">{password}</span>
                <button className="bg-teal-700 text-sm" onClick={() => handleCopy()}>{copied ? 'COPIED' : 'COPY'}</button>
            </div>

        </>
    )
}
export default Title;