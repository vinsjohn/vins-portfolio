// BUG FIX: Brighten photos and fix placeholder heading
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { FileText, Play, X } from 'lucide-react';
import { db, storage } from '../firebase';

const getMediaType = (url: string) => {
  if (!url) return 'image';
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes('.pdf') || lowerUrl.includes('%2fpdf')) return 'pdf';
  if (lowerUrl.includes('.mp4') || lowerUrl.includes('.webm') || lowerUrl.includes('.mov') || lowerUrl.includes('%2fvideo')) return 'video';
  return 'image';
};

interface MediaElement {
  id: string;
  src: string;
  alt: string;
  caption: string;
  mediaType: 'image' | 'video' | 'pdf';
  [key: string]: any;
}

const HARDCODED_PHOTOS: MediaElement[] = [
  { id: 'ph1', src: 'https://images.unsplash.com/photo-1588725832791-d24aa66b53cb?w=1280&q=80', alt: 'Behind the lens', caption: 'Corporate shoot', mediaType: 'image' },
  { id: 'ph2', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1280&q=80', alt: 'Wedding moment', caption: 'Wedding', mediaType: 'image' },
  { id: 'ph3', src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1280&q=80', alt: 'Camera gear', caption: 'Equipment', mediaType: 'image' },
  { id: 'ph4', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1280&q=80', alt: 'Event coverage', caption: 'Event', mediaType: 'image' },
  { id: 'ph5', src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1280&q=80', alt: 'Concert lights', caption: 'Live event', mediaType: 'image' },
  { id: 'ph6', src: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1280&q=80', alt: 'Film production', caption: 'Film set', mediaType: 'image' },
  { id: 'ph7', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1280&q=80', alt: 'Landscape', caption: 'Travel', mediaType: 'image' },
  { id: 'ph8', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1280&q=80', alt: 'Portrait session', caption: 'Portrait', mediaType: 'image' },
  { id: 'ph9', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1280&q=80', alt: 'Product shot', caption: 'Product', mediaType: 'image' },
];

export const Photos: React.FC = () => {
  const [lightbox, setLightbox] = useState<MediaElement | null>(null);
  const [firebasePhotos, setFirebasePhotos] = useState<MediaElement[]>([]);
  const [storagePhotos, setStoragePhotos] = useState<MediaElement[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'photos'), orderBy('order', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const photosData = snapshot.docs.map(doc => {
        const data = doc.data();
        const srcUrl = data.url || '';
        return {
          id: doc.id,
          src: srcUrl,
          alt: data.alt || 'Media item',
          caption: data.caption || 'Upload',
          mediaType: data.type || getMediaType(srcUrl),
          ...data
        } as MediaElement;
      });
      setFirebasePhotos(photosData);
    }, (error) => {
      console.error("Error fetching photos from Firebase:", error);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchStorageFiles = async () => {
      try {
        const foldersToScan = ['', 'photos', 'videos', 'documents'];
        const files: MediaElement[] = [];

        for (const folder of foldersToScan) {
          try {
            const listRef = ref(storage, folder);
            const res = await listAll(listRef);
            
            for (const itemRef of res.items) {
              const url = await getDownloadURL(itemRef);
              // Avoid duplicates if it's already in firestore
              
              files.push({
                id: itemRef.fullPath,
                src: url,
                alt: itemRef.name,
                caption: folder ? folder.toUpperCase() : 'STORAGE UPLOAD',
                mediaType: getMediaType(url)
              });
            }
          } catch (folderErr) {
            console.log(`Could not list folder ${folder}:`, folderErr);
          }
        }
        
        setStoragePhotos(files);
      } catch (err) {
        console.error("Error fetching from storage:", err);
      }
    };

    fetchStorageFiles();
  }, []);

  // Filter out duplicates between Firestore and Storage (based on URL)
  const displayPhotos = [...HARDCODED_PHOTOS, ...firebasePhotos];
  const storageOnlyPhotos = storagePhotos.filter(sp => !firebasePhotos.some(fp => fp.src === sp.src));
  const allPhotos = [...displayPhotos, ...storageOnlyPhotos];

  return (
    <section id="photos" className="bg-[#1F2029] py-24 px-6 md:px-12">
      <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-3.5">
        <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
        Gallery
      </div>
      <h2 className="font-heading text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-tight mb-12">
        THE <span className="text-[#CAFF00]">GALLERY</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {allPhotos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden border border-[#B5B6C7]/10 hover:border-[#CAFF00]/30 transition-all duration-300 cursor-crosshair aspect-[4/3] bg-[#111115]"
            onClick={() => setLightbox(photo)}
          >
            {photo.mediaType === 'video' ? (
              <video
                src={photo.src}
                muted
                loop
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover brightness-[0.65] saturate-[0.75] group-hover:brightness-[0.75] group-hover:saturate-[0.9] group-hover:scale-[1.04] transition-all duration-700"
              />
            ) : photo.mediaType === 'pdf' ? (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-[#CAFF00] brightness-[0.65] group-hover:brightness-[0.85] group-hover:scale-[1.04] transition-all duration-700">
                <FileText size={42} className="opacity-60 mb-3" />
                <span className="font-mono-tech text-[0.65rem] tracking-[0.2em] opacity-80 uppercase">PDF Viewer</span>
              </div>
            ) : (
              <img
                src={photo.src}
                alt={photo.alt}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.65] saturate-[0.75] group-hover:brightness-[0.75] group-hover:saturate-[0.9] group-hover:scale-[1.04] transition-all duration-700"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            
            {(photo.mediaType === 'video' || photo.mediaType === 'pdf') && (
              <div className="absolute top-4 left-4 text-[#CAFF00] opacity-80 z-10 bg-black/40 backdrop-blur-sm p-2 rounded-sm pointer-events-none">
                {photo.mediaType === 'video' ? <Play size={16} /> : <FileText size={16} />}
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
              <div className="font-heading text-lg font-bold text-white mb-1">
                {photo.alt}
              </div>
              <div className="font-mono-tech text-[0.52rem] tracking-[0.3em] text-[#CAFF00] uppercase">
                {photo.caption}
              </div>
            </div>
            <div className="absolute top-3 right-3 w-8 h-8 border border-[#CAFF00]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#CAFF00] text-[0.6rem]">+</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4000] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 md:p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-6xl max-h-[95vh] flex items-center justify-center h-full rounded-sm overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
                className="absolute z-[50] top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur border border-white/10 hover:border-[#CAFF00]/40 flex items-center justify-center text-[#B5B6C7] hover:text-[#CAFF00] transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full h-full flex flex-col items-center justify-center relative">
                {lightbox.mediaType === 'video' ? (
                  <video
                    src={lightbox.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black shadow-2xl"
                  />
                ) : lightbox.mediaType === 'pdf' ? (
                  <iframe
                    src={`${lightbox.src}#view=FitH`}
                    className="w-full h-full bg-white shadow-2xl rounded-sm"
                    title={lightbox.alt}
                  />
                ) : (
                  <img
                    src={lightbox.src}
                    alt={lightbox.alt}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                )}
                
                {lightbox.mediaType !== 'pdf' && (
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <h3 className="font-heading text-2xl md:text-3xl font-black text-white uppercase tracking-wider mb-2 drop-shadow-lg">{lightbox.alt}</h3>
                    <p className="font-mono-tech text-[0.65rem] md:text-xs tracking-[0.3em] text-[#CAFF00] uppercase drop-shadow-md">{lightbox.caption}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

