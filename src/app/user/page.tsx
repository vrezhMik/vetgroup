import Sidebar from "@/components/Sidebar/sidebar.component";
import UserPageContent from "@/components/UserPageContent/userPageContent.component";
export default function UserPage() {
  return (
    <main className="flex relative">
      <Sidebar />
      <UserPageContent />
    </main>
  );
}
