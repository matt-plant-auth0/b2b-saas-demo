import ExpirationBar from "../navbars/expirationbar";
import HomeNavBar from "../navbars/home-navbar";

export default function HomeLayout({ children }) {
  const picture_url = children.props.user?.picture;
  const user_name = children.props.user?.name;
  const remaining_days = children.props.user?.remaining_days;
  const user_role = children.props.user?.role;
  const subscription_plan = children.props.user?.subscription_plan;

  return (
    <>
      <div className="mx-auto md:max-w-7xl max-w-full flex flex-col max-h-screen">
        <div className="h-20">
          <HomeNavBar
            picture_url={picture_url}
            user_name={user_name}
            user_role={user_role}
          />
        </div>
        <div className="h-8 w-full flex-auto">
          <ExpirationBar
            remaining_days={remaining_days}
            subscription_plan={subscription_plan}
          />
        </div>
        <div className="mb-auto p-2">{children}</div>
        <div className="h-10">
          <p className="my-4 mt-8 text-xs text-center text-gray-400 align-bottom">
            <span>Copyright © 2023</span>
          </p>
        </div>
      </div>
    </>
  );
}
