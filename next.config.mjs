/** Interní rezervační systém — na webu na něj nikde nevede odkaz. */
const BOOKING_URL = "https://v0-salon-booking-app-delta.vercel.app";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/system", destination: BOOKING_URL, permanent: false },
      { source: "/rezervace", destination: "/kontakt#zeptejte-se", permanent: true },
    ];
  },
};

export default nextConfig;
