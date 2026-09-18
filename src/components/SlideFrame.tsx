import type { ReactNode } from 'react';
import type { SlideMeta } from '../data/presentation';
import { Icon } from './Icon';

type Props = {
  slide: SlideMeta;
  index: number;
  total: number;
  isMenuOpen: boolean;
  allSlides: SlideMeta[];
  onPrevious: () => void;
  onNext: () => void;
  onMenuToggle: () => void;
  onSelect: (index: number) => void;
  onFullscreen: () => void;
  children: ReactNode;
};

export function SlideFrame({ slide, index, total, isMenuOpen, allSlides, onPrevious, onNext, onMenuToggle, onSelect, onFullscreen, children }: Props) {
  return (
    <main className="presentation-shell" aria-label={`Экран ${index + 1}: ${slide.navLabel}`}>
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#slide-1" onClick={(event) => { event.preventDefault(); onSelect(0); }} aria-label="К началу презентации">fin<span>code</span></a>
        <div className="topbar-actions">
          <button className="icon-button" onClick={onFullscreen} aria-label="Открыть полный экран" title="Полный экран"><Icon name="fullscreen" size={19} /></button>
          <button className="menu-button" onClick={onMenuToggle} aria-expanded={isMenuOpen} aria-controls="slide-menu"><Icon name="menu" size={19} /> Разделы</button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="slide-menu" id="slide-menu" aria-label="Разделы презентации">
          {allSlides.map((item, itemIndex) => (
            <button key={item.id} className={itemIndex === index ? 'active' : ''} onClick={() => onSelect(itemIndex)}>
              <span>{String(item.id).padStart(2, '0')}</span>{item.navLabel}
            </button>
          ))}
        </nav>
      )}
      <section className="slide-content" aria-labelledby={`slide-title-${slide.id}`}>
        {children}
      </section>
      <footer className="controls">
        <div className="progress-wrap" aria-label={`Экран ${index + 1} из ${total}`}><div className="progress"><span style={{ width: `${((index + 1) / total) * 100}%` }} /></div><span className="counter">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span></div>
        <div className="control-buttons">
          <button className="nav-button" onClick={onPrevious} disabled={index === 0} aria-label="Предыдущий экран"><Icon name="arrow-left" /></button>
          <button className="nav-button primary" onClick={onNext} disabled={index === total - 1} aria-label="Следующий экран"><Icon name="arrow-right" /></button>
        </div>
      </footer>
    </main>
  );
}
