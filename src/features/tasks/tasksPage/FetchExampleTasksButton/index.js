import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import Button from "../Button";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
            {
                loading
                    ? "Loading..."
                    : "Get an example task"
            }
        </Button>
    );
};

export default FetchExampleTasksButton;