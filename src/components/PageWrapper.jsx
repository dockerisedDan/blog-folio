export default function PageWrapper({ children }) {
    return (
        <div className="min-h-[calc(100vh-96px)] w-full bg-neutral-900 text-white flex flex-col items-center">
            {children}
        </div>
    );
}
