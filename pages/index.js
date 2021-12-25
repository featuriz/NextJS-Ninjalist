import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../app/comps/Footer'
import Navbar from '../app/comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum hic consequatur. Et, laudantium repudiandae dolores commodi inventore repellat? Fugiat vero nulla ipsam! Laborum aut nulla deserunt assumenda hic neque.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum hic consequatur. Et, laudantium repudiandae dolores commodi inventore repellat? Fugiat vero nulla ipsam! Laborum aut nulla deserunt assumenda hic neque.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
