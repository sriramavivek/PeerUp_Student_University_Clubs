import fournotfour from "./assets/undraw_page-not-found_6wni.svg";

export default function NotFound() {
    return (
        <div className="container container-fluid min-vh-100 min-vw-100 bg-light">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center mt-5">
                    <img src={fournotfour} alt="Page Not Found" width={300} height={300} className="mb-3"/>
                    <h3>Page Not Found</h3>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
}