import { ReactNode } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  toggleModal: () => void;
  fullScreen?: boolean;
  children: ReactNode;
  title: string;
}
const ModalContainer = ({
  toggleModal,
  title,
  fullScreen = false,
  children,
}: Props) => {
  return (
    <div
      onClick={toggleModal}
      className="z-[99] fixed h-full inset-0 bg-[#0000002b] backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100 mx-2 rounded-lg shadow-lg ${
          fullScreen
            ? "w-full h-full max-w-7xl max-h-[95vh] md:max-h-[90vh] lg:max-h-[85vh]"
            : "w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:h-[unset] sm:max-h-[740px] sm:overflow-y-auto"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-300 px-4 py-2 pb-1 text-gray-800 dark:text-gray-100">
          <h2 className="text-xl font-semibold ">{title}</h2>

          <MdClose size={25} onClick={toggleModal} cursor="pointer" />
        </div>

        <main className="overflow-y-scroll h-full p-4">{children}</main>
      </div>
    </div>
  );
};

export default ModalContainer;
