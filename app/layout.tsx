import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./common/Header";
import Footer from "./common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      
    <link href="/img/favicon.ico" rel="icon"/>

   {/*   <!-- Google Web Fonts --> */}
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>  

     {/*  <!-- Font Awesome -->  */}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet"/>

    {/*  <!-- Libraries Stylesheet --> */}
    <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>

    {/*  <!-- Customized Bootstrap Stylesheet --> */}
    <link href="/css/style.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>

    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>

    {/* <!-- JavaScript Libraries --> */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="/lib/easing/easing.min.js"></script>
    <script src="/lib/owlcarousel/owl.carousel.min.js"></script>

    {/* <!-- Contact Javascript File --> */}
    <script src="/mail/jqBootstrapValidation.min.js"></script>
    <script src="/mail/contact.js"></script>

    {/* <!-- Template Javascript --> */}
    {/* <script src="/js/main.js"></script> */}
      </body>
    </html>
  );
}
