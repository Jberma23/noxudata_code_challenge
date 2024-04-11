export type DashboardHeaderProps = {};

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({}) => {
  return (
    <div className="bg-white">
      <div className="p-8 w-[1100px] h-[104px] inline ml-[150px]">
        <div className="py-8 px-[150px]">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt={"user avatar image"}
          />

          <p className="text-slate-900 inline pl-4">List my top 10 accounts</p>
        </div>
      </div>
    </div>
  );
};
