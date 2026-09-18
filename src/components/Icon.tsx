type IconName = 'arrow-left' | 'arrow-right' | 'menu' | 'fullscreen' | 'close' | 'clock' | 'coins' | 'box' | 'check' | 'plus';

type Props = { name: IconName; size?: number; strokeWidth?: number };

export function Icon({ name, size = 24, strokeWidth = 1.8 }: Props) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };
  const paths: Record<IconName, JSX.Element> = {
    'arrow-left': <path d="m15 18-6-6 6-6" />,
    'arrow-right': <path d="m9 18 6-6-6-6" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    fullscreen: <><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" /></>,
    close: <><path d="m7 7 10 10M17 7 7 17" /></>,
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></>,
    coins: <><ellipse cx="12" cy="6.5" rx="6.5" ry="3" /><path d="M5.5 6.5v7c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-7M5.5 10c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3" /></>,
    box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
    check: <path d="m5 12 4.2 4.2L19 6.5" />,
    plus: <path d="M12 5v14M5 12h14" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
