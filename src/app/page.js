import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";


export default function Home() {
  
 

  return (
    <>
      <HeroSection />
      <Footer />
    </>
  );
}



















// import MangoDomainValidator from "mango-domain-validate";
// import { useAuth } from "./auth/login";


  // const auth = useAuth();
  // const validate = new MangoDomainValidator();
  // console.log("user data =======>", auth);
  // const Login = async () => {
  // try {
  //   const result = await validate.validateUser("ammar.mmit", '17583');
  //   return result.data;
  // } catch (error) {
  //   return error;
  // }