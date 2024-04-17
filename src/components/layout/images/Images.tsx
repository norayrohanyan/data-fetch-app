import { FC, useState, useEffect } from "react";
import { IImages } from "./types";
import { fetchData } from "api/dataAPI";
import Image from "components/common/image/Image";
const Images: FC = () => {
    const [images, setImages] = useState<IImages[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const data: IImages[] = await fetchData<IImages>('photos', 'limit=20');
                setImages(data);
            } catch(e) {
                console.error('Error fetching images:', e);
            }
            setLoading(false);
        };
        fetchImages();
    }, [])

    return (
        <div>
            <h2>images</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {images.map((image) => (
                        <Image key={image.id} title={image.title} url={image.url} thumbnailUrl={image.thumbnailUrl}/>
                    ))}
                </div>
        )}
        </div>
    );
};

export default Images;