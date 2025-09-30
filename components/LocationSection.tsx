import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationSection() {
  return (
    <section className="bg-white py-16">
      {/* Header with Icon */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <a
          href="https://maps.app.goo.gl/N5WDg2yrsyfKvW7M6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 group"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary group-hover:text-primary/80 transition-colors">
            Къде да ни намерите
          </h2>
          <FaMapMarkerAlt className="text-primary text-2xl group-hover:text-primary/80 transition-colors" />
        </a>
      </div>

      {/* Map - Full width on mobile, contained on desktop */}
      <div className="w-full lg:max-w-7xl lg:mx-auto lg:px-6">
        <div className="w-full h-[400px] lg:h-[600px] lg:rounded-tl-2xl lg:rounded-br-2xl overflow-hidden">
          <iframe
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8755419825894!2d23.31841731551254!3d42.694918779162576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8561e0de2ddc%3A0xdc2de0892b1e6661!2sMint%20Clinic%20Dental%20Excellence!5e0!3m2!1sen!2sbg!4v1234567890123!5m2!1sen!2sbg"
            title="Mint Clinic Dental Excellence Location"
            aria-label="Mint Clinic Dental Excellence Location"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
