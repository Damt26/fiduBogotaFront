import {AccountOutput} from "../../types/Entities.tsx";
import {Button} from "react-bootstrap";
import {useRef, useState} from "react";
import AccountInformation from "../../components/Account/AccountInfo.tsx";
import BackButton from "../../components/util/BackButton.tsx";

export default function CreateAccount() {

    const [accountData, setAccountData] = useState<AccountOutput | null>(null);

    const ownerNameRef = useRef<HTMLInputElement>(null);

    const saveUserAccount = async () => {
        try {
            const ownerName = ownerNameRef.current?.value
            const requestResponse = await fetch("http://localhost:8080/accounts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    owner: ownerName
                }),
            }).then(async response => {
                return await response.json() as AccountOutput;
            }).catch(console.error);

            setAccountData(requestResponse as AccountOutput);
        } catch (err) {
            console.error(err);
        }
    }

    return <>
        <BackButton></BackButton>
        <div className="container text-center mt-4">
            <div className={"d-flex justify-content-center align-items-center flex-column align-content-center"}>
                <h5 className={"fw-bold"}>Creación</h5>
                <input type="text" className={"form-control w-25"} ref={ownerNameRef}
                       placeholder={"Nombre de usuario"}/>
                <Button className={"btn-success w-auto my-3"} onClick={saveUserAccount}>Guardar</Button>
            </div>
        </div>

        <div className="d-flex w-100 justify-content-center">
            <div className={"my-4 mx-auto"}>
                <AccountInformation owner={accountData?.owner}
                                    balance={accountData?.balance}
                                    id={accountData?.id}
                                    createdOn={accountData?.createdOn}>
                </AccountInformation>
            </div>
        </div>
    </>
}