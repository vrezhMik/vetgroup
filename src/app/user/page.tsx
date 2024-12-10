import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import UserPageContent from "@/components/UserComponents/UserPageContent/userPageContent.component";
export default function UserPage() {
  return (
    <main className="flex relative">
      <Sidebar />
      <UserPageContent />
    </main>
  );
}
