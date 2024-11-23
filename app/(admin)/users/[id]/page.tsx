import { EditUserForm } from "./edit-user-form";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  return {
    title: `Edit product ${id}`,
  };
};

const EditUser = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <EditUserForm userId={id} />;
};

export default EditUser;
