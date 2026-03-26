type PropertyGalleryProps = {
  images: string[]
  title: string
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [heroImage, ...secondaryImages] = images

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] border border-[#dfd1c6] bg-white shadow-[0_24px_60px_rgba(51,28,19,0.08)]">
        <img
          src={heroImage}
          alt={title}
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {secondaryImages.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-[1.5rem] border border-[#dfd1c6] bg-white shadow-sm"
          >
            <img
              src={image}
              alt={`Vue ${index + 2} du bien`}
              className="h-40 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
