import Link from 'next/link'


export default function Button({text}) {
  return (
    <Link href='' className="px-5 py-3 bg-accent hover:bg-black text-white inline-block my-5">
        {text}
    </Link>
  )
}
