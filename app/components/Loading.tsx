export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <video
                className="w-full h-full object-cover"
                src="/loader.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
}