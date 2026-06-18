import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

// Import all local images from your gallery folder
import gallery1 from '../../assets/images/gallery/gallery-1.jpeg';
import gallery2 from '../../assets/images/gallery/samplemagicframe.mp4';
import gallery3 from '../../assets/images/gallery/gallery-3.jpeg';
import gallery4 from '../../assets/images/gallery/gallery-4.jpeg';
import gallery5 from '../../assets/images/gallery/unboxingVideo.mp4';
import gallery6 from '../../assets/images/gallery/unboxingVideo2.mp4';
import gallery7 from '../../assets/images/gallery/gallery-2.jpeg';
import gallery8 from '../../assets/images/gallery/gallery-5.jpeg';
import thumb1 from '../../assets/images/gallery/thumb1.jpeg';
import thumb2 from '../../assets/images/gallery/thumb2.jpeg';
import thumb3 from '../../assets/images/gallery/thumb3.jpeg';

// Import local video

const galleryItems = [
  { 
    id: 1, 
    type: 'image', 
    url: gallery1, 
    title: 'Farawell Magic Polaroid Gift' 
  },
  { 
    id: 2, 
    type: 'video', 
    url: gallery2, 
    title: 'Customized Frame' ,
    thumbnail :thumb3
  },
  { 
    id: 3, 
    type: 'image', 
    url: gallery3, 
    title: 'Custom unique magic gifts' 
  },
  { 
    id: 4, 
    type: 'image', 
    url: gallery4, 
    title: 'Mini polaroids' 
  },
  { 
    id: 5, 
    type: 'video', 
    url: gallery5, 
    title: 'Unboxing Experience' ,
    thumbnail :thumb2 
  },
  { 
    id: 6, 
    type: 'video', 
    url: gallery6, 
    title: 'custumor surprise reaction' , 
    thumbnail :thumb1
  },
  { 
    id: 7, 
    type: 'image', 
    url: gallery7, 
    title: 'Personalized Gift' 
  },
  { 
    id: 8, 
    type: 'image', 
    url: gallery8, 
    title: 'Combo frames' 
  },
];

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-gray-600">
            See what our customers have created with Foto Magic
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedMedia(item)}
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.url} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                {item.type === 'video' && (
                  <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaPlay className="text-primary" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={() => setSelectedMedia(null)}>
            <button 
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedMedia(null)}
            >
              <FaTimes />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === 'video' ? (
                <video 
                  src={selectedMedia.url} 
                  controls 
                  autoPlay 
                  className="w-full rounded-lg"
                />
              ) : (
                <img 
                  src={selectedMedia.url} 
                  alt={selectedMedia.title}
                  className="w-full rounded-lg"
                />
              )}
              <p className="text-white text-center mt-4">{selectedMedia.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;