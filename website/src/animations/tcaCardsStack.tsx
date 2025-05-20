import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StackAnimationOptions {
  section: string;
  cards: string;
  fromLeft?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  pin?: boolean;
  stagger?: number;
}

export function tcaCardStackAnimation({
  section,
  cards,
  fromLeft = '300%',
  start = 'top top',
  end = 'bottom top',
  scrub = true,
  pin = true,
  stagger = 0.2,
}: StackAnimationOptions) {
  const cardElements = gsap.utils.toArray<HTMLElement>(cards);

  if (cardElements.length === 0) return;

  gsap.set(cardElements, { x: fromLeft });

  gsap.to(cardElements, {
    x: '0%',
    ease: 'power2.out',
    stagger,
    scrollTrigger: {
      trigger: section,
      start,
      end,
      scrub,
      pin,
    },
  });
}
