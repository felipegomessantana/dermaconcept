/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

type _ResponsivePicture = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

declare module "*?responsive" {
  const out: _ResponsivePicture;
  export default out;
}

// Match `?responsive&w=...&format=...` etc.
declare module "*&responsive" {
  const out: _ResponsivePicture;
  export default out;
}

declare module "*?responsive&*" {
  const out: _ResponsivePicture;
  export default out;
}
