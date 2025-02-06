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
        md:w-90 w-full rounded-full "
      />
      <div className='mt-20 md:mt-0'>
        <p className="text-3xl ">Hi, I'm Marwan Mohamed</p>
        <p className="text-2xl">An Aspiring Software Engineer</p>
      </div>
    </>
  );
}
