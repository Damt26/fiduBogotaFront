import {Card} from "react-bootstrap";
import {AccountOutput} from "../../types/Entities.tsx";

export default function AccountInformation(accountData: AccountOutput) {
    return <>
        <Card className={"shadow-sm w-auto"}>
            <Card.Body>
                <h5 className={"card-title text-center"}>Cuenta</h5>
                <p className={"card-text"}>ID: {accountData?.id}</p>
                <p className={"card-text"}>Dueño: {accountData?.owner}</p>
                <p className={"card-text"}>Saldo: {accountData?.balance}</p>
                <p className={"card-text"}>Creado en: {accountData?.createdOn}</p>
            </Card.Body>
        </Card>
    </>
}