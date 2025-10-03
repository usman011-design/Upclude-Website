import Image from "next/image"

export function DropAnxietyInterface() {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="relative w-full max-w-full top-10 h-200 left-1/4">
        <Image
          src="/sudoko.png" // put inside /public folder
          alt="Drop Anxiety Interface"
          width={400}
          height={400}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  )
}
