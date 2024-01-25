import { useState } from "react";
import { Button } from "react-bootstrap";

const SingleJob = (props) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="bg-white rounded-3 border border-2 p-2 px-3 mt-2">
            <div>
                <h4>{props.job.title}</h4>
                <a href={props.job.url} target="_blank" className="fw-bold text-decoration-none">
                    {props.job.company_name}
                </a>
                <p className="mt-2 mb-0">
                    Category: <span className="fw-medium">{props.job.category}</span>
                </p>
                {props.job.salary !== "" && (
                    <p className="mb-0">
                        Salary: <span className="fw-medium">{props.job.salary}</span>
                    </p>
                )}
                <p className="text-black-50">Published: {props.job.publication_date.slice(0, 10)}</p>
            </div>
            {showMore && <div dangerouslySetInnerHTML={{ __html: props.job.description }} />}
            <div className="d-flex justify-content-end">
                <Button variant="outline-dark" onClick={() => setShowMore(!showMore)}>
                    Show more...
                </Button>
            </div>
        </div>
    );
};
export default SingleJob;
