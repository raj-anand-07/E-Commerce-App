import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Welcome to Forever, your one-stop online destination for quality
            products at unbeatable prices. We're passionate about making your
            shopping experience fast, easy, and enjoyable. Our collection
            combines top brands and unique finds, ensuring you always discover
            something you'll love. With secure payments, quick delivery, and
            friendly customer support, we're here to bring convenience right to
            your doorstep.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>Delivery</li>
            <li><a href="/#policy">Privary policy</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-123-456-789</li>
            <li>contactforever@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright &copy;2025 @forever.com | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
