import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db, storage, googleProvider } from '../firebase';
import { X, Upload, Image as ImageIcon, FileText, Loader2, LogOut, Film } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [uploadType, setUploadType] = useState<'photo' | 'document' | 'video'>('photo');
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      setError('');
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first.');
      return;
    }
    if ((uploadType === 'photo' || uploadType === 'video') && (!title || !caption)) {
      setError('Please fill in Alt Text and Caption.');
      return;
    }
    if (uploadType === 'document' && !title) {
      setError('Please fill in the Title.');
      return;
    }

    setError('');
    setSuccess('');
    setIsUploading(true);
    setProgress(0);

    try {
      // 1. Upload to Storage
      const storageRef = ref(storage, `${uploadType}s/${Date.now()}_${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(prog);
        },
        (err) => {
          setError(err.message);
          setIsUploading(false);
        },
        async () => {
          // 2. Get Download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // 3. Save to Firestore
          if (uploadType === 'photo' || uploadType === 'video') {
            await addDoc(collection(db, 'photos'), {
              url: downloadURL,
              alt: title,
              caption: caption,
              order: Date.now(),
              type: uploadType,
              createdAt: new Date().toISOString()
            });
          } else {
            await addDoc(collection(db, 'documents'), {
              title: title,
              url: downloadURL,
              category: category || 'PDF Document',
              createdAt: new Date().toISOString()
            });
          }

          setSuccess(`${uploadType === 'photo' ? 'Photo' : uploadType === 'video' ? 'Video' : 'Document'} uploaded successfully!`);
          setIsUploading(false);
          setFile(null);
          setTitle('');
          setCaption('');
          setCategory('');
          
          // Clear success message after 3 seconds
          setTimeout(() => setSuccess(''), 3000);
        }
      );
    } catch (err: any) {
      setError(err.message);
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      >
        <div className="relative w-full max-w-2xl bg-[#1F2029] border border-[#CAFF00]/20 p-6 md:p-10 my-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#B5B6C7] hover:text-[#CAFF00] transition-colors"
          >
            <X size={24} />
          </button>

          <div className="font-mono-tech text-[0.57rem] tracking-[0.45em] text-[#CAFF00] flex items-center gap-3.5 uppercase mb-6">
            <span className="w-5 h-[1px] bg-[#CAFF00] shadow-[0_0_4px_#CAFF00]" />
            Admin Panel
          </div>

          {!user ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider">Admin Access Required</h2>
              <button
                onClick={handleLogin}
                className="bg-[#CAFF00] text-black font-mono-tech text-xs tracking-widest uppercase px-8 py-4 hover:bg-white transition-colors"
              >
                Sign in with Google
              </button>
              {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
            </div>
          ) : user.email !== 'pixelwhite.ads@gmail.com' ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-heading font-bold text-red-500 mb-4 uppercase tracking-wider">Access Denied</h2>
              <p className="text-[#B5B6C7] mb-6">You do not have permission to access this panel.</p>
              <button onClick={handleLogout} className="text-[#CAFF00] hover:underline text-sm font-mono-tech uppercase tracking-widest">Sign Out</button>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-8 border-b border-[#B5B6C7]/10 pb-4">
                <div className="text-sm text-[#B5B6C7]">Logged in as <span className="text-white">{user.email}</span></div>
                <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider font-mono-tech">
                  <LogOut size={14} /> Sign Out
                </button>
              </div>

              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setUploadType('photo')}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-mono-tech text-xs tracking-widest uppercase border transition-colors ${uploadType === 'photo' ? 'border-[#CAFF00] text-[#CAFF00] bg-[#CAFF00]/5' : 'border-[#B5B6C7]/20 text-[#B5B6C7] hover:border-[#B5B6C7]/50'}`}
                >
                  <ImageIcon size={16} /> <span className="hidden sm:inline">Upload </span>Photo
                </button>
                <button
                  onClick={() => setUploadType('video')}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-mono-tech text-xs tracking-widest uppercase border transition-colors ${uploadType === 'video' ? 'border-[#CAFF00] text-[#CAFF00] bg-[#CAFF00]/5' : 'border-[#B5B6C7]/20 text-[#B5B6C7] hover:border-[#B5B6C7]/50'}`}
                >
                  <Film size={16} /> <span className="hidden sm:inline">Upload </span>Video
                </button>
                <button
                  onClick={() => setUploadType('document')}
                  className={`flex-1 py-3 flex items-center justify-center gap-2 font-mono-tech text-xs tracking-widest uppercase border transition-colors ${uploadType === 'document' ? 'border-[#CAFF00] text-[#CAFF00] bg-[#CAFF00]/5' : 'border-[#B5B6C7]/20 text-[#B5B6C7] hover:border-[#B5B6C7]/50'}`}
                >
                  <FileText size={16} /> <span className="hidden sm:inline">Upload </span>PDF
                </button>
              </div>

              <form onSubmit={handleUpload} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono-tech tracking-widest text-[#B5B6C7] uppercase mb-2">Select File</label>
                  <input
                    type="file"
                    accept={uploadType === 'photo' ? 'image/*' : uploadType === 'video' ? 'video/*' : '.pdf'}
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    className="w-full bg-black border border-[#B5B6C7]/20 text-white p-3 text-sm focus:border-[#CAFF00] outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-mono-tech file:bg-[#CAFF00]/10 file:text-[#CAFF00] hover:file:bg-[#CAFF00]/20"
                  />
                </div>

                {(uploadType === 'photo' || uploadType === 'video') ? (
                  <>
                    <div>
                      <label className="block text-xs font-mono-tech tracking-widest text-[#B5B6C7] uppercase mb-2">Alt Text / Title</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Real Estate Exterior"
                        className="w-full bg-black border border-[#B5B6C7]/20 text-white p-3 text-sm focus:border-[#CAFF00] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tech tracking-widest text-[#B5B6C7] uppercase mb-2">Caption / Category</label>
                      <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="e.g. Architecture"
                        className="w-full bg-black border border-[#B5B6C7]/20 text-white p-3 text-sm focus:border-[#CAFF00] outline-none transition-colors"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-mono-tech tracking-widest text-[#B5B6C7] uppercase mb-2">Document Title</label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Real Estate Portfolio"
                        className="w-full bg-black border border-[#B5B6C7]/20 text-white p-3 text-sm focus:border-[#CAFF00] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tech tracking-widest text-[#B5B6C7] uppercase mb-2">Size / Description (Optional)</label>
                      <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="e.g. 15 MB"
                        className="w-full bg-black border border-[#B5B6C7]/20 text-white p-3 text-sm focus:border-[#CAFF00] outline-none transition-colors"
                      />
                    </div>
                  </>
                )}

                {error && <div className="text-red-500 text-sm bg-red-500/10 p-3 border border-red-500/20">{error}</div>}
                {success && <div className="text-[#CAFF00] text-sm bg-[#CAFF00]/10 p-3 border border-[#CAFF00]/20">{success}</div>}

                <button
                  type="submit"
                  disabled={isUploading}
                  className="w-full bg-[#CAFF00] text-black font-mono-tech text-xs tracking-widest uppercase py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isUploading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Uploading... {Math.round(progress)}%
                    </>
                  ) : (
                    <>
                      <Upload size={16} />
                      Upload to Website
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
