import EventsList from "@/components/EventsList";

export const metadata = {
  title: "Global Exhibitions & Events | Aditya Chemicals CPhI IFT",
  description: "Stay updated on the international pharma and food ingredient trade shows (CPhI, SupplySide, Vitafoods, IFT) where Aditya Chemicals showcases compliance and manufacturing innovations.",
};

export default function EventsPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-16">
      {/* Title Header */}
      <div className="border-b border-surface-container-highest pb-8">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy">
          Events & <span className="text-primary italic">Exhibitions</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mt-4">
          Connect with Aditya Chemicals worldwide. We showcase our latest API developments, food additives, and nutritional formulations at leading global trade shows.
        </p>
      </div>

      <EventsList />
    </div>
  );
}
