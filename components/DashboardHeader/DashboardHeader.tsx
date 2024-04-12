import { Avatar } from "../Avatar/Avatar";
import { avatarAlt, avatarSrc, headerText } from "../Page/data";
import { PageLayoutHeader } from "../PageLayout/PageLayout";

export type DashboardHeaderProps = {};
const fetchAvatarData = () => {
  return [avatarSrc, avatarAlt];
};
export const DashboardHeader: React.FC<DashboardHeaderProps> = ({}) => {
  const [avatarSrc, avatarAlt] = fetchAvatarData();
  return (
    <PageLayoutHeader>
      <Avatar src={avatarSrc} alt={avatarAlt} />
      <p className="text-slate-900 inline pl-4">List my top 10 accounts</p>
    </PageLayoutHeader>
  );
};
