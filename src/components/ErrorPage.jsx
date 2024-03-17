import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="bg-green-100  ">
      <div className="text-center">{err}</div>
    </div>
  );
};
export default ErrorPage;
