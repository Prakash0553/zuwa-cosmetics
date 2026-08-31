import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../store/authSlice";
import { FaXmark } from "react-icons/fa6";

const ProfileMenu = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="fixed right-0 top-10 z-50 w-full max-w-[250px] h-[24vh] bg-white rounded-3xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-base font-bold text-[#991b60]">UserProfile</h2>

        <button
          onClick={onClose}
          className="cursor-pointer text-3xl text-red-600"
        >
          <FaXmark />
        </button>
      </div>

      <div className="px-4 ">
        <button
          onClick={() => navigate("/profile")}
          className="block w-full rounded px-3 py-2  text-left hover:bg-gray-100"
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          className="block w-full rounded px-3  text-left hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
