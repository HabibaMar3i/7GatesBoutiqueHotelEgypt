import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
                <Spinner 
                    size="lg" 
                    color="warning"
                    classNames={{
                        circle1: "border-b-[#ba8b4e]",
                        circle2: "border-b-[#ba8b4e]"
                    }}
                />
                <p className="mt-4 text-[#ba8b4e] font-semibold">Loading...</p>
            </div>
        </div>
    );
}