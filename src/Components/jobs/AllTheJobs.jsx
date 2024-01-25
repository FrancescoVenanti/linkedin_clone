import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../../Redux/actions";
import SingleJob from "./SingleJob";

const AllTheJobs = () => {
    const jobs = useSelector((state) => state.jobs.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobsAction());
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
