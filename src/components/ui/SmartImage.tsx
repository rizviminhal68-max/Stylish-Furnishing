import type { ImageAsset } from '@/lib/images';
import { cx } from '@/lib/utils';

type Props = {
  asset: ImageAsset;
  /**
   * Overrides the manifest alt text. Pass an empty string for decorative
   * images so screen readers skip them.
   */
  alt?: string;
  /** Width / height. Reserves space so the page never jumps while loading. */
  ratio?: number;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** Above-the-fold images: eager load, high priority, no lazy loading. */
  priority?: boolean;
  /**
   * Fill the parent instead of reserving a ratio. The parent must have a
   * height of its own (a grid row, or an aspect-* class).
   */
  fill?: boolean;
};

/**
 * Renders an <img> from the image manifest with a responsive srcset, a
 * fixed aspect ratio (no layout shift) and lazy loading below the fold.
 */
export function SmartImage({
  asset,
  alt,
  ratio = 3 / 2,
  sizes = '100vw',
  className,
  imgClassName,
  priority = false,
  fill = false,
}: Props) {
  const width = 1200;
  const height = Math.round(width / ratio);

  return (
    <div
      className={cx(
        'relative overflow-hidden bg-sand-200',
        fill ? 'h-full w-full' : undefined,
        className,
      )}
      style={fill ? undefined : { aspectRatio: `${ratio}` }}
    >
      <img
        src={asset.lg}
        srcSet={`${asset.sm} 480w, ${asset.lg} 1200w`}
        sizes={sizes}
        alt={alt ?? asset.alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        className={cx('size-full object-cover', imgClassName)}
      />
    </div>
  );
}
