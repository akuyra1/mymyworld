import Image from "next/image";




export default function Home() {


  return (
    <div>
      <div className="container" >
        <h1 className="title" >MyMyWorld</h1>
        <p className="content">Welcome to myWorld – where every purchase earns you cashback, exclusive rewards, and benefits that elevate your shopping experience.</p>
        <Image src="/myworld.jpg" alt="MyMyWorld" className="myworld" width={700} height={700} />
        
      </div>

    </div>
  );
}
