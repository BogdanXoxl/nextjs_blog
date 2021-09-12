import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/Layout";
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter();
    router.push('/posts');

    return (
      <Layout>
        Content
      </Layout>
    );
};