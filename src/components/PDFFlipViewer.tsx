import React, { useState, useRef, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// PDF.js worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/** Get direct PDF URL - for Google Drive use download link */
export const getPdfDownloadUrl = (fileId: string) =>
  `https://drive.google.com/uc?export=download&id=${fileId}`;

const PAGE_WIDTH = 380;
const PAGE_HEIGHT = 520;

const PDFPage = React.forwardRef<HTMLDivElement, { pageNumber: number }>(
  ({ pageNumber }, ref) => (
    <div
      ref={ref}
      className="pdf-page bg-white shadow-lg flex items-center justify-center overflow-hidden"
      style={{ width: PAGE_WIDTH, height: PAGE_HEIGHT }}
    >
      <Page
        pageNumber={pageNumber}
        width={PAGE_WIDTH - 20}
        renderTextLayer={true}
        renderAnnotationLayer={true}
      />
    </div>
  )
);
PDFPage.displayName = 'PDFPage';

interface PDFFlipViewerProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

export const PDFFlipViewer: React.FC<PDFFlipViewerProps> = ({ pdfUrl, title, onClose }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const bookRef = useRef<any>(null);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: Error) => {
    setError(err.message || 'Failed to load PDF');
    setLoading(false);
  }, []);

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const flipNext = () => bookRef.current?.pageFlip()?.flipNext('bottom');
  const flipPrev = () => bookRef.current?.pageFlip()?.flipPrev('top');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[3000] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 border-b border-[#CAFF00]/20 bg-black/80">
          <div className="font-mono-tech text-[0.6rem] tracking-[0.3em] text-[#CAFF00] uppercase truncate max-w-[60%]">
            {title}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono-tech text-[0.55rem] tracking-[0.25em] text-[#B5B6C7]">
              {currentPage + 1} / {numPages || '—'}
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 border border-[#CAFF00]/40 flex items-center justify-center text-[#CAFF00] hover:bg-[#CAFF00]/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mt-20">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="font-mono-tech text-[0.6rem] tracking-[0.3em] text-[#CAFF00] uppercase animate-pulse">
                Loading PDF...
              </div>
            }
          >
            {error && (
              <div className="text-center">
                <div className="font-mono-tech text-sm text-red-400 mb-4">{error}</div>
                <p className="text-[#B5B6C7] text-xs max-w-md mb-6">
                  Large PDFs (50MB+) may fail to load in the viewer. You can open the PDF directly in a new tab.
                </p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono-tech text-[0.6rem] tracking-[0.25em] text-[#CAFF00] border border-[#CAFF00]/40 px-6 py-3 hover:bg-[#CAFF00]/10 transition-colors uppercase"
                >
                  Open in new tab
                </a>
              </div>
            )}

            {!loading && !error && numPages > 0 && (
            <>
              {/* Nav buttons */}
              <div className="flex items-center gap-6 mb-6">
                <button
                  onClick={flipPrev}
                  disabled={currentPage <= 0}
                  className="w-12 h-12 border border-[#CAFF00]/40 flex items-center justify-center text-[#CAFF00] hover:bg-[#CAFF00]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={flipNext}
                  disabled={currentPage >= numPages - 1}
                  className="w-12 h-12 border border-[#CAFF00]/40 flex items-center justify-center text-[#CAFF00] hover:bg-[#CAFF00]/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Flip book */}
              <div
                className="flex items-center justify-center"
                style={{ minHeight: PAGE_HEIGHT + 40 }}
              >
                {/* @ts-ignore */}
                <HTMLFlipBook
                  ref={bookRef}
                  width={PAGE_WIDTH}
                  height={PAGE_HEIGHT}
                  size="fixed"
                  drawShadow={true}
                  flippingTime={600}
                  usePortrait={true}
                  showCover={true}
                  onFlip={onFlip}
                  className="pdf-flip-book"
                  style={{}}
                >
                  {Array.from({ length: numPages }, (_, i) => (
                    <PDFPage key={i} pageNumber={i + 1} />
                  ))}
                </HTMLFlipBook>
              </div>
            </>
            )}
          </Document>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
