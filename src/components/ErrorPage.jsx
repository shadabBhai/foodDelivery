import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>{err.status}</h3>
    </div>
  );
};
export default ErrorPage;
