import UserDetails from "@/components/organisms/user/UserDetails";
import { users } from "@/lib/extensions/data/Users";

export default async function UsersDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const param = params.userId;

  const userArray = users.filter((user) => user._id === param);

  return (
    <>
      <UserDetails user={userArray[0]} />
    </>
  );
}
