import Loader from "components/common/loader/Loader";
import Image from "components/common/image/Image";
import { useFetch } from "hooks/useFetch";
import styles from "./Images.module.css";
import { fetchData } from "api/dataAPI";
import { IImages } from "./types";
import { FC } from "react";

const Images: FC = () => {
    const {data: images, isLoading: loading} = useFetch<IImages[]>(() => fetchData<IImages>('images', 'limit=20'));
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