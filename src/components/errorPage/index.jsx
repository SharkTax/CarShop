import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);

    return(
        <div>
            <h1>Sorry</h1>
            <p>Some error happend while loading the page</p>
            <p>
                <i>{error.statusText || error.data} </i>
            </p>
        </div>
    )
}