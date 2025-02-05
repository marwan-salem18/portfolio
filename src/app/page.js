import Input from './input'
import Image from 'next/image'
import pic from './../../public/pic.jpg'
export default function Home() {
  return (
    <>
      <Image
        src={pic}
        alt="pic of me"
        className="aspect-square 
        w-90 rounded-full"
      />
      <div>
        <p className="text-6xl">Hi, I'm Marwan Mohamed</p>
        <p className="text-2xl">An Aspiring Software Engineer</p>
      </div>
    </>
  );
}
