import {AccountOutput} from "../../types/Entities.tsx";
import {Button} from "react-bootstrap";
import {useRef, useState} from "react";
import AccountInformation from "../../components/Account/AccountInfo.tsx";
import BackButton from "../../components/util/BackButton.tsx";

export default function AccountDetail(){

    const ownerIdRef = useRef<HTMLInputElement>(null);

    const [accountData, setAccountData] = useState<AccountOutput | null>(null);

    const fetchAccountData = async () => {
        try {
            const ownerId = ownerIdRef.current?.value
            const requestResponse = await fetch(`http://localhost:8080/accounts/${ownerId}/balance`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
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
                <h5 className={"fw-bold"}>Consulta</h5>
                <input type="number" className={"form-control w-25"} ref={ownerIdRef} placeholder={"ID de usuario"}/>
                <Button className={"btn-info my-3"} onClick={fetchAccountData}>Consultar</Button>
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