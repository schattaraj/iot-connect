import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "../styles/app.scss"
export default function App({ Component, pageProps }) {
  return <Layout>
  <Component {...pageProps} />
  </Layout>
}
