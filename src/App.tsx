import { useEffect, useMemo, useState } from 'react';
import { SlideFrame } from './components/SlideFrame';
import { slides } from './data/presentation';
import { BarrierSlide, BenefitsSlide, ContextSlide, CtaSlide, HeroSlide, ProcessSlide } from './slides/Slides';

const slideViews = [HeroSlide, BarrierSlide, ProcessSlide, BenefitsSlide, ContextSlide, CtaSlide];

function getIndexFromHash() {
  const found = /^#slide-(\d+)$/.exec(window.location.hash);
  const index = found ? Number(found[1]) - 1 : 0;
  return index >= 0 && index < slides.length ? index : 0;
}

export default function App() {
  const [index, setIndex] = useState(getIndexFromHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const Slide = useMemo(() => slideViews[index], [index]);

  const selectSlide = (nextIndex: number) => {
    const safeIndex = Math.max(0, Math.min(nextIndex, slides.length - 1));
    setIndex(safeIndex);
    setMenuOpen(false);
    window.location.hash = `slide-${safeIndex + 1}`;
  };

  useEffect(() => {
    const onHashChange = () => setIndex(getIndexFromHash());
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select')) return;
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); selectSlide(index + 1); }
      if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); selectSlide(index - 1); }
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('keydown', onKeyDown);
    return () => { window.removeEventListener('hashchange', onHashChange); window.removeEventListener('keydown', onKeyDown); };
  }, [index]);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { /* Browser or embedding context may block fullscreen. */ }
  };

  return <SlideFrame slide={slides[index]} index={index} total={slides.length} isMenuOpen={menuOpen} allSlides={slides} onPrevious={() => selectSlide(index - 1)} onNext={() => selectSlide(index + 1)} onMenuToggle={() => setMenuOpen(!menuOpen)} onSelect={selectSlide} onFullscreen={toggleFullscreen}><Slide /></SlideFrame>;
}
