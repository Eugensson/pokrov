import Form from "@/app/admin/users/[id]/Form";
import AdminLayout from "@/components/admin/AdminLayout";

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Edit User ${params.id}`,
  };
}

export default function UserEditPage({ params }: { params: { id: string } }) {
  return (
    <AdminLayout activeItem="users">
      <Form userId={params.id} />
    </AdminLayout>
  );
}
