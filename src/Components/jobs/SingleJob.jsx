const SingleJob = (props) => {
    return (
        <div className="bg-white rounded-3 border border-2 p-2 px-3 mt-2">
            <div>
                <h3>{props.job.title}</h3>
                <a href={props.job.url} target="_blank" className="fw-bold text-decoration-none">
                    {props.job.company}
                </a>
                <p>{props.job.category}</p>
                <p className="text-black-50">{props.job.publication_date}</p>
            </div>
        </div>
    );
};
export default SingleJob;
