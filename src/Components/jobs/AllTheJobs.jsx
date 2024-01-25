import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../../Redux/actions";
import SingleJob from "./SingleJob";

const AllTheJobs = (props) => {
    const jobsEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?limit=100";
    const jobs = useSelector((state) => state.jobs.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!props.search) {
            dispatch(getJobsAction(jobsEndpoint));
        }
    }, []);
    return (
        <>
            {jobs &&
                jobs.map((job) => {
                    return <SingleJob job={job} key={job._id} />;
                })}
        </>
    );
};
export default AllTheJobs;
