import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleOnClick = (): void => navigate("/");

  return (
    <div className="w-screen h-screen flex justify-center items-center p-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight">
          Page not found
        </h1>
        <button
          type="button"
          className="btn-primary w-full md:w-40"
          onClick={handleOnClick}
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
