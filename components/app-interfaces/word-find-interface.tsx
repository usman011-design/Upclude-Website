import Image from "next/image"

interface WordFindInterfaceProps {
  src: string
}

export function WordFindInterface({ src }: WordFindInterfaceProps) {
  return (
    <Image
      src={src} // make sure the image is in /public folder or imported
      alt="Word Find Interface"
      width={500}
      height={500}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "relative",
        top: "30px",
      }}
    />
  )
}
