import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Gallery.css';

function Gallery() {
    const [albums, setAlbums] = useState({});
    const [currentAlbum, setCurrentAlbum] = useState('');
    const [photoIndex, setPhotoIndex] = useState(-1);

    useEffect(() => {
        fetch('/gallery/index.html')
            .then((response) => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const imgElements = doc.querySelectorAll('.img-gallery');
                const albumMap = {};

                imgElements.forEach((img) => {
                    const src = img.getAttribute('src');
                    const title = img.getAttribute('alt') || 'Gallery Image';
                    const match = src.match(/images\/gallery\/([^/]+)/);
                    let album = match ? decodeURIComponent(match[1]) : 'Default';
                    album = album.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                    const image = {
                        src,
                        title,
                        description: '',
                    };

                    if (!albumMap[album]) albumMap[album] = [];
                    albumMap[album].push(image);
                });

                setAlbums(albumMap);
                setCurrentAlbum(Object.keys(albumMap)[0] || '');
            })
            .catch((error) => console.error('Error loading gallery:', error));
    }, []);

    const images = albums[currentAlbum] || [];

    return (
        <div className="sectionPage">
            <h2>Gallery</h2>

            <div className="album-selector">
                <h3>Albums</h3>
                {Object.keys(albums).map((albumName) => (
                    <button
                        key={albumName}
                        onClick={() => { setCurrentAlbum(albumName); setPhotoIndex(-1); }}
                        className={albumName === currentAlbum ? 'active' : ''}
                    >
                        {albumName}
                    </button>
                ))}
            </div>
            <h3>Photos in this Album</h3>
            {images.length > 0 ? (
                <>
                    <div className="gallery-grid">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="gallery-thumb"
                                onClick={() => setPhotoIndex(index)}
                            >
                                <img src={img.src} alt={img.title} />
                            </div>
                        ))}
                    </div>
                    <Lightbox
                        slides={images}
                        open={photoIndex >= 0}
                        index={photoIndex}
                        close={() => setPhotoIndex(-1)}
                    />
                </>
            ) : (
                <p>Loading gallery...</p>
            )}
        </div>
    );
}

export default Gallery;
