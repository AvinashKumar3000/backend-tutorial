import useAuth from "../../hooks/useAuth";

const Loading = () => {
    const { loading } = useAuth();
    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;