import ArmorsGalleryContainer from "@/app/[locale]/armors/armors-gallery-container";
import {Suspense} from "react";

const Page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Suspense fallback={<div>Loading...</div>}>
                <ArmorsGalleryContainer/>
            </Suspense>
        </div>
    );
};

export default Page;