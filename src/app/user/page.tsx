import Sidebar from "@/components/Elements/Sidebar/sidebar.component";
import UserPageContent from "@/components/UserComponents/UserPageContent/userPageContent.component";
import { get_current_user } from "@/utils/query";
import { cookies } from "next/headers";
import ClientRedirect from "@/components/ClientRedirect";

export default async function UserPage() {
  const cookieStore = await cookies(); // ✅ Await this
  const jwt = cookieStore.get("jwt")?.value;
  const documentId = cookieStore.get("document")?.value;

  if (!jwt || !documentId) {
    return <ClientRedirect to="/login" />;
  }

  const user = await get_current_user(documentId);

  if (!user || !user.vetgroupUsers?.length) {
    return <ClientRedirect to="/login" />;
  }

  const current_user = {
    documentId,
    first_name: user.vetgroupUsers[0].user.first_name,
    last_name: user.vetgroupUsers[0].user.last_name,
    company: user.vetgroupUsers[0].user.company,
  };

  return (
    <main className="flex relative">
      <Sidebar current_user={current_user} />
      <UserPageContent />
    </main>
  );
}
