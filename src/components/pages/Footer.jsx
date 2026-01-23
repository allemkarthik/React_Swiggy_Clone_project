const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div
        className="
          mx-auto
          w-full
          px-4
          py-10
          sm:px-6
          md:px-8
          lg:w-[80%]

          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-6
        "
      >
        
        <div>
          <h1 className="font-bold py-2">Food Ordering App</h1>
          <p className="text-sm text-gray-700">© 2026 App Limited</p>
        </div>

       
        <div>
          <h1 className="font-bold py-2">Company</h1>
          <p>About us</p>
          <p>App Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>App One</p>
          <p>Instamart</p>
          <p>Dineout</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>

        
        <div>
          <h1 className="font-bold py-2">Contact Us</h1>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>

          <h1 className="font-bold py-4">Legal</h1>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Investor Relations</p>
        </div>

        
        <div>
          <h1 className="font-bold py-2">Available In</h1>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
        </div>

        
        <div>
          <h1 className="font-bold py-2">Life at App</h1>
          <p>Explore with App</p>
          <p>News</p>
          <p>Snackables</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
