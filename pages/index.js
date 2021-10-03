import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Geomats International</title>
        <meta
          name="Geomats International"
          content="Geomats International, Metal, Industry, Metal Industry "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
