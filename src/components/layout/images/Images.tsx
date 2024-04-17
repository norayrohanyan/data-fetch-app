import { FC, useState, useEffect } from "react";
import { IImages } from "./types";
import { fetchData } from "api/dataAPI";
import Image from "components/common/image/Image";
import styles from "./Images.module.css";
import Loader from "components/common/loader/Loader";
const Images: FC = () => {
    const [images, setImages] = useState<IImages[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const data: IImages[] = await fetchData<IImages>('photos', 'limit=20');
                setImages(data);
            } catch (e) {
                console.error('Error fetching images:', e);
            }
            setLoading(false);
        };
        fetchImages();
    }, [])

    return (
        <div className={styles.imagesContainer}>
            <h2 className={styles.heading}>Images</h2>
            {loading ? (
                <Loader />
            ) : (
                <div className={styles.imageList}>
                    {images.map((image) => (
                        <Image key={image.id} index={image.id} title={image.title} url={image.url} thumbnailUrl={image.thumbnailUrl} />
                    ))}
                </div>
            )}
            <div className={styles.backgroundShapes}></div>
        </div>
    );
};

export default Images;