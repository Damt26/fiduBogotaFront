import {Link} from "react-router-dom";

export default function Home() {

    return <>
        <div className={"d-flex flex-column gap-2 w-50 mx-auto h-100 justify-content-center"}>
            <Link to={"/create"} className={"btn btn-primary shadow-sm"}>
                <i className={"bx bx-user"}> </i>
                Crear cuenta
            </Link>
            <Link to={"/detail"} className={"btn btn-primary"}>
                <i className={"bx bx-search"}> </i>
                Consultar balance
            </Link>
            <Link to={"/transaction"} className={"btn btn-primary"}>
                <i className={"bx bx-receipt"}> </i>
                Realizar transacción
            </Link>
        </div>
    </>
}