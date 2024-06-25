import { useState } from 'react'

import { XMarkIcon } from '@heroicons/react/24/solid'

import Image from 'next/image'

type ExpandableImageProps = {
  src: string
  alt: string
  width: number
  height: number
}

export function ExpandableImage({ src, alt, width, height }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Image
        onClick={handleOpen}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="cursor-pointer rounded-md"
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClose}
        >
          <div className="relative w-3/4 h-3/4">
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />

            <div className="absolute top-0 right-0 p-4 cursor-pointer" onClick={handleClose}>
              <div className="bg-white p-2 rounded-full">
                <XMarkIcon className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
