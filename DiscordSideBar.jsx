export default function DiscordSideBar() {
  return (
    <div className="font-sans fixed top-0 left-0 h-screen w-16 m-0 p-2 flex flex-col bg-gray-900 text-secondary shadow-xl">
      <SideBarIcon icon="A" />
      <SideBarIcon icon="B" />
      <SideBarIcon icon="C" />
      <SideBarIcon icon="D" />
      <SideBarIcon icon="E" />
    </div>
  );
}

function SideBarIcon({ icon, text = "tooltip 💡" }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}
