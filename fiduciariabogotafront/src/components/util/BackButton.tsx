import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function BackButton() {
    return <>
    <div className={"w-100 justify-content-start"}>
        <Link to={"/"} className={"text-decoration-none"} >
            <Button className={"bg-secondary rounded-circle"}>
                <i className={"bx bx-arrow-back"}></i>
            </Button>
        </Link>
    </div>
    </>
}