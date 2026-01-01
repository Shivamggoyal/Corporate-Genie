import React from 'react';

interface HeicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export function HeicImage({ src, alt, className, onClick }: HeicImageProps) {
  const [resolvedSrc, setResolvedSrc] = React.useState<string>(src);

  React.useEffect(() => {
    const isHeic = src.toLowerCase().endsWith('.heic');
    if (!isHeic) {
      setResolvedSrc(src);
      return;
    }
    let revoked: string | null = null;
    (async () => {
      try {
        const res = await fetch(src);
        const ab = await res.arrayBuffer();
        const blob = new Blob([ab], { type: 'image/heic' });
        const heic2any = (await import('heic2any')).default;
        const output = await heic2any({ blob, toType: 'image/jpeg', quality: 0.8 });
        const outBlob = Array.isArray(output) ? output[0] as Blob : (output as Blob);
        const url = URL.createObjectURL(outBlob);
        revoked = url;
        setResolvedSrc(url);
      } catch (e) {
        setResolvedSrc(src);
      }
    })();
    return () => {
      if (revoked) URL.revokeObjectURL(revoked);
    };
  }, [src]);

  return <img src={resolvedSrc} alt={alt} className={className} onClick={onClick} />;
}
