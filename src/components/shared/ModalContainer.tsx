import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  toggleModal: () => void;
  fullScreen?: boolean;
  children: ReactNode;
  title?: string;
  hideHeader?: boolean;
}
const ModalContainer = ({
  toggleModal,
  title,
  fullScreen = false,
  children,
  hideHeader = false,
}: Props) => {
  return (
    <div
      onClick={toggleModal}
      className="z-[99] fixed h-full inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-hidden bg-brand-bg text-gray-100 p-4 rounded-xl shadow-lg ${
          fullScreen
            ? "w-full h-full max-w-7xl max-h-[95vh] md:max-h-[90vh] lg:max-h-[85vh]"
            : "w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:h-[unset] sm:max-h-[740px] sm:overflow-y-auto"
        }`}
      >
        {!hideHeader && (
          <div className="flex items-center justify-between border-b border-gray-300 px-4 py-2 pb-1">
            <h2 className="text-xl font-semibold ">{title}</h2>

            <MdClose size={25} onClick={toggleModal} cursor="pointer" />
          </div>
        )}

        <main className="h-full p-4">{children}</main>
      </div>
    </div>
  );
};

export default ModalContainer;
