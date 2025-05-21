import RegistrationStepper from "@/components/registration/RegistrationStepper";
import PlansViewer from "@/components/plans/PlansViewer";
import PayoutViewer from "@/components/payout/PayoutViewer";
import FooterViewer from "@/components/footer/FooterViewer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <RegistrationStepper />
      <PlansViewer/>
      <PayoutViewer/>
      <FooterViewer/>
    </main>
  );
}
